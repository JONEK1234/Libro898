import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { BookCover } from './components/BookCover';
import { BookPage } from './components/BookPage';
import { ReaderControls } from './components/ReaderControls';
import { SettingsModal } from './components/SettingsModal';
import { TableOfContentsModal } from './components/TableOfContentsModal';
import { BookmarksNotesModal } from './components/BookmarksNotesModal';
import { SearchModal } from './components/SearchModal';
import { AmbientAudioModal } from './components/AmbientAudioModal';
import { FullscreenGuideModal } from './components/FullscreenGuideModal';
import { NOVEL_PAGES, BOOK_METADATA } from './data/novelData';
import { ReaderSettings, Bookmark, NoteHighlight } from './types/book';
import { playPageFlipSound, startAmbientSound, stopAmbientSound, updateAmbientVolume } from './utils/audioEngine';
import { Maximize2, Minimize2 } from 'lucide-react';

const STORAGE_KEY_PAGE = 'il_custode_page_v4';
const STORAGE_KEY_SETTINGS = 'il_custode_settings_v4';
const STORAGE_KEY_BOOKMARKS = 'il_custode_bookmarks_v4';
const STORAGE_KEY_HIGHLIGHTS = 'il_custode_highlights_v4';

// Primary Default: Ultra-Warm Amber Paper (Caldissimo, 0% blue light)
const DEFAULT_SETTINGS: ReaderSettings = {
  theme: 'warm-amber',
  fontFamily: 'lora',
  fontSize: 'base',
  lineSpacing: 'normal',
  textAlign: 'justify',
  pageLayout: 'single',
  soundEnabled: true,
  ambientSound: 'none',
  ambientVolume: 0.4,
};

