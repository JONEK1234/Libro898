import React, { useRef, useState, useEffect } from 'react';
import { Bookmark as BookmarkIcon, Quote, ChevronDown } from 'lucide-react';
import { BookPageData, ReaderSettings } from '../types/book';

interface BookPageProps {
  page: BookPageData;
  settings: ReaderSettings;
  isBookmarked: boolean;
  onToggleBookmark: (pageNum: number) => void;
  onSaveQuote?: (text: string) => void;
  side?: 'left' | 'right' | 'single';
}

export const BookPage: React.FC<BookPageProps> = ({
  page,
  settings,
  isBookmarked,
  onToggleBookmark,
  onSaveQuote,
  side = 'single',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  // Ultra-warm eye-care themes (0% harsh light, caldissimo)
  const themeClasses: Record<string, string> = {
    'warm-amber': 'paper-texture-warm-amber text-[#2D1C10]',
    candlelight: 'paper-texture-candlelight text-[#26160A]',
    sepia: 'paper-texture-sepia text-[#2A1A0E]',
    linen: 'paper-texture-linen text-[#24170D]',
    night: 'paper-texture-night text-[#E5CFB3]',
  };

  // Font family classes
  const fontClasses: Record<string, string> = {
    lora: 'font-reading-source',
    garamond: 'font-reading-garamond',
    sans: 'font-reading-sans',
  };

  // Font size classes calibrated for comfortable reading on phone & desktop
  const sizeClasses: Record<string, string> = {
    sm: 'text-[13.5px] sm:text-[14.5px]',
    base: 'text-[14.5px] sm:text-[16px]',
    lg: 'text-[16px] sm:text-[17.5px]',
    xl: 'text-[17.5px] sm:text-[19px]',
    '2xl': 'text-[19px] sm:text-[21px]',
  };

  // Line height classes
  const lineClasses: Record<string, string> = {
    tight: 'leading-[1.52]',
    normal: 'leading-[1.66]',
    relaxed: 'leading-[1.86]',
  };

  const isFirstPageInChapter = page.pageInChapter === 1;

  // Book spine shadow styling for two-page spread vs single page
  let spineShadowClass = '';
  if (side === 'left') {
    spineShadowClass = 'book-spine-left';
  } else if (side === 'right') {
    spineShadowClass = 'book-spine-right';
  }

  // Check if content overflows and needs scrolling, and update indicator
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    // If there is more than 35px left to scroll, show hint
    setCanScrollMore(scrollHeight - scrollTop - clientHeight > 35);
  };

  // Reset scroll to top and check overflow whenever page changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      const { scrollHeight, clientHeight } = scrollRef.current;
      setCanScrollMore(scrollHeight - clientHeight > 35);
    }
  }, [page.id, settings.fontSize, settings.lineSpacing]);

  return (
    <article
      className={`relative w-full h-full max-h-[100dvh] flex flex-col justify-between transition-colors duration-300 ${
        themeClasses[settings.theme] || themeClasses['warm-amber']
      } ${fontClasses[settings.fontFamily] || fontClasses.lora} ${spineShadowClass} overflow-hidden select-text`}
      style={{
        hyphens: 'none',
        WebkitHyphens: 'none',
        wordBreak: 'normal',
      }}
    >
      {/* Container inside the full-screen page with calibrated safe margins */}
      <div className="w-full max-w-2xl mx-auto h-full flex flex-col justify-between px-4 sm:px-9 md:px-12 pt-3 sm:pt-4 pb-2 sm:pb-3">
        {/* Ribbon Bookmark at top right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(page.id);
          }}
          aria-label={isBookmarked ? 'Rimuovi segnalibro' : 'Aggiungi segnalibro'}
          className="absolute top-0 right-4 sm:right-8 w-6 h-10 flex flex-col items-center justify-start transition-all duration-300 z-20 group focus:outline-none cursor-pointer"
          title={isBookmarked ? 'Pagina contrassegnata' : 'Metti il segnalibro a questa pagina'}
        >
          <div
            className={`w-5 h-8 shadow-md flex items-center justify-center transition-all ${
              isBookmarked
                ? 'bg-[#A3221B] text-[#FFF4DE] shadow-red-950/40 translate-y-0'
                : 'bg-amber-900/15 text-amber-900/40 group-hover:bg-[#A3221B]/50 group-hover:text-amber-100 -translate-y-1 group-hover:translate-y-0'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
            }}
          >
            <BookmarkIcon
              className={`w-3 h-3 -mt-1 ${
                isBookmarked ? 'fill-current' : ''
              }`}
            />
          </div>
        </button>

        {/* Top Header: Fixed height, never pushes content */}
        <header className="h-8 shrink-0 flex items-center justify-between border-b border-amber-900/15 dark:border-white/10 text-[10.5px] sm:text-xs tracking-wider uppercase font-sans opacity-70 select-none">
          <span className="truncate pr-4 font-medium">
            {page.chapterTitle} · {page.chapterSubtitle}
          </span>
          <span className="shrink-0 font-serif italic normal-case tracking-normal text-xs opacity-85">
            Pagina {page.id} di 50
          </span>
        </header>

        {/* Middle Reading Canvas: Smooth scrollable container with generous bottom margin to prevent words from being blocked */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="book-scroll-canvas book-scrollbar flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y pt-3 sm:pt-4 pb-20 sm:pb-24 select-text scroll-smooth"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Only show Chapter Title on the very first page of a chapter */}
          {isFirstPageInChapter && (
            <div className="text-center my-2 sm:my-3 shrink-0 select-none">
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase opacity-65 mb-0.5 font-medium">
                {page.chapterTitle}
              </p>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-balance leading-tight">
                {page.chapterSubtitle}
              </h2>
              <div className="w-8 h-[1px] bg-amber-900/25 dark:bg-white/20 mx-auto my-2.5" />
            </div>
          )}

          {/* Epigraph only if present on first page */}
          {page.epigraph && isFirstPageInChapter && (
            <blockquote className="my-2 sm:my-3 px-3 py-2 border-l-2 border-amber-800/40 dark:border-amber-400/40 italic text-xs sm:text-[13.5px] opacity-85 bg-amber-900/5 rounded-r-md shrink-0">
              <p className="leading-relaxed">«{page.epigraph.text}»</p>
              <footer className="text-right text-[10px] sm:text-xs mt-1 font-sans opacity-75 font-normal">
                — {page.epigraph.author}
              </footer>
            </blockquote>
          )}

          {/* Continuous Natural Paragraphs: Clean lines, full words, NO hyphenation */}
          <div
            className={`space-y-3 sm:space-y-4 ${sizeClasses[settings.fontSize]} ${lineClasses[settings.lineSpacing]} ${
              settings.textAlign === 'justify' ? 'text-justify' : 'text-left'
            }`}
            style={{
              hyphens: 'none',
              WebkitHyphens: 'none',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            {page.paragraphs.map((p, idx) => {
              const hasIndent = isFirstPageInChapter ? idx > 0 : true;

              return (
                <p
                  key={idx}
                  className={`relative group ${hasIndent ? 'indent-4 sm:indent-5' : ''}`}
                >
                  <span>{p}</span>

                  {/* Subtle quote save button */}
                  {onSaveQuote && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSaveQuote(p);
                      }}
                      className="opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity ml-1.5 inline-flex items-center text-xs text-amber-800 dark:text-amber-300 align-baseline cursor-pointer"
                      title="Salva questa frase nel tuo taccuino"
                    >
                      <Quote className="w-3 h-3 inline" />
                    </button>
                  )}
                </p>
              );
            })}
          </div>

          {/* Footnote if present */}
          {page.footnote && (
            <div className="mt-4 pt-2 border-t border-amber-900/15 dark:border-white/10 text-[10px] sm:text-xs italic opacity-75 font-sans shrink-0">
              {page.footnote}
            </div>
          )}

          {/* End-of-page Fleuron & Chapter Progress */}
          <div className="pt-8 pb-4 flex flex-col items-center justify-center opacity-45 select-none pointer-events-none shrink-0">
            <span className="text-sm font-serif tracking-widest text-amber-900/70 dark:text-amber-200/70">❦</span>
            <span className="text-[10px] font-sans tracking-widest uppercase mt-1 text-stone-500 dark:text-stone-400">
              Fine pagina {page.id} di 50
            </span>
          </div>

          {/* GENEROUS BOTTOM BREATHING ROOM: 220px margin so the last words can be scrolled all the way to center screen */}
          <div
            className="w-full h-48 sm:h-56 shrink-0 pointer-events-none select-none"
            aria-hidden="true"
          />
        </div>

        {/* Bottom Folio: Fixed height, always visible at the bottom of the screen */}
        <footer className="h-8 shrink-0 flex items-center justify-between text-xs font-serif opacity-75 border-t border-amber-900/10 dark:border-white/10 select-none">
          <div className="text-[9.5px] sm:text-[10.5px] font-sans tracking-widest uppercase opacity-60 flex items-center gap-2">
            <span>«Il Custode dei Giorni Perduti»</span>
            {canScrollMore && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[9px] text-amber-700 dark:text-amber-400 font-medium">
                ↓ scorri per leggere ancora
              </span>
            )}
          </div>

          {/* Clean Page Folio Number */}
          <div className="font-display text-sm sm:text-base font-semibold tracking-wider">
            {page.id}
          </div>

          <div className="text-[9.5px] sm:text-[10.5px] font-sans opacity-60 flex items-center gap-1">
            {canScrollMore && (
              <span className="sm:hidden text-[9px] text-amber-700 dark:text-amber-400 font-medium">
                ↓ scorri
              </span>
            )}
            <span>{page.pageInChapter} / 5</span>
          </div>
        </footer>
      </div>
    </article>
  );
};
