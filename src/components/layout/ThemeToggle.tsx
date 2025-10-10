import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import Button from '../ui/Button';

/**
 * Tema değiştirme butonu bileşeni
 * Light, Dark ve System temaları arasında geçiş yapar
 */
const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark, isSystem } = useTheme();

  const getIcon = () => {
    if (isSystem) return <Monitor className="h-4 w-4" />;
    return isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;
  };

  const getLabel = () => {
    if (isSystem) return 'Sistem';
    return isDark ? 'Açık' : 'Koyu';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2"
      aria-label={`Tema değiştir: ${getLabel()}`}
      title={`Mevcut tema: ${getLabel()}`}
    >
      {getIcon()}
      <span className="hidden sm:inline">{getLabel()}</span>
    </Button>
  );
};

export default ThemeToggle;
