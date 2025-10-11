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
    title: 'FurniCatalog & StockApp',
    slug: 'furni-catalog',
    description:
      'Bir koltuk/oturma grubu firması için ürün kataloğu (mağaza vitrini) ve web tabanlı stok takip/güncelleme sistemi. Katalogda kategori/renk/doku filtreleri, varyantlar ve favorilere ekleme; yönetim panelinde stok güncelleme, toplu içe/dışa aktarım ve temel raporlama bulunur.',
    descriptionEn:
      'Product catalog (storefront) and web-based stock tracking/updating for a furniture brand; variants, filters and basic reporting.',
    tech: [
      'React',
      'Vite',
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
      'Varyant (renk/kumaş) destekli ürün kataloğu ve hızlı filtreleme',
      'Mobil uyumlu, performans odaklı vitrin sayfaları',
      'Yönetim panelinden anlık stok güncelleme ve log kaydı',
      'CSV/Excel ile toplu ürün & stok içe/dışa aktarım',
      'Rol bazlı erişim (admin/editor) ve aktivite geçmişi',
      'Basit raporlama: en çok görüntülenen ürünler, düşük stok uyarıları'
    ],
    highlightsEn: [
      'Variant-enabled catalog with fast filters',
      'Responsive, performance-focused storefront',
      'Instant stock updates with audit logs',
      'Bulk product/stock import-export (CSV/Excel)',
      'Role-based access (admin/editor) and activity history',
      'Basic analytics: top views, low-stock alerts'
    ],
    repoUrl: 'https://github.com/ErkanYigit/furni-catalog',
    liveUrl: undefined,
    images: [
      '/images/projects/furni-catalog-1.jpg',
      '/images/projects/furni-catalog-2.jpg',
      '/images/projects/furni-catalog-3.jpg',
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
    liveUrl: undefined,
    images: [
      '/images/projects/halisaha-1.jpg',
      '/images/projects/halisaha-2.jpg',
      '/images/projects/halisaha-3.jpg'
    ],
    year: 2025,
    role: 'Full Stack Developer',
    featured: true
  },
  {
    id: 'web-12',
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
      '/images/projects/mesai-3.jpg'
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