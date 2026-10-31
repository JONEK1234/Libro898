import React from 'react';
import { X, Maximize, Smartphone, Share, PlusSquare, CheckCircle, Sparkles, Monitor } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface FullscreenGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isNight?: boolean;
}

export const FullscreenGuideModal: React.FC<FullscreenGuideModalProps> = ({
  isOpen,
  onClose,
  isFullscreen,
  onToggleFullscreen,
  isNight = false,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleFullscreenClick = () => {
    onToggleFullscreen();
    // After requesting fullscreen, give user a second before closing if fullscreen activated
    setTimeout(() => {
      if (document.fullscreenElement) {
        onClose();
      }
    }, 400);
  };

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Modalità senza browser"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
          isNight
            ? 'bg-[#1A1816] border-stone-800 text-[#EFEAE1]'
            : 'bg-[#FDF7EB] border-amber-900/20 text-[#2D1C10]'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-900/15 dark:border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-600/15 dark:bg-amber-400/15 flex items-center justify-center text-amber-700 dark:text-amber-300">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold leading-tight">
                Vedi solo la pagina
              </h2>
              <p className="text-xs font-sans opacity-75">
                Rimuovi le barre e i comandi del browser per un'esperienza da vero libro
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5 opacity-70" />
          </button>
        </div>

        {/* Action 1: Instant Fullscreen Button (Works on Desktop & Android Chrome) */}
        <div className="space-y-4">
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
            isNight ? 'bg-stone-900/80 border-stone-800' : 'bg-amber-100/60 border-amber-900/15'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-600 text-white shadow-md shrink-0">
                <Maximize className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-sm">
                  {isFullscreen ? 'Schermo Intero attivo' : 'Schermo Intero Immediato'}
                </p>
                <p className="text-xs opacity-75 font-sans">
                  {isFullscreen
                    ? 'Le barre del browser sono nascoste. Tocca per uscire.'
                    : 'Nasconde istantaneamente la barra degli indirizzi e le schede'}
                </p>
              </div>
            </div>

            <button
              onClick={handleFullscreenClick}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-stone-950 font-sans font-semibold text-xs transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Maximize className="w-4 h-4 text-stone-950" />
              <span>{isFullscreen ? 'Riduci' : 'Attiva Ora'}</span>
            </button>
          </div>

          {/* Action 2: Direct PWA Install prompt if supported */}
          {isInstallable && !isInstalled && (
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
              isNight ? 'bg-stone-900/80 border-stone-800' : 'bg-amber-100/60 border-amber-900/15'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-700 text-amber-100 shadow-md shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm">Installa come App nativa</p>
                  <p className="text-xs opacity-75 font-sans">
                    Aggiunge l'icona sul tuo telefono: si apre al 100% senza alcuna barra del browser
                  </p>
                </div>
              </div>

              <button
                onClick={handleInstallClick}
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-amber-50 font-sans font-semibold text-xs transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Installa App</span>
              </button>
            </div>
          )}

          {/* Guide for iOS iPhone / iPad Safari (where Safari restricts direct fullscreen script, but Add to Home Screen provides 100% browser-free experience) */}
          <div className={`p-4 rounded-2xl border space-y-3 ${
            isNight ? 'bg-stone-900/50 border-stone-800/80' : 'bg-white/60 border-amber-900/10'
          }`}>
            <div className="flex items-center gap-2 font-sans font-medium text-xs tracking-wider uppercase opacity-85 text-amber-800 dark:text-amber-300">
              <Share className="w-4 h-4" />
              <span>Come togliere le barre su iPhone / Safari</span>
            </div>

            <ol className="space-y-2.5 text-xs font-sans leading-relaxed opacity-90 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-600/20 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  1
                </span>
                <span>
                  Tocca il pulsante <strong>Condividi</strong> in Safari (l'icona con il quadrato e la freccia verso l'alto <Share className="w-3.5 h-3.5 inline mx-0.5" /> in basso o in alto).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-600/20 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  2
                </span>
                <span>
                  Scorri l'elenco e tocca <strong>«Aggiungi alla schermata Home»</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5" />.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-600/20 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  3
                </span>
                <span>
                  Tocca <strong>«Aggiungi»</strong> in alto a destra. Apri il libro dalla schermata principale: <strong>si aprirà a tutto schermo senza indirizzi web, barre né schede!</strong>
                </span>
              </li>
            </ol>
          </div>

          {/* Guide for Android Chrome */}
          <div className={`p-3.5 rounded-xl border text-xs font-sans opacity-80 ${
            isNight ? 'bg-stone-950/40 border-stone-800/50' : 'bg-amber-900/5 border-amber-900/10'
          }`}>
            <p className="font-semibold mb-1 text-amber-900 dark:text-amber-200">
              Su Android / Chrome:
            </p>
            <p>
              Tocca i 3 puntini ⋮ in alto a destra e seleziona <strong>«Installa app»</strong> o <strong>«Aggiungi a schermata Home»</strong>.
            </p>
          </div>
        </div>

        {/* Footer close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="min-h-[44px] px-6 py-2.5 rounded-xl font-sans text-xs font-medium bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
};
