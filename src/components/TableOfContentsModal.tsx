import React from 'react';
import { X, BookOpen, Bookmark as BookmarkIcon, ChevronRight } from 'lucide-react';
import { CHAPTERS_INFO, BOOK_METADATA } from '../data/novelData';
import { Bookmark } from '../types/book';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  onSelectPage: (page: number) => void;
  bookmarks: Bookmark[];
  isNight: boolean;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage,
  bookmarks,
  isNight,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/65">
      <div
        className={`w-full max-w-xl h-full sm:h-auto sm:max-h-[85vh] rounded-none sm:rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all ${
          isNight
            ? 'bg-[#181A20] border-stone-800 text-stone-100'
            : 'bg-[#FAF8F5] border-stone-300 text-stone-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-500/20 shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-sans font-medium block">
              Indice dell'Opera
            </span>
            <h3 className="font-display text-xl font-semibold tracking-wide">
              {BOOK_METADATA.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 opacity-70" />
          </button>
        </div>

        {/* Scrollable Chapter List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5">
          {/* Quick jump to Cover */}
          <button
            onClick={() => {
              onSelectPage(0);
              onClose();
            }}
            className="min-h-[44px] w-full p-3 rounded-xl border border-stone-400/20 hover:border-amber-600/60 hover:bg-amber-500/5 text-left flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <div>
                <p className="font-display text-sm font-medium">Copertina & Frontespizio</p>
                <p className="text-[11px] font-sans opacity-60">Dedica, citazioni e introduzione</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 opacity-40" />
          </button>

          {/* Chapters 1 to 10 */}
          {CHAPTERS_INFO.map((chapter) => {
            const isCurrentChapter =
              currentPage >= chapter.startPage && currentPage <= chapter.endPage;
            const hasBookmarks = bookmarks.some(
              (b) => b.page >= chapter.startPage && b.page <= chapter.endPage
            );

            return (
              <div
                key={chapter.index}
                className={`p-3.5 rounded-xl border transition-all ${
                  isCurrentChapter
                    ? 'border-amber-600 bg-amber-500/10 shadow-xs'
                    : 'border-stone-400/20 hover:border-stone-400/40 bg-stone-500/5'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-sans font-semibold text-amber-700 dark:text-amber-400">
                        {chapter.title}
                      </span>
                      <span className="text-stone-400 text-xs">·</span>
                      <span className="text-[11px] font-sans opacity-60">
                        Pagine {chapter.startPage} – {chapter.endPage}
                      </span>
                      {hasBookmarks && (
                        <BookmarkIcon className="w-3 h-3 text-red-600 dark:text-red-400 fill-current ml-1" />
                      )}
                    </div>

                    <h4 className="font-display text-base font-semibold tracking-wide">
                      {chapter.subtitle}
                    </h4>

                    <p className="text-xs font-sans opacity-75 mt-1 line-clamp-2 leading-relaxed font-light">
                      {chapter.synopsis}
                    </p>
                  </div>
                </div>

                {/* Sub-pages pills for direct page jump */}
                <div className="mt-3 pt-2.5 border-t border-stone-400/15 flex items-center justify-between">
                  <span className="text-[10px] font-sans uppercase tracking-wider opacity-60">
                    Sfoglia pagina:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => chapter.startPage + i).map((p) => {
                      const isThisPage = currentPage === p;
                      const isPageBookmarked = bookmarks.some((b) => b.page === p);
                      return (
                        <button
                          key={p}
                          onClick={() => {
                            onSelectPage(p);
                            onClose();
                          }}
                          className={`min-h-[44px] min-w-[44px] text-xs font-serif rounded-lg border transition-all flex items-center justify-center relative ${
                            isThisPage
                              ? 'bg-amber-700 text-white border-amber-700 font-bold shadow-xs'
                              : 'border-stone-400/25 hover:bg-stone-500/10 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          <span>{p}</span>
                          {isPageBookmarked && (
                            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-600 rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-stone-500/20 text-center text-xs font-sans opacity-70 shrink-0">
          50 Pagine numerate · {bookmarks.length} pagine contrassegnate da te
        </div>
      </div>
    </div>
  );
};
