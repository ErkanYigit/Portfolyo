// Proje türleri
export type Project = {
  id: string;
  title: string;
  slug: string; // URL için
  description: string;
  descriptionEn?: string;
  tech: string[]; // ["React", "Node", ...]
  category: "web" | "mobile" | "ai-ml" | "iot";
  highlights: string[]; // madde madde başarılar/özellikler
  highlightsEn?: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[]; // placeholder görseller
  videoUrl?: string; // demo/tanıtım videosu
  year?: number;
  role?: string; // Solo / Team Lead / Contributor
  featured?: boolean; // öne çıkan proje
};

// Beceri türleri
export type Skill = {
  name: string;
  level: number; // 1-100 arası
  category: "frontend" | "backend" | "mobile" | "ai-ml" | "iot" | "tools";
  icon?: string;
};

// Blog yazısı türleri
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  tags: string[];
  externalUrl?: string; // Harici blog linki
  readTime?: number; // dakika cinsinden
  featured?: boolean;
};

// Sosyal medya türleri
export type SocialLink = {
  name: string;
  url: string;
  icon: string;
  color?: string;
};

// İletişim formu türleri
export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Dil türleri
export type Language = "tr" | "en";

// Tema türleri
export type Theme = "light" | "dark" | "system";

// Filtre türleri
export type ProjectFilter = {
  category?: string;
  search?: string;
  tech?: string;
};

// Sayfa meta türleri
export type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
};
