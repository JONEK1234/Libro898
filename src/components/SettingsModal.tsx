import React from 'react';
import { X, Type, Sun, Moon, Sparkles, Volume2, AlignJustify, AlignLeft, Columns, Book, Flame } from 'lucide-react';
import { ReaderSettings, ThemeMode, FontFamilyOption, FontSizeOption, LineSpacingOption } from '../types/book';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: Partial<ReaderSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  const themes: { id: ThemeMode; label: string; badge: string; bg: string; text: string; icon: React.ReactNode }[] = [
    { 
      id: 'warm-amber', 
      label: 'Ambra Calda', 
      badge: 'Stile iPhone', 
      bg: 'bg-[#FAF1DC]', 
      text: 'text-[#302319]', 
      icon: <Sun className="w-3.5 h-3.5 text-amber-600" /> 
    },
    { 
      id: 'candlelight', 
      label: 'Candela', 
      badge: 'Molto Caldo', 
      bg: 'bg-[#F3E2C2]', 
      text: 'text-[#2B1D12]', 
      icon: <Flame className="w-3.5 h-3.5 text-amber-700" /> 
    },
    { 
      id: 'sepia', 
      label: 'Pergamena', 
      badge: 'Storica', 
      bg: 'bg-[#F7EFE1]', 
      text: 'text-[#2D231C]', 
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-800" /> 
    },
    { 
      id: 'linen', 
      label: 'Lino Chiaro', 
      badge: 'Delicato', 
      bg: 'bg-[#FDF9F2]', 
      text: 'text-[#221D19]', 
      icon: <Sun className="w-3.5 h-3.5 text-stone-500" /> 
    },
    { 
      id: 'night', 
      label: 'Notte Calda', 
      badge: 'Lume di Candela', 
      bg: 'bg-[#151311]', 
      text: 'text-[#E2D1BC]', 
      icon: <Moon className="w-3.5 h-3.5 text-amber-400" /> 
    },
    { 
      id: 'oled', 
      label: 'Nero Puro OLED', 
      badge: 'Buio / Risparmio', 
      bg: 'bg-black', 
      text: 'text-[#D6C2A8]', 
      icon: <Moon className="w-3.5 h-3.5 text-stone-300" /> 
    },
  ];

  const fonts: { id: FontFamilyOption; label: string; sample: string }[] = [
    { id: 'lora', label: 'Lora (Romanzo Classico)', sample: 'font-reading-serif' },
    { id: 'garamond', label: 'Garamond (Rinascimentale Elegante)', sample: 'font-reading-garamond' },
    { id: 'sans', label: 'Moderna (Senza Grazie iPhone)', sample: 'font-reading-sans' },
  ];

  const sizes: { id: FontSizeOption; label: string }[] = [
    { id: 'sm', label: 'A-' },
    { id: 'base', label: 'A' },
    { id: 'lg', label: 'A+' },
    { id: 'xl', label: 'A++' },
    { id: '2xl', label: 'Max' },
  ];

  const spacings: { id: LineSpacingOption; label: string }[] = [
    { id: 'tight', label: 'Compatto' },
    { id: 'normal', label: 'Naturale' },
    { id: 'relaxed', label: 'Ampio' },
  ];

  const isDark = settings.theme === 'night' || settings.theme === 'oled';
  const isNight = isDark;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border overflow-hidden p-6 transition-all max-h-[88vh] overflow-y-auto ${
          isNight
            ? 'bg-[#181614] border-stone-800 text-stone-100'
            : 'bg-[#FAF2DF] border-amber-900/15 text-[#302319]'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-900/15 dark:border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <div>
              <h3 className="font-display text-xl font-semibold tracking-wide">
                Aspetto e Comfort Visivo
              </h3>
              <p className="text-[11px] font-sans opacity-60">
                Tonalità calde per la lettura notturna senza affaticare gli occhi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 opacity-70" />
          </button>
        </div>

        <div className="space-y-6 text-sm font-sans">
          {/* Fast Dark Mode / Light Mode Switch */}
          <div className="p-3.5 rounded-2xl bg-amber-900/5 dark:bg-white/5 border border-amber-900/15 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Modalità di Lettura
              </span>
              <span className="text-[11px] opacity-60">
                {isDark ? 'Tema Scuro Attivo' : 'Tema Chiaro Attivo'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onUpdateSettings({ theme: 'warm-amber', autoDarkMode: false })}
                className={`min-h-[46px] p-2.5 rounded-xl border flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  !isDark
                    ? 'bg-amber-100 text-stone-900 border-amber-600 font-semibold shadow-xs'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-600" />
                <span className="text-xs">Chiaro (Giorno)</span>
              </button>

              <button
                onClick={() => onUpdateSettings({ theme: 'night', autoDarkMode: false })}
                className={`min-h-[46px] p-2.5 rounded-xl border flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  isDark
                    ? 'bg-stone-900 text-amber-200 border-amber-500 font-semibold shadow-xs'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Moon className="w-4 h-4 text-amber-300" />
                <span className="text-xs">Scuro (Notte)</span>
              </button>
            </div>

            {/* Auto System Sync */}
            <div className="pt-2 border-t border-amber-900/10 dark:border-white/10 flex items-center justify-between">
              <div className="pr-2">
                <p className="text-xs font-medium">Segui il tema del telefono</p>
                <p className="text-[10px] opacity-65">Passa a scuro se lo smartphone è in modalità notte</p>
              </div>
              <button
                onClick={() => {
                  const newAuto = !settings.autoDarkMode;
                  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  onUpdateSettings({ 
                    autoDarkMode: newAuto,
                    ...(newAuto ? { theme: systemDark ? 'night' : 'warm-amber' } : {})
                  });
                }}
                className={`min-h-[36px] min-w-[50px] px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  settings.autoDarkMode
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-400/20 text-stone-500'
                }`}
              >
                {settings.autoDarkMode ? 'Attivo' : 'No'}
              </button>
            </div>
          </div>

          {/* Theme Palette */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider font-semibold opacity-75">
                Tonalità Carta e Notte
              </label>
              <span className="text-[11px] text-amber-800 dark:text-amber-300 font-medium">
                0% Luce blu nociva
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onUpdateSettings({ theme: t.id })}
                  className={`min-h-[52px] p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${t.bg} ${t.text} ${
                    settings.theme === t.id
                      ? 'ring-2 ring-amber-700 border-amber-700 font-bold shadow-md'
                      : 'border-amber-900/20 dark:border-white/15 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {t.icon}
                    <span className="text-xs">{t.label}</span>
                  </div>
                  <span className="text-[10px] opacity-65">{t.badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold opacity-75 mb-2">
              Carattere Tipografico
            </label>
            <div className="grid grid-cols-1 gap-2">
              {fonts.map((f) => (
                <button
                  key={f.id}
                  onClick={() => onUpdateSettings({ fontFamily: f.id })}
                  className={`min-h-[46px] px-4 py-2.5 rounded-xl border text-left flex items-center justify-between transition-all active:scale-[0.99] ${f.sample} ${
                    settings.fontFamily === f.id
                      ? 'border-amber-700 bg-amber-600/15 font-semibold shadow-xs'
                      : 'border-amber-900/15 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm">{f.label}</span>
                  <span className="text-xs opacity-60">Abc 1582</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold opacity-75 mb-2">
              Grandezza Carattere
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onUpdateSettings({ fontSize: s.id })}
                  className={`min-h-[44px] py-2 rounded-xl border text-center transition-all active:scale-95 ${
                    settings.fontSize === s.id
                      ? 'bg-amber-700 text-white font-bold border-amber-700 shadow-sm'
                      : 'border-amber-900/15 dark:border-white/10 hover:bg-black/5'
                  }`}
                >
                  <span className="text-xs">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Line Spacing */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold opacity-75 mb-2">
              Spaziatura Righe
            </label>
            <div className="grid grid-cols-3 gap-2">
              {spacings.map((sp) => (
                <button
                  key={sp.id}
                  onClick={() => onUpdateSettings({ lineSpacing: sp.id })}
                  className={`min-h-[44px] py-2 rounded-xl border text-center transition-all active:scale-95 ${
                    settings.lineSpacing === sp.id
                      ? 'bg-amber-700 text-white font-medium border-amber-700 shadow-sm'
                      : 'border-amber-900/15 dark:border-white/10 hover:bg-black/5'
                  }`}
                >
                  <span className="text-xs">{sp.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Text Alignment & Layout Mode */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-amber-900/15 dark:border-white/10">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold opacity-75 mb-2">
                Allineamento
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => onUpdateSettings({ textAlign: 'justify' })}
                  className={`min-h-[44px] flex-1 py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs transition-all ${
                    settings.textAlign === 'justify'
                      ? 'bg-amber-700 text-white border-amber-700 font-medium'
                      : 'border-amber-900/15 dark:border-white/10'
                  }`}
                >
                  <AlignJustify className="w-3.5 h-3.5" />
                  <span>Libro</span>
                </button>
                <button
                  onClick={() => onUpdateSettings({ textAlign: 'left' })}
                  className={`min-h-[44px] flex-1 py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs transition-all ${
                    settings.textAlign === 'left'
                      ? 'bg-amber-700 text-white border-amber-700 font-medium'
                      : 'border-amber-900/15 dark:border-white/10'
                  }`}
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                  <span>Sinistra</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold opacity-75 mb-2">
                Formato
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => onUpdateSettings({ pageLayout: 'single' })}
                  className={`min-h-[44px] flex-1 py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs transition-all ${
                    settings.pageLayout === 'single'
                      ? 'bg-amber-700 text-white border-amber-700 font-medium'
                      : 'border-amber-900/15 dark:border-white/10'
                  }`}
                >
                  <Book className="w-3.5 h-3.5" />
                  <span>Pagina</span>
                </button>
                <button
                  onClick={() => onUpdateSettings({ pageLayout: 'double' })}
                  className={`min-h-[44px] flex-1 py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs transition-all ${
                    settings.pageLayout === 'double'
                      ? 'bg-amber-700 text-white border-amber-700 font-medium'
                      : 'border-amber-900/15 dark:border-white/10'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>Doppia</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sound effect toggle */}
          <div className="pt-2 border-t border-amber-900/15 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <div>
                <p className="text-xs font-medium">Fruscio pagina sfogliata</p>
                <p className="text-[11px] opacity-60">Feedback tattile acustico realistico</p>
              </div>
            </div>
            <button
              onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`min-h-[44px] min-w-[54px] px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                settings.soundEnabled
                  ? 'bg-amber-700 text-white'
                  : 'bg-stone-400/20 text-stone-500'
              }`}
            >
              {settings.soundEnabled ? 'Sì' : 'No'}
            </button>
          </div>
        </div>

        {/* Done Button */}
        <div className="mt-6 pt-4 border-t border-amber-900/15 dark:border-white/10">
          <button
            onClick={onClose}
            className="min-h-[48px] w-full py-3 rounded-2xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98]"
          >
            Applica e Continua a Leggere
          </button>
        </div>
      </div>
    </div>
  );
};
