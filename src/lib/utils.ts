import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Sınıf isimlerini birleştirmek için utility fonksiyonu
 * clsx ve tailwind-merge kullanarak çakışan Tailwind sınıflarını çözer
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * String'i slug formatına çevirir
 * @param text - Dönüştürülecek metin
 * @returns Slug formatında string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Özel karakterleri kaldır
    .replace(/[\s_-]+/g, '-') // Boşluk ve alt çizgileri tire ile değiştir
    .replace(/^-+|-+$/g, ''); // Başta ve sonda kalan tireleri kaldır
}

/**
 * Tarihi formatlar
 * @param date - Formatlanacak tarih
 * @param locale - Dil kodu (varsayılan: 'tr-TR')
 * @returns Formatlanmış tarih string'i
 */
export function formatDate(date: string | Date, locale: string = 'tr-TR'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Metni belirtilen uzunlukta keser ve sonuna üç nokta ekler
 * @param text - Kesilecek metin
 * @param length - Maksimum uzunluk
 * @returns Kesilmiş metin
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Okuma süresini hesaplar (dakika cinsinden)
 * @param text - Okunacak metin
 * @param wordsPerMinute - Dakikada okunan kelime sayısı (varsayılan: 200)
 * @returns Okuma süresi (dakika)
 */
export function calculateReadTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * URL'den query parametrelerini alır
 * @param url - URL string'i
 * @returns Query parametreleri objesi
 */
export function getQueryParams(url: string): Record<string, string> {
  const params = new URLSearchParams(url.split('?')[1]);
  const result: Record<string, string> = {};
  
  for (const [key, value] of params) {
    result[key] = value;
  }
  
  return result;
}

/**
 * Query parametrelerini URL'e ekler
 * @param baseUrl - Temel URL
 * @param params - Eklenecek parametreler
 * @returns Yeni URL string'i
 */
export function addQueryParams(baseUrl: string, params: Record<string, string>): string {
  const url = new URL(baseUrl);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });
  
  return url.toString();
}

/**
 * Email adresini doğrular
 * @param email - Doğrulanacak email
 * @returns Geçerli email ise true
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Telefon numarasını doğrular (Türkiye formatı)
 * @param phone - Doğrulanacak telefon
 * @returns Geçerli telefon ise true
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Local storage'a güvenli veri kaydetme
 * @param key - Anahtar
 * @param value - Değer
 */
export function setLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Local storage kaydetme hatası:', error);
  }
}

/**
 * Local storage'dan güvenli veri okuma
 * @param key - Anahtar
 * @param defaultValue - Varsayılan değer
 * @returns Okunan değer veya varsayılan değer
 */
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Local storage okuma hatası:', error);
    return defaultValue;
  }
}

/**
 * Debounce fonksiyonu - performans optimizasyonu için
 * @param func - Çalıştırılacak fonksiyon
 * @param delay - Gecikme süresi (ms)
 * @returns Debounced fonksiyon
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Throttle fonksiyonu - performans optimizasyonu için
 * @param func - Çalıştırılacak fonksiyon
 * @param delay - Gecikme süresi (ms)
 * @returns Throttled fonksiyon
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
