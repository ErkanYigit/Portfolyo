# 🚀 Erkan Yılmaz - Portfolio

Modern, performanslı ve kullanıcı dostu kişisel portföy web uygulaması. React, TypeScript, Vite ve TailwindCSS ile geliştirilmiştir.

## ✨ Özellikler

### 🎨 Modern Tasarım
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode**: Kullanıcı tercihi ve sistem teması desteği
- **Smooth Animations**: Framer Motion ile akıcı geçişler
- **Modern UI**: TailwindCSS ile şık ve minimal tasarım

### 📱 Sayfalar ve Bölümler
- **Ana Sayfa**: Hero bölümü, öne çıkan projeler, istatistikler
- **Projeler**: Filtrelenebilir proje galerisi, arama, kategori filtreleri
- **Proje Detayları**: Dinamik proje sayfaları, görseller, teknolojiler
- **Hakkımda**: Deneyim, eğitim, beceriler, sertifikalar
- **Blog**: Blog yazıları ve harici blog linkleri
- **İletişim**: İletişim formu, sosyal medya linkleri

### 🔧 Teknik Özellikler
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **React Router**: SPA routing ve sayfa yönlendirmeleri
- **Form Validation**: React Hook Form + Zod ile güçlü form doğrulama
- **i18n Desteği**: Türkçe/İngilizce çoklu dil desteği
- **SEO Optimizasyonu**: Meta taglar, sitemap, robots.txt
- **PWA Hazır**: Manifest.json ve service worker desteği

### 🎯 Performans
- **Lighthouse 90+**: Optimize edilmiş performans skorları
- **Code Splitting**: Lazy loading ile hızlı yükleme
- **Image Optimization**: Lazy loading ve responsive görseller
- **Bundle Optimization**: Vite ile optimize edilmiş build

## 🛠️ Teknoloji Yığını

### Frontend
- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **TailwindCSS** - CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **Lucide React** - İkon kütüphanesi

### Routing & State
- **React Router DOM** - SPA routing
- **React Hook Form** - Form yönetimi
- **Zod** - Schema validation

### Development
- **Vitest** - Test framework
- **Testing Library** - React test utilities
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya pnpm

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/erkan-dev/portfolio.git
   cd portfolio
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   pnpm install
   ```

3. **Environment dosyasını oluşturun**
   ```bash
   cp env.example .env
   ```

4. **Environment değişkenlerini düzenleyin**
   ```bash
   # .env dosyasını düzenleyin
   VITE_SITE_URL=https://erkan.dev
   VITE_CONTACT_EMAIL=erkan@example.com
   # ... diğer değişkenler
   ```

5. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   # veya
   pnpm dev
   ```

6. **Tarayıcıda açın**
   ```
   http://localhost:5173
   ```

## 📜 Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview

# Test çalıştır
npm run test

# Test UI
npm run test:ui

# Test coverage
npm run test:coverage

# Lint kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── ui/             # Temel UI bileşenleri
│   └── layout/         # Layout bileşenleri
├── pages/              # Sayfa bileşenleri
├── data/               # Veri dosyaları
├── hooks/              # Custom React hooks
├── lib/                # Utility fonksiyonları
├── routes/             # Routing yapılandırması
├── types/              # TypeScript tip tanımları
├── utils/              # Yardımcı fonksiyonlar
└── test/               # Test dosyaları

public/
├── images/             # Görsel dosyalar
├── icons/              # PWA ikonları
├── manifest.json       # PWA manifest
├── robots.txt          # SEO robots
├── sitemap.xml         # SEO sitemap
└── CV.pdf             # CV dosyası
```

## 🎨 Özelleştirme

### Renk Paleti
TailwindCSS yapılandırmasında (`tailwind.config.js`) renk paletini özelleştirebilirsiniz:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### İçerik Güncelleme
- **Kişisel Bilgiler**: `src/data/personal.ts`
- **Projeler**: `src/data/projects.ts`
- **Beceriler**: `src/data/skills.ts`
- **Blog Yazıları**: `src/data/blog.ts`

### Çeviriler
Çoklu dil desteği için `src/hooks/useI18n.ts` dosyasındaki çevirileri güncelleyin.

## 📱 Responsive Tasarım

- **Mobile First**: Önce mobil tasarım
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

## 🔍 SEO Optimizasyonu

- **Meta Tags**: Her sayfa için optimize edilmiş meta taglar
- **Sitemap**: Otomatik sitemap.xml oluşturma
- **Robots.txt**: Arama motoru yönlendirmeleri
- **Structured Data**: JSON-LD ile yapılandırılmış veri
- **Open Graph**: Sosyal medya paylaşımları için meta taglar

## ♿ Erişilebilirlik

- **Semantic HTML**: Anlamlı HTML elementleri
- **ARIA Labels**: Ekran okuyucu desteği
- **Keyboard Navigation**: Klavye ile gezilebilirlik
- **Color Contrast**: WCAG uyumlu renk kontrastı
- **Focus Management**: Odak yönetimi

## 🧪 Test

```bash
# Tüm testleri çalıştır
npm run test

# Test coverage raporu
npm run test:coverage

# Test UI ile görsel test arayüzü
npm run test:ui
```

## 📦 Build ve Deploy

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npm i -g vercel
vercel

# GitHub ile otomatik deploy
# Vercel dashboard'da GitHub repo bağlayın
```

### Netlify
```bash
# Netlify CLI ile deploy
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Manual Deploy
```bash
# Production build
npm run build

# dist/ klasörünü web sunucunuza yükleyin
```

## 🔧 Geliştirme Notları

### Yeni Proje Ekleme
1. `src/data/projects.ts` dosyasına proje bilgilerini ekleyin
2. Proje görsellerini `public/images/` klasörüne ekleyin
3. Gerekirse yeni kategori ekleyin

### Yeni Sayfa Ekleme
1. `src/pages/` klasörüne yeni sayfa bileşeni ekleyin
2. `src/routes/index.tsx` dosyasına route ekleyin
3. Navbar'a menü öğesi ekleyin

### Yeni Bileşen Ekleme
1. `src/components/ui/` veya `src/components/layout/` klasörüne ekleyin
2. TypeScript tiplerini tanımlayın
3. Gerekirse test dosyası oluşturun


## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: erkan.ygt01@gmail.com
- **LinkedIn**: [linkedin.com/in/erkan-yigit](https://linkedin.com/in/erkan-yigit)
- **GitHub**: [github.com/erkan-dev](https://github.com/erkanyigit)
- **Website**: [erkan.dev](https://erkanyigit.me)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
