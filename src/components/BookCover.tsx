import React from 'react';
import { BookOpen, BookmarkCheck, Clock, AlignLeft, Sparkles, Volume2, Smartphone } from 'lucide-react';
import { BOOK_METADATA, CHAPTERS_INFO } from '../data/novelData';
import { ReaderSettings } from '../types/book';

interface BookCoverProps {
  onOpenBook: (startPage?: number) => void;
  savedPage: number;
  totalBookmarks: number;
  onOpenTOC: () => void;
  settings: ReaderSettings;
  onOpenSettings: () => void;
  onOpenAudio: () => void;
  onOpenFullscreenGuide?: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({
  onOpenBook,
  savedPage,
  totalBookmarks,
  onOpenTOC,
  settings,
  onOpenAudio,
  onOpenFullscreenGuide,
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-[#181614] text-[#EFEAE1]">
      {/* Subtle atmospheric vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-stone-900/40 to-black/80" 
      />

      {/* Top minimal header bar */}
      <header 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-4 flex items-center justify-between border-b border-amber-950/40"
        style={{
          paddingTop: 'calc(max(env(safe-area-inset-top, 0px), 20px) + 12px)',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="font-display tracking-widest text-xs uppercase text-amber-300/80">
            Biblioteca d'Autore · Edizione Integrale
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenFullscreenGuide && (
            <button
              onClick={onOpenFullscreenGuide}
              className="min-h-[44px] px-3 py-1.5 flex items-center gap-1.5 rounded-lg text-xs font-sans text-amber-200/90 hover:text-amber-100 bg-amber-950/40 border border-amber-700/40 hover:border-amber-600/70 transition-colors"
              title="Vedi solo la pagina senza barre del browser"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Senza barre browser</span>
            </button>
          )}

          <button
            onClick={onOpenAudio}
            className={`min-h-[44px] min-w-[44px] px-3 py-1.5 flex items-center gap-2 rounded-lg text-xs font-sans transition-colors ${
              settings.ambientSound !== 'none'
                ? 'bg-amber-900/50 text-amber-200 border border-amber-600/40'
                : 'text-stone-400 hover:text-stone-200'
            }`}
            title="Atmosfera sonora"
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden sm:inline">
              {settings.ambientSound === 'none' ? 'Atmosfera' : settings.ambientSound}
            </span>
          </button>
          
          <button
            onClick={onOpenTOC}
            className="min-h-[44px] min-w-[44px] px-3 py-1.5 flex items-center gap-2 rounded-lg text-xs font-sans text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors"
          >
            <AlignLeft className="w-4 h-4" />
            <span>Indice</span>
          </button>
        </div>
      </header>

      {/* Central hero book showcase */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 md:py-12 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
        {/* Realistic 3D Book Jacket Presentation */}
        <div className="relative group perspective-1000 shrink-0">
          <div 
            onClick={() => onOpenBook(savedPage > 1 ? savedPage : 1)}
            className="cursor-pointer relative w-[260px] sm:w-[300px] md:w-[330px] aspect-[3/4] rounded-r-xl rounded-l-sm shadow-2xl transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-end overflow-hidden border border-amber-500/20"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), -8px 0 20px rgba(0,0,0,0.5)'
            }}
          >
            {/* Book spine simulated crease */}
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-20 pointer-events-none" />
            
            {/* Cover art image */}
            <img
              src={BOOK_METADATA.coverImage}
              alt={BOOK_METADATA.title}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('book_cover.jpg')) {
                  target.src = '/book_cover.jpg';
                } else if (!target.src.includes('/images/book_cover.jpg')) {
                  target.src = '/images/book_cover.jpg';
                }
              }}
              className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.92] contrast-[1.05]"
            />

            {/* Gradient scrim for readable typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10" />

            {/* Cover typographic overlay */}
            <div className="relative z-20 p-6 flex flex-col justify-between h-full">
              <div className="pt-2">
                <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-amber-300/90 font-medium">
                  {BOOK_METADATA.author}
                </p>
              </div>

              <div>
                <div className="w-8 h-[1px] bg-amber-400/60 mb-3" />
                <h1 className="font-display text-2xl sm:text-3xl font-normal tracking-wide text-white leading-tight">
                  {BOOK_METADATA.title}
                </h1>
                <p className="font-display italic text-amber-200/80 text-sm mt-1">
                  {BOOK_METADATA.subtitle}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-stone-300 font-sans border-t border-white/10 pt-3">
                  <span>50 Pagine</span>
                  <span>10 Capitoli</span>
                  <span>Venezia, 1582</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-3 text-xs text-stone-400 font-sans">
            Tocca la copertina per aprire il libro
          </div>
        </div>

        {/* Narrative presentation & CTA */}
        <div className="max-w-xl flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 text-xs font-sans text-amber-300/90 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Romanzo completo · Calibrato per lettura su smartphone</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.15] text-balance">
            {BOOK_METADATA.title}
          </h2>

          <p className="font-display italic text-lg sm:text-xl text-amber-200/85 mt-2">
            «{BOOK_METADATA.epigraph.quote.slice(0, 85)}...»
          </p>

          <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed mt-4 font-light">
            {BOOK_METADATA.blurb}
          </p>

          {/* Book stats strip */}
          <div className="w-full grid grid-cols-3 gap-3 my-6 py-4 px-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
            <div>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider font-sans">Pagine</p>
              <p className="text-lg font-display text-amber-100 font-medium">50</p>
            </div>
            <div>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider font-sans">Tempo di lettura</p>
              <div className="flex items-center gap-1.5 text-stone-200">
                <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                <p className="text-sm font-sans">~45 min</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider font-sans">Segnalibri</p>
              <div className="flex items-center gap-1.5 text-stone-200">
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-400/80" />
                <p className="text-sm font-sans">{totalBookmarks}</p>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            <button
              onClick={() => onOpenBook(savedPage > 1 ? savedPage : 1)}
              className="min-h-[50px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-sans font-semibold text-sm flex items-center justify-center gap-3 shadow-lg shadow-amber-900/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-stone-950" />
              <span>
                {savedPage > 1 ? `Riprendi da Pagina ${savedPage}` : 'Inizia a Leggere il Libro'}
              </span>
            </button>

            {savedPage > 1 && (
              <button
                onClick={() => onOpenBook(1)}
                className="min-h-[50px] px-5 py-3 rounded-2xl border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-sans text-xs flex items-center justify-center transition-colors cursor-pointer"
              >
                Ricomincia da Pagina 1
              </button>
            )}

            {onOpenFullscreenGuide && (
              <button
                onClick={onOpenFullscreenGuide}
                className="min-h-[50px] px-5 py-3 rounded-2xl border border-amber-600/40 hover:border-amber-500/80 bg-amber-950/30 text-amber-200 font-sans text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                title="Come rimuovere le barre del browser per vedere solo il libro"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Vedi solo la pagina</span>
              </button>
            )}
          </div>

          {/* Quick summary of Chapters */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 w-full">
            <p className="text-xs uppercase tracking-wider text-stone-400 font-sans mb-3">
              I Dieci Capitoli dell'Opera
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              {CHAPTERS_INFO.slice(0, 5).map(c => (
                <button
                  key={c.index}
                  onClick={() => onOpenBook(c.startPage)}
                  className="text-left p-2 rounded-lg bg-stone-900/40 hover:bg-stone-800/80 text-stone-300 hover:text-amber-200 transition-colors border border-stone-800/40"
                >
                  <span className="block text-[10px] text-amber-400/80">{c.title}</span>
                  <span className="font-display text-xs truncate block">{c.subtitle}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer colophon minimal */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-4 text-center border-t border-stone-900 text-xs text-stone-400 font-sans">
        <span>«{BOOK_METADATA.title}» di {BOOK_METADATA.author}</span>
        <span className="mx-2">·</span>
        <span>Venezia, Murano</span>
        <span className="mx-2">·</span>
        <span>Esperienza di lettura digitale senza distrazioni</span>
      </footer>
    </div>
  );
};
