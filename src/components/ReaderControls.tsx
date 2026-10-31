import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  List,
  Search,
  Bookmark,
  Sliders,
  Volume2,
  Maximize2,
  Minimize2,
  BookOpen,
  Smartphone
} from 'lucide-react';
import { BookPageData } from '../types/book';

interface ReaderControlsProps {
  currentPage: number;
  totalPages: number;
  currentPageData: BookPageData;
  visible: boolean;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSeekPage: (page: number) => void;
  onGoCover: () => void;
  onOpenTOC: () => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenSettings: () => void;
  onOpenAudio: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenFullscreenGuide?: () => void;
  theme: string;
}

export const ReaderControls: React.FC<ReaderControlsProps> = ({
  currentPage,
  totalPages,
  currentPageData,
  visible,
  onPrevPage,
  onNextPage,
  onSeekPage,
  onGoCover,
  onOpenTOC,
  onOpenSearch,
  onOpenBookmarks,
  onOpenSettings,
  onOpenAudio,
  isBookmarked,
  onToggleBookmark,
  isFullscreen,
  onToggleFullscreen,
  onOpenFullscreenGuide,
  theme,
}) => {
  const isNight = theme === 'night';
  const progressPercent = Math.round((currentPage / totalPages) * 100);

  // Remaining pages in chapter
  const pagesRemainingInChapter = 5 - currentPageData.pageInChapter;
  const timeRemainingText = pagesRemainingInChapter > 0 
    ? `~${pagesRemainingInChapter} min al prossimo capitolo` 
    : 'Ultima pagina del capitolo';

  // iPhone Apple Books floating glass pill styling
  const pillBgClass = isNight
    ? 'ios-glass-pill-dark bg-[#1A1816]/85 text-[#EFE7DE] shadow-2xl shadow-black/60'
    : 'ios-glass-pill bg-[#FDF7EA]/90 text-[#322419] shadow-xl shadow-amber-950/10';

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-40 transition-all duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Top iPhone-style Floating Header Pill */}
      <div 
        className="absolute left-0 right-0 px-3 sm:px-6 flex justify-center pointer-events-none"
        style={{
          top: 'calc(max(env(safe-area-inset-top, 0px), 44px) + 4px)',
        }}
      >
        <header
          className={`pointer-events-auto w-full max-w-3xl px-3 sm:px-5 py-2.5 rounded-full flex items-center justify-between transition-transform ${pillBgClass}`}
        >
          {/* Left zone: Home & TOC */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={onGoCover}
              className="min-h-[44px] min-w-[44px] px-2.5 py-1.5 flex items-center gap-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-xs font-sans font-medium"
              title="Torna alla copertina"
            >
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">Libreria</span>
            </button>

            <button
              onClick={onOpenTOC}
              className="min-h-[44px] min-w-[44px] px-2.5 py-1.5 flex items-center gap-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-xs font-sans font-medium"
              title="Indice capitoli"
            >
              <List className="w-4 h-4" />
              <span className="hidden md:inline">Indice</span>
            </button>
          </div>

          {/* Center zone: Chapter label */}
          <div className="text-center truncate px-2 max-w-[140px] sm:max-w-xs">
            <p className="text-[10px] font-sans font-semibold tracking-wider uppercase opacity-55 truncate">
              {currentPageData.chapterTitle}
            </p>
            <p className="font-display text-xs sm:text-sm font-semibold truncate leading-tight">
              {currentPageData.chapterSubtitle}
            </p>
          </div>

          {/* Right zone: Actions + Fullscreen */}
          <div className="flex items-center gap-0.5 sm:gap-1.5">
            {/* Fullscreen / Immersion Button - Prominent for phone & desktop */}
            <button
              onClick={() => {
                if (isFullscreen) {
                  onToggleFullscreen();
                } else if (onOpenFullscreenGuide) {
                  onOpenFullscreenGuide();
                } else {
                  onToggleFullscreen();
                }
              }}
              className={`min-h-[44px] px-2.5 sm:px-3 py-1.5 flex items-center gap-1.5 rounded-full transition-all text-xs font-sans font-medium active:scale-95 ${
                isFullscreen
                  ? 'bg-amber-600/20 text-amber-800 dark:text-amber-200 font-semibold'
                  : 'hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title="Vedi solo la pagina senza barre del browser (Schermo Intero / PWA)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {isFullscreen ? 'Riduci' : 'Senza Barre'}
              </span>
            </button>

            {onOpenFullscreenGuide && (
              <button
                onClick={onOpenFullscreenGuide}
                className="min-h-[44px] px-2 sm:px-2.5 py-1.5 flex items-center gap-1 rounded-full text-xs font-sans font-medium hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 text-amber-800 dark:text-amber-300"
                title="Vedi solo la pagina (rimuovi barre del browser)"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Senza barre</span>
              </button>
            )}

            <button
              onClick={onOpenSearch}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all"
              title="Cerca nel libro"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onToggleBookmark}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full active:scale-95 transition-all ${
                isBookmarked
                  ? 'text-red-700 dark:text-red-400 bg-red-500/15'
                  : 'hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title={isBookmarked ? 'Segnalibro attivo' : 'Aggiungi segnalibro'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onOpenBookmarks}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all"
              title="Segnalibri e note salvate"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAudio}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all"
              title="Atmosfera sonora"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Apple Books "AA" Typography button */}
            <button
              onClick={onOpenSettings}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-amber-600/15 hover:bg-amber-600/25 active:scale-95 transition-all text-xs font-serif font-bold text-amber-900 dark:text-amber-200"
              title="Impostazioni testo e calore pagina"
            >
              <span>AA</span>
            </button>
          </div>
        </header>
      </div>

      {/* Bottom iPhone-style Floating Scrubber Pill */}
      <div 
        className="absolute left-0 right-0 px-3 sm:px-6 flex justify-center pointer-events-none"
        style={{
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 12px)',
          bottom: 'max(env(safe-area-inset-bottom, 0px), 12px)',
        }}
      >
        <footer
          className={`pointer-events-auto w-full max-w-xl px-4 sm:px-6 py-3 rounded-2xl flex flex-col gap-2 transition-transform ${pillBgClass}`}
        >
          {/* Slider row with smooth buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPrevPage}
              disabled={currentPage <= 1}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all"
              title="Pagina precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Range Scrubber with Apple-like warm accent */}
            <div className="flex-1 flex flex-col justify-center px-1">
              <input
                type="range"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={(e) => onSeekPage(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-amber-900/15 dark:bg-white/20 rounded-full appearance-none cursor-pointer accent-amber-700 dark:accent-amber-500 focus:outline-none"
              />
            </div>

            <button
              onClick={onNextPage}
              disabled={currentPage >= totalPages}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all"
              title="Pagina successiva"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Reading progress information & iPhone-style footer */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans opacity-80 px-1 font-medium">
            <div className="flex items-center gap-2">
              <span className="tabular-nums font-semibold">
                Pagina {currentPage} di {totalPages}
              </span>
              <span>·</span>
              <span className="tabular-nums">{progressPercent}% letto</span>
            </div>

            <div className="text-stone-500 dark:text-stone-400 font-light truncate max-w-[170px] sm:max-w-none text-right">
              {timeRemainingText}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
