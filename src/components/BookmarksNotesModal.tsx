import React, { useState } from 'react';
import { X, Bookmark as BookmarkIcon, Quote, Trash2, ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import { Bookmark, NoteHighlight } from '../types/book';

interface BookmarksNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: Bookmark[];
  highlights: NoteHighlight[];
  onSelectPage: (page: number) => void;
  onRemoveBookmark: (page: number) => void;
  onRemoveHighlight: (id: string) => void;
  onAddNoteToHighlight: (id: string, note: string) => void;
  isNight: boolean;
}

export const BookmarksNotesModal: React.FC<BookmarksNotesModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  highlights,
  onSelectPage,
  onRemoveBookmark,
  onRemoveHighlight,
  onAddNoteToHighlight,
  isNight,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'highlights'>('bookmarks');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-xl h-full sm:h-auto sm:max-h-[85vh] rounded-none sm:rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all ${
          isNight
            ? 'bg-[#181A20] border-stone-800 text-stone-100'
            : 'bg-[#FAF8F5] border-stone-300 text-stone-900'
        }`}
      >
        {/* Header with segmented tab controls */}
        <div className="p-5 border-b border-stone-500/20 shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl font-semibold tracking-wide">
              I Tuoi Segnalibri & Citazioni
            </h3>
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-500/10 transition-colors"
            >
              <X className="w-5 h-5 opacity-70" />
            </button>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 p-1 bg-stone-500/10 rounded-xl">
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`min-h-[44px] flex-1 py-2 px-3 rounded-lg text-xs font-medium font-sans flex items-center justify-center gap-2 transition-all ${
                activeTab === 'bookmarks'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'hover:bg-stone-500/10 opacity-75'
              }`}
            >
              <BookmarkIcon className="w-3.5 h-3.5" />
              <span>Segnalibri ({bookmarks.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`min-h-[44px] flex-1 py-2 px-3 rounded-lg text-xs font-medium font-sans flex items-center justify-center gap-2 transition-all ${
                activeTab === 'highlights'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'hover:bg-stone-500/10 opacity-75'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Citazioni & Note ({highlights.length})</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {activeTab === 'bookmarks' ? (
            <div className="space-y-3">
              {bookmarks.length === 0 ? (
                <div className="text-center py-12 px-4 opacity-70">
                  <BookmarkIcon className="w-8 h-8 mx-auto mb-3 opacity-40 text-amber-600" />
                  <p className="font-display text-base font-medium">Nessun segnalibro salvato</p>
                  <p className="text-xs font-sans mt-1 max-w-xs mx-auto">
                    Tocca il nastro rosso in alto a destra su qualsiasi pagina per salvare il punto di lettura.
                  </p>
                </div>
              ) : (
                bookmarks.map((bm) => (
                  <div
                    key={bm.page}
                    className="p-4 rounded-xl border border-stone-400/20 bg-stone-500/5 hover:border-amber-600/40 transition-colors flex items-start justify-between gap-3 group"
                  >
                    <div
                      onClick={() => {
                        onSelectPage(bm.page);
                        onClose();
                      }}
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1 text-xs">
                        <span className="font-semibold text-amber-700 dark:text-amber-400">
                          Pagina {bm.page}
                        </span>
                        <span className="opacity-40">·</span>
                        <span className="font-sans opacity-70">{bm.chapterTitle}</span>
                      </div>
                      <p className="font-serif italic text-xs sm:text-sm line-clamp-2 opacity-85 leading-relaxed">
                        «{bm.excerpt}»
                      </p>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          onSelectPage(bm.page);
                          onClose();
                        }}
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-500/10 text-amber-600"
                        title="Vai a questa pagina"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRemoveBookmark(bm.page)}
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-red-500/10 text-stone-400 hover:text-red-600 transition-colors"
                        title="Rimuovi segnalibro"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {highlights.length === 0 ? (
                <div className="text-center py-12 px-4 opacity-70">
                  <Quote className="w-8 h-8 mx-auto mb-3 opacity-40 text-amber-600" />
                  <p className="font-display text-base font-medium">Nessuna citazione salvata</p>
                  <p className="text-xs font-sans mt-1 max-w-xs mx-auto">
                    Passa con il mouse o tocca il pulsante citazione accanto a un paragrafo durante la lettura per salvarlo nel tuo taccuino.
                  </p>
                </div>
              ) : (
                highlights.map((hl) => (
                  <div
                    key={hl.id}
                    className="p-4 rounded-xl border border-stone-400/20 bg-stone-500/5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-amber-700 dark:text-amber-400">
                        Da Pagina {hl.page}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            onSelectPage(hl.page);
                            onClose();
                          }}
                          className="min-h-[44px] px-2 text-xs flex items-center gap-1 text-amber-600 hover:underline"
                        >
                          <span>Leggi nel testo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onRemoveHighlight(hl.id)}
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-red-500/10 text-stone-400 hover:text-red-600"
                          title="Elimina"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <blockquote className="border-l-2 border-amber-600/60 pl-3 italic font-serif text-xs sm:text-sm leading-relaxed opacity-90">
                      «{hl.text}»
                    </blockquote>

                    {/* Personal note annotation */}
                    {editingNoteId === hl.id ? (
                      <div className="pt-2">
                        <textarea
                          value={tempNoteText}
                          onChange={(e) => setTempNoteText(e.target.value)}
                          placeholder="Aggiungi una riflessione personale..."
                          rows={2}
                          className="w-full text-xs p-2 rounded-lg border border-amber-600/40 bg-stone-500/10 focus:outline-none"
                        />
                        <div className="flex justify-end gap-2 mt-2">
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="min-h-[44px] px-3 py-1 text-xs text-stone-400 hover:text-stone-200"
                          >
                            Annulla
                          </button>
                          <button
                            onClick={() => {
                              onAddNoteToHighlight(hl.id, tempNoteText);
                              setEditingNoteId(null);
                            }}
                            className="min-h-[44px] px-3 py-1 text-xs bg-amber-700 text-white rounded-lg font-medium"
                          >
                            Salva Nota
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-1 flex items-center justify-between text-xs">
                        {hl.userNote ? (
                          <p className="font-sans text-xs italic opacity-75 bg-stone-500/10 p-2 rounded-lg flex-1 mr-2">
                            Nota: {hl.userNote}
                          </p>
                        ) : (
                          <span className="text-[11px] opacity-40">Nessuna annotazione</span>
                        )}
                        <button
                          onClick={() => {
                            setEditingNoteId(hl.id);
                            setTempNoteText(hl.userNote || '');
                          }}
                          className="min-h-[44px] px-2 text-[11px] text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>{hl.userNote ? 'Modifica nota' : 'Aggiungi nota'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
