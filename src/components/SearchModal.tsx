import React, { useState, useMemo } from 'react';
import { X, Search as SearchIcon, ArrowUpRight, BookOpen } from 'lucide-react';
import { NOVEL_PAGES } from '../data/novelData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (page: number) => void;
  isNight: boolean;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
  isNight,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim() || query.trim().length < 2) return [];

    const lower = query.toLowerCase().trim();
    const results: { page: number; chapterTitle: string; snippet: string }[] = [];

    NOVEL_PAGES.forEach((page) => {
      for (const p of page.paragraphs) {
        const idx = p.toLowerCase().indexOf(lower);
        if (idx !== -1) {
          const start = Math.max(0, idx - 45);
          const end = Math.min(p.length, idx + query.length + 55);
          let snippet = p.slice(start, end);
          if (start > 0) snippet = '...' + snippet;
          if (end < p.length) snippet = snippet + '...';

          results.push({
            page: page.id,
            chapterTitle: `${page.chapterTitle} · ${page.chapterSubtitle}`,
            snippet,
          });
          break; // One match per page is clean
        }
      }
    });

    return results;
  }, [query]);

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
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-500/20 shrink-0">
          <div className="flex items-center gap-3">
            <SearchIcon className="w-5 h-5 text-amber-600" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca parole o frasi nelle 50 pagine..."
              className="flex-1 bg-transparent border-none text-sm font-sans focus:outline-none placeholder:text-stone-400"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-stone-400 hover:text-stone-200 px-2 py-1"
              >
                Cancella
              </button>
            )}
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-500/10 transition-colors"
            >
              <X className="w-5 h-5 opacity-70" />
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {!query.trim() ? (
            <div className="text-center py-12 px-4 opacity-70">
              <SearchIcon className="w-8 h-8 mx-auto mb-3 opacity-30 text-amber-600" />
              <p className="font-display text-base font-medium">Cerca tra le pagine del romanzo</p>
              <p className="text-xs font-sans mt-1 max-w-xs mx-auto">
                Digita ad esempio: <span className="italic">astrolabio, marea, Venezia, tempo, Nora, rubini</span>.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-12 px-4 opacity-70">
              <p className="font-display text-base font-medium">Nessun risultato trovato</p>
              <p className="text-xs font-sans mt-1">
                Nessuna pagina contiene "{query}". Prova con un termine diverso.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-sans uppercase tracking-wider opacity-60 mb-2">
                {searchResults.length} riscontri trovati
              </p>
              {searchResults.map((res, i) => (
                <div
                  key={i}
                  onClick={() => {
                    onSelectPage(res.page);
                    onClose();
                  }}
                  className="p-3.5 rounded-xl border border-stone-400/20 bg-stone-500/5 hover:border-amber-600/50 hover:bg-amber-500/5 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-amber-700 dark:text-amber-400">
                      Pagina {res.page}
                    </span>
                    <span className="font-sans text-[11px] opacity-60 truncate max-w-[200px]">
                      {res.chapterTitle}
                    </span>
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm opacity-90 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
