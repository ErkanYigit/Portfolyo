import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useI18n } from '../../hooks/useI18n';
import { cn } from '../../lib/utils';
import ThemeToggle from './ThemeToggle';
import Button from '../ui/Button';

/**
 * Ana navigasyon bileşeni
 * Responsive tasarım, mobil menü ve tema toggle içerir
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage, isTurkish } = useI18n();

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menüyü kapat
  const closeMenu = () => setIsOpen(false);

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Geçici çözüm - doğrudan çeviriler
  const navLabels = {
    tr: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      about: 'Hakkımda',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    }
  };

  const navItems = [
    { path: '/', label: navLabels[isTurkish ? 'tr' : 'en'].home },
    { path: '/projects', label: navLabels[isTurkish ? 'tr' : 'en'].projects },
    { path: '/about', label: navLabels[isTurkish ? 'tr' : 'en'].about },
    { path: '/contact', label: navLabels[isTurkish ? 'tr' : 'en'].contact }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Code2 className="h-8 w-8" />
            <span>Erkan YIGIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs"
            >
              {isTurkish ? 'EN' : 'TR'}
            </Button>
            <ThemeToggle />
            <Button
              as="a"
              href="/documents/Erkan_Yigit_Cv_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="text-xs"
            >
              {isTurkish ? 'CV İndir' : 'Download CV'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs"
            >
              {isTurkish ? 'EN' : 'TR'}
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menüyü aç/kapat"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <Button
                  as="a"
                  href="/documents/Erkan_Yigit_Cv_Eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  {isTurkish ? 'CV İndir' : 'Download CV'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
