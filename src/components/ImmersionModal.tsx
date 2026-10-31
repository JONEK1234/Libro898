import React from 'react';
import { X, Maximize2, Minimize2, Download, Smartphone, Share, PlusSquare, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ImmersionModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isNight?: boolean;
}

export const ImmersionModal: React.FC<ImmersionModalProps> = ({
  isOpen,
  onClose,
  isFullscreen,
  onToggleFullscreen,
  isNight = false,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className={`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border transition-all ${
          isNight 
            ? 'bg-[#1C1814] text-[#EFE7DE] border-amber-900/40' 
            : 'bg-[#FCF5E6] text-[#2D1C10] border-amber-800/20'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Chiudi guida"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-amber-600/15 text-amber-600 dark:text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Lettura Pura Senza Barre</h3>
            <p className="text-xs opacity-70 font-sans">Come nascondere gli elementi del browser</p>
          </div>
        </div>

        {/* Content options */}
        <div className="space-y-4 text-xs font-sans">
          {/* Method 1: Fullscreen API (Android / PC / Mac) */}
          <div className="p-4 rounded-xl border border-amber-900/10 dark:border-white/10 bg-amber-900/5 dark:bg-white/5 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium text-sm">
                <Maximize2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Modalità Schermo Intero</span>
              </div>
              <button
                onClick={() => {
                  onToggleFullscreen();
                  onClose();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs active:scale-95 transition-all cursor-pointer"
              >
                {isFullscreen ? 'Disattiva' : 'Attiva Ora'}
              </button>
            </div>
            <p className="opacity-75 leading-relaxed">
              Nasconde istantaneamente la barra degli indirizzi e le schede del browser sui dispositivi supportati.
            </p>
          </div>

          {/* Method 2: PWA Install (Android / Chrome / Desktop) */}
          {isInstallable && !isInstalled && (
            <div className="p-4 rounded-xl border border-amber-900/10 dark:border-white/10 bg-amber-900/5 dark:bg-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium text-sm">
                  <Download className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Installa come App</span>
                </div>
                <button
                  onClick={async () => {
                    await install();
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-semibold text-xs active:scale-95 transition-all cursor-pointer"
                >
                  Installa
                </button>
              </div>
              <p className="opacity-75 leading-relaxed">
                Aggiunge l'icona del libro al tuo dispositivo. Aprendolo da lì, tutte le barre del browser scompaiono al 100%.
              </p>
            </div>
          )}

          {/* Method 3: iOS Safari (iPhone / iPad) Guide */}
          <div className="p-4 rounded-xl border border-amber-900/15 dark:border-white/10 bg-amber-500/10 space-y-2.5">
            <div className="flex items-center gap-2 font-medium text-sm text-amber-900 dark:text-amber-200">
              <Smartphone className="w-4 h-4" />
              <span>Su iPhone & iPad (Safari)</span>
            </div>
            <p className="opacity-85 leading-relaxed">
              Per rimuovere definitivamente le barre superiore e inferiore di Safari:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 opacity-90 pl-1 leading-relaxed">
              <li>
                Tocca il tasto <strong className="inline-flex items-center gap-1">Condividi <Share className="w-3.5 h-3.5 inline" /></strong> nella barra di Safari in basso.
              </li>
              <li>
                Scorri l'elenco e tocca <strong className="inline-flex items-center gap-1">«Aggiungi alla schermata Home» <PlusSquare className="w-3.5 h-3.5 inline" /></strong>.
              </li>
              <li>
                Tocca <strong>Aggiungi</strong> in alto a destra.
              </li>
            </ol>
            <p className="pt-1 text-[11px] opacity-75 italic">
              ✨ Aprendo il libro dalla schermata Home, si aprirà a schermo intero come una vera app nativa, senza alcuna barra del browser!
            </p>
          </div>

          {/* Pure Reading Mode tip */}
          <div className="text-center pt-2 opacity-70 text-[11px]">
            💡 <em>Suggerimento:</em> Durante la lettura, tocca al centro della pagina per nascondere tutti i controlli e leggere solo il testo.
          </div>
        </div>

        {/* Footer Button */}
        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-xl border border-stone-400/30 hover:bg-stone-500/10 font-medium text-xs transition-colors"
        >
          Ho capito, torna al libro
        </button>
      </div>
    </div>
  );
};
