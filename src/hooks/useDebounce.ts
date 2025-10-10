import { useState, useEffect } from 'react';

/**
 * Debounce hook'u - performans optimizasyonu için
 * @param value - Debounce edilecek değer
 * @param delay - Gecikme süresi (ms)
 * @returns Debounced değer
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Delay süresi sonra değeri güncelle
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: timeout'u temizle
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
