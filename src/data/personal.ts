// Kişisel bilgiler ve site meta verileri
export const personalInfo = {
  name: 'Erkan YIGIT',
  title: 'Full Stack Geliştirici & Yapay Zeka Odaklı',
  titleEn: 'Full Stack Developer & AI Enthusiast',
  bio: 'Modern web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında uzmanlaşmış deneyimli bir yazılım geliştiricisiyim. React, Node.js, Python ve IoT teknolojileri ile çeşitli projeler geliştiriyorum.',
  bioEn: 'I am a software developer specialized in modern web technologies, mobile development, and AI. I build projects with React, Node.js, Python, and IoT and focus on performance and user experience.',
  shortBio: 'Full Stack Developer & AI Enthusiast',
  email: 'erkan.ygt07@gmail.com',
  phone: '+90 507 206 05 25',
  location: 'Bursa, Türkiye',
  website: 'https://erkan.dev',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHyphW0tkxYHg/profile-displayphoto-crop_800_800/B4DZmxOM4pG8AI-/0/1759614914681?e=1762387200&v=beta&t=-6NyW4z18_tAGGKqXUu8QWAU7srmX0lY6pqY0M54jvo', // Kendi fotoğrafınızı public/images/ klasörüne koyun
  resume: '/documents/Erkan_Yigit_Cv_Eng.pdf', // Kendi CV'nizi public/documents/ klasörüne koyun
  yearsOfExperience: 5,
  projectsCompleted: 25,
  happyClients: 15,
  awards: 3
};

export const siteConfig = {
  name: 'Erkan Yılmaz - Portfolio',
  description: 'Modern web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında uzmanlaşmış Full Stack Developer',
  url: 'https://erkan.dev',
  ogImage: 'https://erkan.dev/og-image.jpg',
  keywords: [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Mobile Development',
    'AI/ML',
    'IoT',
    'Full Stack Developer',
    'Web Development',
    'Software Engineer'
  ],
  author: {
    name: 'Erkan YIGIT',
    email: 'erkan@example.com',
    url: 'https://erkan.dev'
  },
  social: {
    twitter: 'https://twitter.com/raph1ks',
    github: 'https://github.com/ErkanYigit',
    linkedin: 'https://www.linkedin.com/in/erkan-yiğit-8821a4262',
    medium: 'https://medium.com/@erkan-dev'
  }
};

export const experience = [
  {
    title: 'Bilgisayar Mühendisi Stajyeri',
    titleEn: 'Computer Engineering Intern',
    company: 'Çamlıca Barkod',
    location: 'Türkiye',
    period: '28.07.2025 - 19.09.2025',
    description:
      'Kasiyersiz kasa projesinde bilgisayarla görü, makine öğrenmesi ve web geliştirme alanlarında görev aldım.',
    descriptionEn:
      'Worked on a cashierless checkout project across computer vision, machine learning, and web development.',
    highlights: [
      'Veri seti hazırlama ve model eğitimi (CV/ML)',
      'Backend servis geliştirme (API) ve entegrasyon',
      'Frontend arayüz tasarımı ve donanım entegrasyonu',
      'Takım çalışması ve proje süreçlerine aktif katkı'
    ],
    highlightsEn: [
      'Dataset preparation and model training (CV/ML)',
      'Backend API development and integrations',
      'Frontend UI design and hardware integrations',
      'Strong collaboration and project delivery'
    ]
  },
  {
    title: 'Yazılım Geliştirici',
    titleEn: 'Software Developer',
    company: 'Salon Koltuk',
    location: 'Türkiye',
    period: '05.03.2023 - 27.09.2023',
    description:
      'Bir koltuk mağazası için veri tabanı ve stok takibini içeren, ürün kataloğu odaklı bir web uygulaması geliştirdim.',
    descriptionEn:
      'Built a product-catalog web app with database-backed stock tracking for a furniture store.',
    highlights: [
      'Ürün kataloğu ve varyant yönetimi (renk/kumaş)',
      'Stok takibi, CSV/Excel içe–dışa aktarma',
      'Yönetim paneli ve rol bazlı erişim'
    ],
    highlightsEn: [
      'Product catalog and variant management (color/fabric)',
      'Stock tracking, CSV/Excel import-export',
      'Admin panel and role-based access'
    ]
  },
  {
    title: 'Sosyal Medya İçerik Editörü',
    titleEn: 'Social Media Content Editor',
    company: 'Watchaces',
    location: 'Türkiye',
    period: '01.12.2023 - 01.06.2024',
    description:
      'Instagram için marka kimliğine uygun postlar hazırladım. Ana sayfa düzenlemesinde tasarım ve içerik üretiminden sorumluydum.',
    descriptionEn:
      'Produced Instagram posts aligned with brand identity; handled homepage layout and content.',
    highlights: [
      'Instagram için görsel/içerik üretimi ve yayın planlama',
      'Ana sayfa düzeni, görsel hiyerarşi ve metin içerikleri',
      'Temel analitik takibi ve içerik performansının iyileştirilmesi'
    ],
    highlightsEn: [
      'Visual/content production and publishing plan for Instagram',
      'Homepage layout, visual hierarchy, and copy',
      'Basic analytics tracking and content performance improvements'
    ]
  }

];

export const education = [
  {
    degree: 'Bilgisayar Mühendisliği',
    school: 'Hitit Üniversitesi',
    period: '2021 - 2025',
    description: 'Yazılım mühendisliği, veri yapıları ve algoritmalar üzerine eğitim.',
    
  },
  {
    degree: 'Yapay Zeka Sertifikası',
    school: 'Coursera - Stanford University',
    period: '2023',
    description: 'Machine Learning ve Deep Learning konularında uzmanlaşma.',
    gpa: 'A+'
  }
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-123456',
    url: 'https://aws.amazon.com/verification'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PD-789012',
    url: 'https://cloud.google.com/certification'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2022',
    credentialId: 'META-REACT-345678',
    url: 'https://www.meta.com/certifications'
  }
];
