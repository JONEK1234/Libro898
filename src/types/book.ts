export interface BookPageData {
  id: number; // 1 to 50
  chapterIndex: number; // 0 to 9
  chapterTitle: string;
  chapterSubtitle: string;
  pageInChapter: number; // 1 to 5
  title?: string; // Optional subtitle for this page
  paragraphs: string[];
  epigraph?: {
    text: string;
    author: string;
  };
  footnote?: string;
}

export interface ChapterInfo {
  index: number;
  title: string;
  subtitle: string;
  startPage: number;
  endPage: number;
  synopsis: string;
}

export type ThemeMode = 'warm-amber' | 'candlelight' | 'sepia' | 'linen' | 'night';
export type FontFamilyOption = 'lora' | 'garamond' | 'sans';
export type FontSizeOption = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type LineSpacingOption = 'tight' | 'normal' | 'relaxed';
export type PageLayoutMode = 'single' | 'double'; // Double spread on desktop

export interface ReaderSettings {
  theme: ThemeMode;
  fontFamily: FontFamilyOption;
  fontSize: FontSizeOption;
  lineSpacing: LineSpacingOption;
  textAlign: 'justify' | 'left';
  pageLayout: PageLayoutMode;
  soundEnabled: boolean;
  ambientSound: 'none' | 'rain' | 'fire' | 'library';
  ambientVolume: number;
}

export interface Bookmark {
  page: number;
  timestamp: number;
  chapterTitle: string;
  excerpt: string;
}

export interface NoteHighlight {
  id: string;
  page: number;
  text: string;
  userNote?: string;
  timestamp: number;
}