export default function App() {
  // Navigation: 0 = Cover, 1..50 = Novel Pages
  const [currentPage, setCurrentPage] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PAGE);
      if (saved) {
        const num = parseInt(saved, 10);
        if (num >= 0 && num <= 50) return num;
      }
    } catch {
      // ignore
    }
    return 0; // Default starts at cover
  });

  // Page direction for fluid spring page turn animation (-1 = back, 1 = forward)
  const [pageDirection, setPageDirection] = useState<number>(1);

  // Reader Appearance & Sound Settings
  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch {
      // ignore
    }
    return DEFAULT_SETTINGS;
  });

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        page: 1,
        timestamp: Date.now(),
        chapterTitle: "Capitolo I · L'Ingranaggio Senza Nome",
        excerpt: 'A Venezia le ore non passano allo stesso modo che sulla terraferma...',
      },
    ];
  });

  // Highlights and Notes
  const [highlights, setHighlights] = useState<NoteHighlight[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HIGHLIGHTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'quote-1',
        page: 3,
        text: 'Il tempo creato non può essere distrutto dall\'autorità di Roma: ciò che gli uomini rifiutarono di contare si raccolse come rugiada in questo vaso di rame.',
        userNote: 'Il cuore poetico del manoscritto di fra\' Cristoforo.',
        timestamp: Date.now(),
      },
    ];
  });

  // UI state
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isTOCModalOpen, setIsTOCModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isBookmarksModalOpen, setIsBookmarksModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isBrowserFreeModalOpen, setIsBrowserFreeModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Drag tracking to distinguish tap from swipe
  const isDragging = useRef(false);
  const hideControlsTimer = useRef<number | null>(null);

  // Fullscreen event listener sync
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PAGE, currentPage.toString());
    } catch {
      // ignore
    }
  }, [currentPage]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HIGHLIGHTS, JSON.stringify(highlights));
    } catch {
      // ignore
    }
  }, [highlights]);

  // Handle ambient sound engine
  useEffect(() => {
    startAmbientSound(settings.ambientSound, settings.ambientVolume);
    return () => {
      stopAmbientSound();
    };
  }, [settings.ambientSound]);

  // Handle volume updates
  const handleUpdateVolume = (vol: number) => {
    setSettings((prev) => ({ ...prev, ambientVolume: vol }));
    updateAmbientVolume(vol);
  };

  // Fluid page turn action with sound and direction
  const goToPage = useCallback(
    (targetPage: number) => {
      if (targetPage < 0 || targetPage > 50) return;
      setPageDirection(targetPage >= currentPage ? 1 : -1);

      if (settings.soundEnabled && targetPage > 0) {
        playPageFlipSound();
      }
      setCurrentPage(targetPage);

      // Auto-hide controls after a turn for pure book immersion
      if (targetPage > 0) {
        if (hideControlsTimer.current) window.clearTimeout(hideControlsTimer.current);
        hideControlsTimer.current = window.setTimeout(() => {
          setControlsVisible(false);
        }, 3200);
      }
    },
    [currentPage, settings.soundEnabled]
  );

  const nextPage = useCallback(() => {
    if (currentPage < 50) {
      if (settings.pageLayout === 'double' && window.innerWidth >= 1024 && currentPage + 2 <= 50) {
        goToPage(currentPage + 2);
      } else {
        goToPage(currentPage + 1);
      }
    }
  }, [currentPage, settings.pageLayout, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      if (settings.pageLayout === 'double' && window.innerWidth >= 1024 && currentPage - 2 >= 1) {
        goToPage(currentPage - 2);
      } else {
        goToPage(currentPage - 1);
      }
    } else if (currentPage === 1) {
      goToPage(0); // Return to cover
    }
  }, [currentPage, settings.pageLayout, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'Escape') {
        setIsTOCModalOpen(false);
        setIsSettingsModalOpen(false);
        setIsBookmarksModalOpen(false);
        setIsSearchModalOpen(false);
        setIsAudioModalOpen(false);
        setIsBrowserFreeModalOpen(false);
        setControlsVisible(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  // Tap zones on the full-screen reading area
  const handleReadingAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    // Left 22% -> Previous page
    if (clickX < width * 0.22) {
      prevPage();
    }
    // Right 22% -> Next page
    else if (clickX > width * 0.78) {
      nextPage();
    }
    // Middle 56% -> Toggle HUD controls
    else {
      setControlsVisible((prev) => !prev);
    }
  };

  // Bookmark toggle for active page
  const toggleBookmark = (pageNum?: number) => {
    const target = pageNum || currentPage;
    if (target < 1 || target > 50) return;

    setBookmarks((prev) => {
      const exists = prev.some((b) => b.page === target);
      if (exists) {
        return prev.filter((b) => b.page !== target);
      } else {
        const pageData = NOVEL_PAGES.find((p) => p.id === target);
        return [
          ...prev,
          {
            page: target,
            timestamp: Date.now(),
            chapterTitle: pageData ? `${pageData.chapterTitle} · ${pageData.chapterSubtitle}` : `Pagina ${target}`,
            excerpt: pageData?.paragraphs[0]?.slice(0, 85) || '',
          },
        ].sort((a, b) => a.page - b.page);
      }
    });
  };

  // Save quote handler
  const handleSaveQuote = (quoteText: string) => {
    const newHighlight: NoteHighlight = {
      id: `highlight-${Date.now()}`,
      page: currentPage,
      text: quoteText,
      timestamp: Date.now(),
    };
    setHighlights((prev) => [newHighlight, ...prev]);
    setIsBookmarksModalOpen(true);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
          .then(() => {
            setIsFullscreen(true);
          })
          .catch(() => {
            // Fullscreen prevented or blocked on mobile Safari/iOS -> open guide!
            setIsBrowserFreeModalOpen(true);
          });
      } else {
        // Not supported natively on this browser -> open guide!
        setIsBrowserFreeModalOpen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Ultra-warm backgrounds matching the paper warmth
  const readerBackgrounds: Record<string, string> = {
    'warm-amber': 'bg-[#F8E8C8]',
    candlelight: 'bg-[#F2DDB0]',
    sepia: 'bg-[#F5E5C4]',
    linen: 'bg-[#FAF0D8]',
    night: 'bg-[#14110E]',
  };

  const isNight = settings.theme === 'night';
  const activePageData = NOVEL_PAGES.find((p) => p.id === currentPage) || NOVEL_PAGES[0];
  const isCurrentBookmarked = bookmarks.some((b) => b.page === currentPage);

  // If in spread mode on desktop:
  const isSpreadActive = settings.pageLayout === 'double' && typeof window !== 'undefined' && window.innerWidth >= 1024;
  const secondPageNumber = currentPage < 50 ? currentPage + 1 : null;
  const secondPageData = secondPageNumber ? NOVEL_PAGES.find((p) => p.id === secondPageNumber) : null;

  return (
    <div
      className={`relative w-full h-screen h-[100dvh] w-[100dvw] overflow-hidden flex flex-col justify-between transition-colors duration-500 ${
        currentPage === 0
          ? 'bg-[#181614]'
          : readerBackgrounds[settings.theme] || readerBackgrounds['warm-amber']
      }`}
    >
      {/* 1. COVER / INTRO VIEW */}
      {currentPage === 0 ? (
        <BookCover
          onOpenBook={(startPage) => goToPage(startPage || 1)}
          savedPage={currentPage}
          totalBookmarks={bookmarks.length}
          onOpenTOC={() => setIsTOCModalOpen(true)}
          settings={settings}
          onOpenSettings={() => setIsSettingsModalOpen(true)}
          onOpenAudio={() => setIsAudioModalOpen(true)}
          onOpenFullscreenGuide={() => setIsBrowserFreeModalOpen(true)}
        />
      ) : (
        /* 2. IMMERSIVE READING ROOM: Entire Phone Screen IS the Page */
        <div
          className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden"
          onClick={handleReadingAreaClick}
        >
          {/* Top and Bottom Controls HUD */}
          <ReaderControls
            currentPage={currentPage}
            totalPages={50}
            currentPageData={activePageData}
            visible={controlsVisible}
            onPrevPage={prevPage}
            onNextPage={nextPage}
            onSeekPage={(page) => goToPage(page)}
            onGoCover={() => goToPage(0)}
            onOpenTOC={() => setIsTOCModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
            onOpenBookmarks={() => setIsBookmarksModalOpen(true)}
            onOpenSettings={() => setIsSettingsModalOpen(true)}
            onOpenAudio={() => setIsAudioModalOpen(true)}
            isBookmarked={isCurrentBookmarked}
            onToggleBookmark={() => toggleBookmark(currentPage)}
            isFullscreen={isFullscreen}
            onToggleFullscreen={handleToggleFullscreen}
            onOpenFullscreenGuide={() => setIsBrowserFreeModalOpen(true)}
            theme={settings.theme}
          />

          {/* Book Canvas Container: Edge-to-Edge on Mobile Phone */}
          <main className="w-full h-full flex items-center justify-center select-none overflow-hidden p-0 m-0">
            <motion.div
              key={currentPage}
              initial={{
                x: pageDirection > 0 ? 40 : -40,
                opacity: 0.95,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 440,
                damping: 38,
                mass: 0.5,
              }}
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => {
                isDragging.current = true;
              }}
              onDragEnd={(_e, info) => {
                setTimeout(() => {
                  isDragging.current = false;
                }, 50);

                const isHorizontal = Math.abs(info.offset.x) > Math.abs(info.offset.y) * 1.4;
                if (isHorizontal) {
                  if (info.offset.x < -50 || info.velocity.x < -280) {
                    nextPage();
                  } else if (info.offset.x > 50 || info.velocity.x > 280) {
                    prevPage();
                  }
                }
              }}
              className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
            >
              {/* Desktop Two-Page Spread or Single Phone Screen Page */}
              {isSpreadActive ? (
                <div className="w-full h-full max-h-[94vh] max-w-6xl mx-auto flex items-stretch justify-center rounded-2xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10">
                  {/* Left Page */}
                  <div className="flex-1 h-full overflow-hidden">
                    <BookPage
                      page={activePageData}
                      settings={settings}
                      isBookmarked={isCurrentBookmarked}
                      onToggleBookmark={toggleBookmark}
                      onSaveQuote={handleSaveQuote}
                      side="left"
                    />
                  </div>

                  {/* Book Center Fold / Spine Crease */}
                  <div className="w-3 bg-gradient-to-r from-black/25 via-black/40 to-black/25 shadow-inner shrink-0" />

                  {/* Right Page */}
                  <div className="flex-1 h-full overflow-hidden">
                    {secondPageData ? (
                      <BookPage
                        page={secondPageData}
                        settings={settings}
                        isBookmarked={bookmarks.some((b) => b.page === secondPageData.id)}
                        onToggleBookmark={toggleBookmark}
                        onSaveQuote={handleSaveQuote}
                        side="right"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center opacity-60 font-serif">
                        <p className="font-display text-xl mb-2">Fine del Volume</p>
                        <p className="text-xs">Hai completato tutte le 50 pagine del romanzo.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Single Page Mode: Literally fills 100% of the mobile phone screen */
                <div className="w-full h-full">
                  <BookPage
                    page={activePageData}
                    settings={settings}
                    isBookmarked={isCurrentBookmarked}
                    onToggleBookmark={toggleBookmark}
                    onSaveQuote={handleSaveQuote}
                    side="single"
                  />
                </div>
              )}
            </motion.div>
          </main>

          {/* Floating Fullscreen button when controls are hidden */}
          {!controlsVisible && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFullscreen();
              }}
              className="absolute bottom-5 right-5 z-30 p-3 rounded-full ios-glass-pill bg-amber-100/75 dark:bg-stone-900/75 text-amber-950 dark:text-stone-200 shadow-lg opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
              title={isFullscreen ? 'Riduci' : 'Schermo Intero'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          )}

          {/* Edge click guides for desktop */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
            className="absolute left-0 top-16 bottom-16 w-14 hidden md:flex items-center justify-start pl-2 cursor-pointer opacity-0 hover:opacity-40 transition-opacity"
            title="Pagina precedente"
          >
            <div className="w-8 h-12 rounded-r-lg bg-black/20 flex items-center justify-center text-white">
              ‹
            </div>
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              nextPage();
            }}
            className="absolute right-0 top-16 bottom-16 w-14 hidden md:flex items-center justify-end pr-2 cursor-pointer opacity-0 hover:opacity-40 transition-opacity"
            title="Pagina successiva"
          >
            <div className="w-8 h-12 rounded-l-lg bg-black/20 flex items-center justify-center text-white">
              ›
            </div>
          </div>
        </div>
      )}

      {/* MODAL DIALOGS */}
      <TableOfContentsModal
        isOpen={isTOCModalOpen}
        onClose={() => setIsTOCModalOpen(false)}
        currentPage={currentPage}
        onSelectPage={(page) => goToPage(page)}
        bookmarks={bookmarks}
        isNight={isNight}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onUpdateSettings={(newVals) => setSettings((prev) => ({ ...prev, ...newVals }))}
      />

      <BookmarksNotesModal
        isOpen={isBookmarksModalOpen}
        onClose={() => setIsBookmarksModalOpen(false)}
        bookmarks={bookmarks}
        highlights={highlights}
        onSelectPage={(page) => goToPage(page)}
        onRemoveBookmark={(pageNum) =>
          setBookmarks((prev) => prev.filter((b) => b.page !== pageNum))
        }
        onRemoveHighlight={(id) =>
          setHighlights((prev) => prev.filter((h) => h.id !== id))
        }
        onAddNoteToHighlight={(id, note) =>
          setHighlights((prev) =>
            prev.map((h) => (h.id === id ? { ...h, userNote: note } : h))
          )
        }
        isNight={isNight}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectPage={(page) => goToPage(page)}
        isNight={isNight}
      />

      <AmbientAudioModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        currentSound={settings.ambientSound}
        volume={settings.ambientVolume}
        onSelectSound={(sound) => setSettings((prev) => ({ ...prev, ambientSound: sound }))}
        onChangeVolume={handleUpdateVolume}
        isNight={isNight}
      />

      <FullscreenGuideModal
        isOpen={isBrowserFreeModalOpen}
        onClose={() => setIsBrowserFreeModalOpen(false)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        isNight={isNight}
      />
    </div>
  );
}
