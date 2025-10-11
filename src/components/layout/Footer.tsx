import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  BookOpen, 
  Code,
} from 'lucide-react';
import { useI18n } from '../../hooks/useI18n';
import { socialLinks } from '../../data/socials';

/**
 * Footer bileşeni
 * Sosyal medya linkleri, site bilgileri ve telif hakkı içerir
 */
const Footer: React.FC = () => {
  const { isTurkish } = useI18n();

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      mail: Mail,
      globe: Globe,
      'book-open': BookOpen,
      code: Code
    };
    
    const IconComponent = iconMap[iconName] || Globe;
    return <IconComponent className="h-5 w-5" />;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <Code className="h-8 w-8 text-gray-900 dark:text-gray-900 [&>*]:text-gray-900 dark:[&>*]:text-gray-900" />
              <span className="text-gray-900 dark:text-gray-900">Erkan YIGIT</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              {isTurkish
                ? 'Modern web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında uzmanlaşmış Full Stack Developer.'
                : 'Full Stack Developer specialized in modern web, mobile, and AI.'}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase tracking-wider mb-4">
              {isTurkish ? 'Hızlı Linkler' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isTurkish ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isTurkish ? 'Projeler' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isTurkish ? 'Hakkımda' : 'About'}
                </Link>
              </li>
              <li>
                {/* Blog kaldırıldı */}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isTurkish ? 'İletişim' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase tracking-wider mb-4">
              {isTurkish ? 'İletişim' : 'Contact'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:erkan.ygt07@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>erkan.ygt07@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ErkanYigit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/erkan-yiğit-8821a4262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-2"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Erkan YIGIT.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
