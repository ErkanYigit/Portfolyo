import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Modern React Geliştirme: Hooks ve Context API Kullanımı',
    slug: 'modern-react-gelistirme-hooks-context',
    excerpt: 'React Hooks ve Context API\'nin modern web geliştirmedeki rolü ve en iyi uygulamaları hakkında kapsamlı bir rehber.',
    content: 'Bu yazıda React Hooks ve Context API\'nin nasıl etkili bir şekilde kullanılacağını öğreneceksiniz...',
    publishedAt: '2024-01-15',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'TypeScript ile Daha Güvenli Kod Yazma',
    slug: 'typescript-guvenli-kod-yazma',
    excerpt: 'TypeScript\'in avantajları ve JavaScript projelerinizde nasıl kullanabileceğiniz hakkında detaylı bilgiler.',
    content: 'TypeScript, JavaScript\'e statik tip kontrolü ekleyerek daha güvenli ve sürdürülebilir kod yazmanızı sağlar...',
    publishedAt: '2024-01-10',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices'],
    readTime: 6,
    featured: true
  },
  {
    id: '3',
    title: 'React Native ile Mobil Uygulama Geliştirme',
    slug: 'react-native-mobil-uygulama-gelistirme',
    excerpt: 'React Native kullanarak cross-platform mobil uygulamalar nasıl geliştirilir? Adım adım rehber.',
    content: 'React Native, tek bir kod tabanı ile hem iOS hem de Android uygulamaları geliştirmenizi sağlar...',
    publishedAt: '2024-01-05',
    tags: ['React Native', 'Mobile', 'JavaScript', 'Cross-Platform'],
    readTime: 10,
    featured: false
  },
  {
    id: '4',
    title: 'Yapay Zeka ve Makine Öğrenmesi: Başlangıç Rehberi',
    slug: 'yapay-zeka-makine-ogrenmesi-baslangic',
    excerpt: 'AI/ML dünyasına giriş yapmak isteyenler için temel kavramlar ve pratik uygulamalar.',
    content: 'Yapay zeka ve makine öğrenmesi günümüzün en hızla gelişen teknolojilerinden biridir...',
    publishedAt: '2023-12-28',
    tags: ['AI', 'Machine Learning', 'Python', 'Data Science'],
    readTime: 12,
    featured: true
  },
  {
    id: '5',
    title: 'IoT Projelerinde WebSocket Kullanımı',
    slug: 'iot-projelerinde-websocket-kullanimi',
    excerpt: 'IoT cihazlarından gerçek zamanlı veri akışı için WebSocket teknolojisinin etkili kullanımı.',
    content: 'WebSocket, IoT projelerinde gerçek zamanlı veri iletişimi için ideal bir protokoldür...',
    publishedAt: '2023-12-20',
    tags: ['IoT', 'WebSocket', 'Real-time', 'Hardware'],
    readTime: 7,
    featured: false
  },
  {
    id: '6',
    title: 'TailwindCSS ile Modern Web Tasarımı',
    slug: 'tailwindcss-modern-web-tasarimi',
    excerpt: 'Utility-first CSS framework TailwindCSS ile hızlı ve tutarlı web tasarımları oluşturma.',
    content: 'TailwindCSS, utility-first yaklaşımı ile hızlı ve tutarlı web tasarımları oluşturmanızı sağlar...',
    publishedAt: '2023-12-15',
    tags: ['CSS', 'TailwindCSS', 'Design', 'Frontend'],
    readTime: 5,
    featured: false
  }
];

// Harici blog linkleri
export const externalBlogs = [
  {
    title: 'Medium Blog',
    url: 'https://medium.com/@example',
    description: 'Teknik yazılarım ve deneyimlerim'
  },
  {
    title: 'Dev.to Profil',
    url: 'https://dev.to/example',
    description: 'Geliştirici topluluğu ile paylaşımlarım'
  },
  {
    title: 'Hashnode Blog',
    url: 'https://example.hashnode.dev',
    description: 'Web geliştirme ve teknoloji yazıları'
  }
];

// Yardımcı fonksiyonlar
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByTag = (tag: string) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getAllTags = () => {
  const tags = [...new Set(blogPosts.flatMap(post => post.tags))];
  return tags.sort();
};
