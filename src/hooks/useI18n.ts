import { useState, useEffect } from 'react';
import type { Language } from '../types';

// Dil dosyaları
const translations = {
  tr: {
    // Genel
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.about': 'Hakkımda',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.resume': 'CV İndir',
    
    // Hero bölümü
    'hero.greeting': 'Merhaba, Ben',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Modern web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında uzmanlaşmış deneyimli bir yazılım geliştiricisiyim.',
    'hero.cta.primary': 'Projelerimi İncele',
    'hero.cta.secondary': 'İletişime Geç',
    
    // Projeler
    'projects.title': 'Projelerim',
    'projects.subtitle': 'Geliştirdiğim projeler ve teknolojiler',
    'projects.filter.all': 'Tümü',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobil',
    'projects.filter.ai-ml': 'AI/ML',
    'projects.filter.iot': 'IoT',
    'projects.search.placeholder': 'Proje ara...',
    'projects.view.live': 'Canlı Demo',
    'projects.view.code': 'Kaynak Kod',
    'projects.view.details': 'Detayları Gör',
    
    // Hakkımda
    'about.title': 'Hakkımda',
    'about.subtitle': 'Benim hakkımda daha fazla bilgi',
    'about.experience': 'Deneyim',
    'about.education': 'Eğitim',
    'about.skills': 'Yetenekler',
    'about.certifications': 'Sertifikalar',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Teknoloji ve geliştirme hakkında yazılarım',
    'blog.read.more': 'Devamını Oku',
    'blog.read.time': 'dakika okuma',
    'blog.external.links': 'Harici Blog Linkleri',
    
    // İletişim
    'contact.title': 'İletişim',
    'contact.subtitle': 'Benimle iletişime geçin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',
    'contact.form.error': 'Mesaj gönderilirken bir hata oluştu.',
    
    // Footer
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.built.with': 'React ve TailwindCSS ile geliştirilmiştir.',
    
    // Genel butonlar
    'button.loading': 'Yükleniyor...',
    'button.error': 'Hata',
    'button.retry': 'Tekrar Dene',
    'button.close': 'Kapat',
    'button.back': 'Geri',
    'button.next': 'İleri',
    'button.previous': 'Önceki',
    
    // SEO
    'seo.title.default': 'Erkan Yılmaz - Full Stack Developer',
    'seo.description.default': 'Modern web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında uzmanlaşmış Full Stack Developer',
    'seo.keywords.default': 'React, TypeScript, Node.js, Python, Mobile Development, AI/ML, IoT, Full Stack Developer'
  },
  en: {
    // General
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.resume': 'Download CV',
    
    // Hero section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'I am an experienced software developer specialized in modern web technologies, mobile application development and artificial intelligence.',
    'hero.cta.primary': 'View My Projects',
    'hero.cta.secondary': 'Get In Touch',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Projects I developed and technologies I used',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.ai-ml': 'AI/ML',
    'projects.filter.iot': 'IoT',
    'projects.search.placeholder': 'Search projects...',
    'projects.view.live': 'Live Demo',
    'projects.view.code': 'Source Code',
    'projects.view.details': 'View Details',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about me',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.skills': 'Skills',
    'about.certifications': 'Certifications',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'My articles about technology and development',
    'blog.read.more': 'Read More',
    'blog.read.time': 'min read',
    'blog.external.links': 'External Blog Links',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with me',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.error': 'An error occurred while sending your message.',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
    'footer.built.with': 'Built with React and TailwindCSS.',
    
    // General buttons
    'button.loading': 'Loading...',
    'button.error': 'Error',
    'button.retry': 'Retry',
    'button.close': 'Close',
    'button.back': 'Back',
    'button.next': 'Next',
    'button.previous': 'Previous',
    
    // SEO
    'seo.title.default': 'Erkan Yılmaz - Full Stack Developer',
    'seo.description.default': 'Full Stack Developer specialized in modern web technologies, mobile application development and artificial intelligence',
    'seo.keywords.default': 'React, TypeScript, Node.js, Python, Mobile Development, AI/ML, IoT, Full Stack Developer'
  }
};

/**
 * Çoklu dil desteği için custom hook
 * Dil değiştirme, çeviri alma ve local storage yönetimi
 */
export function useI18n() {
  const [language, setLanguage] = useState<Language>('tr');

  // Local storage'dan dil tercihini yükle
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['tr', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştirme fonksiyonu
  const changeLanguage = (newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    // Sayfayı yenile
    window.location.reload();
  };

  // Çeviri alma fonksiyonu
  const t = (key: string, fallback?: string): string => {
    console.log(`🔍 Translating key: "${key}" for language: "${language}"`);
    console.log(`📚 Available translations for ${language}:`, Object.keys(translations[language]));
    
    const keys = key.split('.');
    let value: any = translations[language];
    
    console.log(`🔑 Looking for key: ${keys.join(' -> ')}`);
    
    for (const k of keys) {
      console.log(`  - Accessing: "${k}" in`, value);
      value = value?.[k];
      console.log(`  - Result:`, value);
    }
    
    const result = value || fallback || key;
    console.log(`✅ Final result: "${result}"`);
    
    if (result === key) {
      console.warn(`⚠️ Translation not found for key: "${key}"`);
    }
    
    return result;
  };

  // Dil toggle fonksiyonu
  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    changeLanguage(newLanguage);
  };

  return {
    language,
    changeLanguage,
    toggleLanguage,
    t,
    isTurkish: language === 'tr',
    isEnglish: language === 'en'
  };
}