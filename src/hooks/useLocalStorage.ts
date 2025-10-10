import { useState } from 'react';

/**
 * Local storage yönetimi için custom hook
 * @param key - Local storage anahtarı
 * @param initialValue - Varsayılan değer
 * @returns [storedValue, setValue] tuple'ı
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // State'i local storage'dan başlat
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Local storage okuma hatası (${key}):`, error);
      return initialValue;
    }
  });

  // Değer değiştiğinde local storage'ı güncelle
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Fonksiyon ise çağır, değilse direkt kullan
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      // Local storage'a kaydet
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Local storage yazma hatası (${key}):`, error);
    }
  };

  return [storedValue, setValue];
}
