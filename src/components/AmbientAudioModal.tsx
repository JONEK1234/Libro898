import React from 'react';
import { X, Volume2, CloudRain, Flame, BookOpen, VolumeX } from 'lucide-react';

interface AmbientAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSound: 'none' | 'rain' | 'fire' | 'library';
  volume: number;
  onSelectSound: (sound: 'none' | 'rain' | 'fire' | 'library') => void;
  onChangeVolume: (vol: number) => void;
  isNight: boolean;
}

export const AmbientAudioModal: React.FC<AmbientAudioModalProps> = ({
  isOpen,
  onClose,
  currentSound,
  volume,
  onSelectSound,
  onChangeVolume,
  isNight,
}) => {
  if (!isOpen) return null;

  const soundOptions: {
    id: 'none' | 'rain' | 'fire' | 'library';
    label: string;
    desc: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'none',
      label: 'Muto / Silenzio',
      desc: 'Nessun suono di sottofondo attivo',
      icon: <VolumeX className="w-5 h-5 text-stone-400" />,
    },
    {
      id: 'rain',
      label: 'Pioggia sulla Laguna',
      desc: 'Gocce d’acqua e pioggia battente sui vetri',
      icon: <CloudRain className="w-5 h-5 text-sky-500" />,
    },
    {
      id: 'fire',
      label: 'Camino a Legna',
      desc: 'Sussurro caldo di brace e crepitio di ceppi',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'library',
      label: 'Silenzio di Biblioteca',
      desc: 'Risonanza acustica e quiete di scaffali antichi',
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-md rounded-none sm:rounded-2xl shadow-2xl border overflow-hidden p-6 transition-all ${
          isNight
            ? 'bg-[#181A20] border-stone-800 text-stone-100'
            : 'bg-[#FAF8F5] border-stone-300 text-stone-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-500/20 mb-5">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h3 className="font-display text-lg font-semibold tracking-wide">
              Atmosfere di Lettura
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 opacity-70" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-sans opacity-70">
            Suoni generati sinteticamente in tempo reale nel browser per favorire la concentrazione e l’immersione nel racconto.
          </p>

          {/* Sound options */}
          <div className="space-y-2">
            {soundOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => onSelectSound(opt.id)}
                className={`min-h-[52px] w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                  currentSound === opt.id
                    ? 'border-amber-600 bg-amber-500/10 font-semibold'
                    : 'border-stone-400/20 hover:border-stone-400/40 bg-stone-500/5'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-500/10 shrink-0">
                  {opt.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-sans font-medium">{opt.label}</p>
                  <p className="text-[11px] font-sans opacity-60 font-light">{opt.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Volume slider */}
          {currentSound !== 'none' && (
            <div className="pt-4 border-t border-stone-500/20">
              <div className="flex items-center justify-between text-xs font-sans mb-2">
                <span className="opacity-70">Volume d'ambiente</span>
                <span className="font-semibold tabular-nums">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="1.0"
                step="0.05"
                value={volume}
                onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-stone-400/30 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="min-h-[48px] w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-medium text-xs tracking-wider uppercase transition-colors"
            >
              Fatto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
