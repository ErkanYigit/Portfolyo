import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  CheckCircle,
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { getProjectBySlug } from '../data/projects';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

/**
 * Proje detay sayfası bileşeni
 * Proje bilgileri, görseller, teknolojiler ve bağlantılar içerir
 */
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isTurkish } = useI18n();
  const project = slug ? getProjectBySlug(slug) : null;

  // Proje bulunamazsa 404 sayfasına yönlendir
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-6"
          >
            {/* Geri Dön Butonu */}
            <Button
              as={Link}
              to="/projects"
              variant="ghost"
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Projelere Dön
            </Button>

            {/* Proje Başlığı ve Kategori */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="primary" size="lg">
                    {project.category === 'web' ? 'Web' :
                     project.category === 'mobile' ? 'Mobil' :
                     project.category === 'ai-ml' ? 'AI/ML' :
                     project.category === 'iot' ? 'IoT' : project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="success" size="lg">
                      Öne Çıkan
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                  {isTurkish ? project.description : (project as any).descriptionEn || project.description}
                </p>
              </div>

              {/* Aksiyon Butonları */}
              <div className="flex flex-col sm:flex-row gap-3">
                {project.liveUrl && (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {isTurkish ? 'Canlı Demo' : 'Live Demo'}
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    as="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                    className="group"
                  >
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {isTurkish ? 'Kaynak Kod' : 'Source Code'}
                  </Button>
                )}
              </div>
            </div>

            {/* Proje Meta Bilgileri */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              {project.year && (
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Code2 className="h-4 w-4" />
                <span>
                  {isTurkish ? `${project.tech.length} Teknoloji` : `${project.tech.length} Technologies`}
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Proje Görselleri */}
      {project.images && project.images.length > 0 && (
        <Section>
          <Container>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Proje Görselleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Görsel ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Proje Detayları */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Kolon - Proje Özellikleri */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="lg:col-span-2 space-y-8"
            >
              {/* Proje Özellikleri */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Proje Özellikleri
                </h3>
                <ul className="space-y-3">
                  {(isTurkish ? project.highlights : ((project as any).highlightsEn || project.highlights)).map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Proje Açıklaması */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Proje Hakkında
                </h3>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    Bu proje, modern web teknolojileri kullanılarak geliştirilmiş olup, 
                    kullanıcı deneyimini ön planda tutan bir yaklaşımla tasarlanmıştır. 
                    Proje sürecinde en güncel teknolojiler ve en iyi uygulamalar kullanılmıştır.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Sağ Kolon - Teknik Bilgiler */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="space-y-6"
            >
              {/* Kullanılan Teknolojiler */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kullanılan Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Proje Bilgileri */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Proje Bilgileri
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Kategori:</span>
                    <Badge variant="primary" size="sm">
                      {project.category === 'web' ? 'Web' :
                       project.category === 'mobile' ? 'Mobil' :
                       project.category === 'ai-ml' ? 'AI/ML' :
                       project.category === 'iot' ? 'IoT' : project.category}
                    </Badge>
                  </div>
                  {project.year && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Yıl:</span>
                      <span className="text-gray-900 dark:text-white">{project.year}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Rol:</span>
                      <span className="text-gray-900 dark:text-white">{project.role}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Teknoloji Sayısı:</span>
                    <span className="text-gray-900 dark:text-white">{project.tech.length}</span>
                  </div>
                </div>
              </Card>

              {/* Bağlantılar */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Bağlantılar
                </h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center group"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Canlı Demo
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      as="a"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="w-full justify-center group"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Kaynak Kod
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectDetail;
