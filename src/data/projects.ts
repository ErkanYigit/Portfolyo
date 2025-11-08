import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'iot-01',
    title: 'Smart Coop',
    slug: 'smart-coop',
    description:
      'Raspberry Pi 5 tabanlı, 7/24 kamera ile canlı görüntü işleme yaparak tavuk sayımı yapan; sıcaklık, gaz, yem ve su seviyesini sensörlerle izleyip mobil uygulamaya ileten akıllı kümes sistemi. Otomatik kapı gün-ışığına göre açılıp kapanır; istatistik ve uyarı sistemi bulunur.',
    descriptionEn:
      'Raspberry Pi 5–based smart coop with 24/7 camera vision for live chicken counting; reads temperature, gas, feed and water sensors, and streams data to a mobile app. Includes auto-door control by day/night and alert/analytics features.',
    tech: [
      'Raspberry Pi 5',
      'Python',
      'OpenCV',
      'YOLO/Deep Learning',
      'MQTT',
      'Node.js',
      'React Native',
      'TypeScript',
      'TailwindCSS',
      'PostgreSQL'
    ],
    category: 'iot',
    highlights: [
      'Kamera ile gerçek zamanlı tavuk sayımı (edge inference)',
      'Sıcaklık, gaz (MQ-135), yem ve su sensörlerinden anlık veri',
      'MQTT üzerinden veri yayını ve abone servisleri',
      'Mobil uygulamada anlık bildirim ve istatistik panosu',
      'Gündüz/gece durumuna göre otomatik kapı kontrolü',
      'Eşik değer aşımlarında uyarı ve olay kayıtları',
      'Yerel ağda offline çalışma; buluta opsiyonel senkron'
    ],
    highlightsEn: [
      'Real-time chicken counting via edge vision',
      'Live readings from temperature, gas (MQ-135), feed and water sensors',
      'MQTT pub/sub data pipeline',
      'Mobile push and analytics dashboard',
      'Auto-door control based on daylight',
      'Alerts on threshold breaches and event logs',
      'Offline-friendly with optional cloud sync'
    ],
    repoUrl: 'https://github.com/ErkanYigit/smart-coop',
    liveUrl: undefined,
    images: [
      '/images/projects/smart-coop-1.jpg',
      '/images/projects/smart-coop-2.jpg',
      '/images/projects/smart-coop-3.jpg',
      '/images/projects/smart-coop-4.jpg'
    ],
    year: 2025,
    role: 'IoT & Full Stack Developer',
    featured: true
  },
  {
    id: 'web-09',
    title: 'FurniCatalog',
    slug: 'furni-catalog',
    description:
      'Mobilya markası için modern ve kullanıcı dostu dijital ürün kataloğu. Müşterilerin ürünleri keşfetmesi, filtrelemesi ve favori listesi oluşturması için tasarlanmış şık bir vitrin uygulaması. Mağaza bilgileri, koleksiyonlar ve iletişim bilgilerini içerir.',
    descriptionEn:
      'Modern and user-friendly digital product catalog for a furniture brand. An elegant showcase application designed for customers to discover products, filter, and create wishlists. Includes store information, collections, and contact details.',
    tech: [
      'React',
      'Vite',
      'TypeScript',
      'TailwindCSS',
      'React Router',
      'Zustand'
    ],
    category: 'web',
    highlights: [
      'Zengin ürün detayları ve varyant (renk/kumaş) seçenekleri',
      'Gelişmiş filtreleme ve arama özellikleri',
      'Mobil uyumlu, performans odaklı tasarım',
      'Favori listesi oluşturma ve paylaşma',
      'Koleksiyon bazlı ürün gruplandırma',
      'Mağaza konum ve iletişim entegrasyonu'
    ],
    highlightsEn: [
      'Rich product details and variant options',
      'Advanced filtering and search capabilities',
      'Mobile-responsive, performance-focused design',
      'Wishlist creation and sharing',
      'Collection-based product grouping',
      'Store location and contact integration'
    ],
    repoUrl: 'https://github.com/ErkanYigit/furni-catalog',
    liveUrl: undefined,
    videoUrl: '/videos/katalogvid.mp4',
    images: [
      '/images/projects/furni-catalog-1.jpg',
      '/images/projects/furni-catalog-2.jpg',
      '/images/projects/furni-catalog-3.jpg',
    ],
    year: 2025,
    role: 'Frontend Developer',
    featured: true
  },
  {
    id: 'web-11',
    title: 'Halısaha Randevu',
    slug: 'halisaha-randevu',
    description:
      'Kullanıcının konumuna en yakın halısahaları listeleyen, filtreleyip uygun saatlerde randevu almayı sağlayan; takım/kadro kurma ve eksik oyuncu ya da rakip arama ilanı paylaşma özelliklerine sahip modern web uygulaması.',
    descriptionEn:
      'Modern web app to find nearby pitches, filter by availability and book; create squads, post missing-player or opponent requests.',
    tech: [
      'React', 'TypeScript', 'Vite', 'TailwindCSS', 'React Router', 'Zustand',
      'Node.js', 'Express', 'MongoDB', 'GeoJSON', 'Leaflet/Mapbox', 'JWT'
    ],
    category: 'web',
    highlights: [
      'Konuma göre en yakın sahaları listeleme (coğrafi sorgular)',
      'Tarih/saat, zemin, fiyat, ışıklandırma vb. filtreleme',
      'Randevu alma ve rezervasyon yönetimi',
      'Kadro kurma, eksik oyuncu/rakip ilanı oluşturma',
      'Harita üzerinde sahaları ve uygunluk durumlarını görselleştirme',
      'Bildirim/hatırlatma ve basit puanlama/yorum sistemi'
    ],
    highlightsEn: [
      'Nearest pitches by location (geo queries)',
      'Filter by date/time, surface, price, lighting, etc.',
      'Booking and reservation management',
      'Create squads; post missing player/opponent listings',
      'Map visuals for pitches and availability',
      'Notifications/reminders and simple rating/comments'
    ],
    repoUrl: 'https://github.com/ErkanYigit/halisaha-randevu',
    videoUrl: '/videos/halisaha.mp4',
    liveUrl: undefined,
    images: [
      '/images/projects/halisaha-1.jpg',
      '/images/projects/halisaha-2.jpg',
      '/images/projects/halisaha-3.jpg',
      '/images/projects/halisaha-4.jpg',
    ],
    year: 2025,
    role: 'Full Stack Developer',
    featured: true
  },
  {
    id: 'web-10',
    title: 'FurniStock',
    slug: 'furni-stock',
    description:
      'Mobilya üreticileri için üretimden teslimata kadar tüm süreçleri yönetebilecekleri ücretsiz, güvenli ve şık bir otomasyon sistemi. Modüler yapısı ile işletmenin ihtiyaçlarına göre özelleştirilebilir ve genişletilebilir.',
    descriptionEn:
      'A free, secure, and elegant automation system for furniture manufacturers to manage all processes from production to delivery. Customizable and expandable with its modular structure according to business needs.',
    tech: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'React Router',
      'Zustand',
      'Node.js',
      'Express',
      'PostgreSQL'
    ],
    category: 'web',
    highlights: [
      'Üretim planlama ve takip sistemi',
      'Stok ve depo yönetimi',
      'Sipariş takibi ve teslimat yönetimi',
      'Toplu veri içe/dışa aktarım (CSV/Excel)',
      'Rol bazlı erişim ve detaylı log kaydı',
      'Kapsamlı raporlama ve analiz araçları',
      'Modüler ve genişletilebilir mimari',
      'Kullanıcı dostu arayüz tasarımı'
    ],
    highlightsEn: [
      'Production planning and tracking system',
      'Inventory and warehouse management',
      'Order tracking and delivery management',
      'Bulk data import/export (CSV/Excel)',
      'Role-based access and detailed logging',
      'Comprehensive reporting and analytics',
      'Modular and extensible architecture',
      'User-friendly interface design'
    ],
    repoUrl: 'https://github.com/ErkanYigit/furni-stock',
    liveUrl: undefined,
    videoUrl: '/videos/otomasyonvid2.mp4',
    images: [
      '/images/projects/furni-catalog-4.jpg',
      '/images/projects/furni-catalog-5.jpg',
      '/images/projects/furni-catalog-6.jpg',
      '/images/projects/furni-catalog-7.jpg',
      '/images/projects/furni-catalog-8.jpg'
    ],
    year: 2025,
    role: 'Full Stack Developer',
    featured: true
  },
  {
    id: 'mobile-01',
    title: 'Mesai',
    slug: 'mesai',
    description:
      'Çalışanların haftalık/aylık çalışma ve mesai saatlerini, departman bazında dağılımlarıyla görüntüleyebildiği; tahakkuk/maaş önizlemesi, vardiya ve izin entegrasyonlarıyla basit İK ihtiyaçlarını karşılayan bir mobil uygulama (Flutter).',
    descriptionEn:
      'A Flutter mobile app for viewing weekly/monthly work and overtime hours with department breakdowns, payroll preview, and shift/leave integration.',
    tech: [
      'Flutter', 'Dart', 'Riverpod', 'REST API', 'JWT', 'SQLite', 'Charts'
    ],
    category: 'mobile',
    highlights: [
      'Haftalık/aylık mesai ve toplam çalışma saatlerini hesaplama',
      'Departman, kadro ve proje bazlı dağılımlar',
      'Maaş tahmini/mesai ücreti önizlemesi ve raporlar',
      'Vardiya, izin ve resmi tatil takvimiyle entegre hesaplama',
      'CSV/Excel içe/dışa aktarım ve denetim (audit) kayıtları'
    ],
    highlightsEn: [
      'Weekly/monthly overtime and total hours calculation',
      'Department/team/project breakdowns',
      'Payroll and overtime preview with reports',
      'Shift, leave and public holiday aware calculations',
      'CSV/Excel import-export and audit trails'
    ],
    repoUrl: 'https://github.com/ErkanYigit/mesai',
    liveUrl: undefined,
    images: [
      '/images/projects/mesai-1.jpg',
      '/images/projects/mesai-2.jpg',
      '/images/projects/mesai-3.jpg',
      '/images/projects/mesai-4.jpg',
      '/images/projects/mesai-5.jpg',
      '/images/projects/mesai-6.jpg',
    ],
    year: 2025,
    role: 'Full Stack Developer',
    featured: false
  },
  {
    id: 'ai-10',
    title: 'FaceScan Augmentor',
    slug: 'facescan-augmentor',
    description:
      'Özel yüz tespit modeli ile web uygulaması üzerinden çok açılı yüz tarama, profil kaydı ve zengin veri artırma (augmentation) seçenekleri sunan; çıktılarını toplu .zip olarak indirmeyi sağlayan AI/ML tabanlı bir web uygulaması.',
    descriptionEn:
      'AI/ML web app enabling multi-angle face scanning with a custom detector, profile saving, rich augmentations, and bulk ZIP export.',
    tech: [
      'Python',
      'PyTorch',
      'OpenCV',
      'Ultralytics YOLO',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'MongoDB',
      'Docker',
      'Redis'
    ],
    category: 'ai-ml',
    highlights: [
      'Özel eğitilmiş yüz tespit modeli ile yüksek doğruluk',
      'Yön koçu direktörleriyle çok açılı (ön/sağ/sol/üst/alt) yakalama akışı',
      'Gelişmiş augmentation: döndürme, ölçekleme, bulanıklaştırma, renk dönüşümleri, kısmi örtme',
      'Toplu işleme ve .zip olarak dışa aktarma',
      'Gizlilik odaklı işlem: geçici depolama ve süreli URLler',
      'İsteğe bağlı GPU hızlandırma ve kuyruklu arka plan işler'
    ],
    highlightsEn: [
      'High-accuracy custom face detector',
      'Multi-angle capture flow (front/right/left/top/bottom)',
      'Advanced augmentations: rotate, scale, blur, color, occlusion',
      'Batch processing and ZIP export',
      'Privacy by design: temporary storage and expiring URLs',
      'Optional GPU acceleration with queued background jobs'
    ],
    repoUrl: 'https://github.com/ErkanYigit/facescan-augmentor',
    liveUrl: undefined,
    images: [
      '/images/projects/facescan-1.jpg',
      '/images/projects/facescan-2.jpg',
      '/images/projects/facescan-3.jpg'
    ],
    year: 2025,
    role: 'ML Engineer & Full Stack Developer',
    featured: false
  },
{
  id: 'web-12',
  title: 'Teklif Tedarik Platformu',
  slug: 'teklif-v2',
  description:
    'Satınalma ekiplerinin tedarikçilerden teklif toplama, stok ve fiyat analizlerini yönetme, onay süreçlerini uçtan uca takip etme ihtiyaçlarını tek ekran üzerinden karşılayan kurumsal web uygulaması.',
  descriptionEn:
    'Enterprise procurement platform that unifies vendor quote collection, stock and pricing analytics, and approval workflows within a single web experience.',
  tech: [
    'Angular 20',
    'TypeScript',
    'DevExtreme',
    'RxJS',
    'Angular SSR',
    'ASP.NET Core 8',
    'Entity Framework Core',
    'SQL Server',
    'JWT Authentication'
  ],
  category: 'web',
  highlights: [
    'Teklif, tedarikçi ve ürün satırlarını aynı ekranda yönetme, çoklu tedarikçi karşılaştırma',
    'Cari, stok, fiyat ve tedarikçi verilerini ilişkilendirip CariStok matrisiyle izleme',
    'Role dayalı kimlik doğrulama ve JWT ile korunan teklif onay akışları',
    'DevExtreme gridleri üzerinden gelişmiş filtreleme, sıralama ve dışa aktarma',
    'Stok ve teklif verisini EF Core migrasyonlarıyla izlenebilir şekilde versiyonlama',
    'Angular SSR + Express ile hızlı ilk yükleme ve güvenli API katmanı'
  ],
  highlightsEn: [
    'Manage quotes, suppliers, and line items together with multi-vendor comparison',
    'Link customer, stock, pricing, and supplier data via the CariStok matrix',
    'Role-based authentication with JWT-protected approval workflows',
    'Advanced filtering, sorting, and export powered by DevExtreme grids',
    'Versioned data model via Entity Framework Core migrations',
    'Fast first paint through Angular SSR and a secured ASP.NET Core API layer'
  ],
  repoUrl: 'https://github.com/ErkanYigit/TeklifApp',
  videoUrl: '/videos/teklif-vid.mp4',
  liveUrl: undefined,
  images: [
    '/images/projects/teklif-1.jpg',
    '/images/projects/teklif-2.jpg',
    '/images/projects/teklif-3.jpg',
    '/images/projects/teklif-4.jpg',
    '/images/projects/teklif-5.jpg',
    '/images/projects/teklif-6.jpg',
    '/images/projects/teklif-7.jpg',
  ],
  year: 2025,
  role: 'Full Stack Developer',
  featured: true
}
];

// Kategori filtreleri için yardımcı fonksiyonlar
export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectCategories = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories.map(category => ({
    value: category,
    labelTr: category === 'web' ? 'Web' : 
             category === 'mobile' ? 'Mobil' :
             category === 'ai-ml' ? 'AI/ML' :
             category === 'iot' ? 'IoT' : category,
    labelEn: category === 'web' ? 'Web' : 
             category === 'mobile' ? 'Mobile' :
             category === 'ai-ml' ? 'AI/ML' :
             category === 'iot' ? 'IoT' : category
  }));
};