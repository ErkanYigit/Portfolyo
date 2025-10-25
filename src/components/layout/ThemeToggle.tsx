import React, { useMemo } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useI18n } from '../../hooks/useI18n';
import Button from '../ui/Button';

/**
 * Tema değiştirme butonu bileşeni
 * Light, Dark ve System temaları arasında geçiş yapar
 */
const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark, isSystem } = useTheme();
  const { isTurkish } = useI18n();

  const getIcon = () => {
    if (isSystem) return <Monitor className="h-4 w-4" />;
    return isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;
  };

  // useMemo kullanarak her render'da yeniden hesaplanmayı önlüyoruz
  const themeLabel = useMemo(() => {
    if (isSystem) return isTurkish ? 'Sistem' : 'System';
    return isDark ? (isTurkish ? 'Açık' : 'Light') : (isTurkish ? 'Koyu' : 'Dark');
  }, [isSystem, isDark, isTurkish]);

  const ariaLabel = useMemo(() => {
    return isTurkish ? `Tema değiştir: ${themeLabel}` : `Toggle theme: ${themeLabel}`;
  }, [isTurkish, themeLabel]);

  const title = useMemo(() => {
    return isTurkish ? `Mevcut tema: ${themeLabel}` : `Current theme: ${themeLabel}`;
  }, [isTurkish, themeLabel]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2"
      aria-label={ariaLabel}
      title={title}
    >
      {getIcon()}
      <span className="hidden sm:inline">{themeLabel}</span>
    </Button>
  );
};

export default ThemeToggle;
