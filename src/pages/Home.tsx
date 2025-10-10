import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { personalInfo } from '../data/personal';
import { getFeaturedProjects } from '../data/projects';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

/**
 * Ana sayfa bileşeni
 * Hero bölümü, öne çıkan projeler ve hakkımda özeti içerir
 */
const Home: React.FC = () => {
  const { t, isTurkish } = useI18n();
  const featuredProjects = getFeaturedProjects().slice(0, 3);

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
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Sol taraf - Metin içeriği */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                  {personalInfo.name}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                   {isTurkish ? (personalInfo as any).title : (personalInfo as any).titleEn || (personalInfo as any).title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isTurkish ? personalInfo.bio : (personalInfo as any).bioEn || personalInfo.bio}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  to="/projects"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  {isTurkish ? 'Projelerimi İncele' : 'View My Projects'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  {isTurkish ? 'İletişime Geç' : 'Get In Touch'}
                </Button>
              </motion.div>

              {/* Sosyal medya linkleri */}
              <motion.div variants={fadeInUp} className="flex space-x-4">
                <a
                  href="https://github.com/ErkanYigit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/erkan-yiğit-8821a4262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:erkan.ygt07@gmail.com"
                  className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Sağ taraf - Avatar ve istatistikler */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-80 h-80 mx-auto rounded-full object-cover shadow-2xl"
                />
                {/* Deneyim balonu kaldırıldı */}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* İstatistikler bölümü kaldırıldı */}

      {/* Öne Çıkan Projeler */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                {isTurkish ? 'Öne Çıkan Projeler' : 'Featured Projects'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
                {isTurkish ? 'Son dönemde üzerinde çalıştığım bazı dikkat çekici projeler.' : 'Some notable projects I have worked on recently.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="primary">
                          {project.category === 'web' ? 'Web' :
                           project.category === 'mobile' ? 'Mobil' :
                           project.category === 'ai-ml' ? 'AI/ML' :
                           project.category === 'iot' ? 'IoT' : project.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button
                          as={Link}
                          to={`/projects/${project.slug}`}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          {isTurkish ? 'Detayları Görüntüle' : 'View Details'}
                        </Button>
                        {project.liveUrl && (
                          <Button
                            as="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            className="flex-1"
                          >
                            {isTurkish ? 'Canlı Demo' : 'Live Demo'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                as={Link}
                to="/projects"
                variant="outline"
                size="lg"
                className="group"
              >
                {isTurkish ? 'Tüm Projeleri Görüntüle' : 'View All Projects'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-gray-100">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900">
              {isTurkish ? 'Projenizde Birlikte Çalışalım' : 'Let\'s Work Together on Your Project'}
            </h2>
            <p className="text-xl text-white dark:text-gray-700 max-w-2xl mx-auto">
              {isTurkish ? 'Modern teknolojilerle hayalinizdeki projeyi hayata geçirelim. İletişime geçin ve projenizi birlikte planlayalım.' : 'Let\'s bring your dream project to life with modern technologies. Get in touch and let\'s plan your project together.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <Mail className="mr-2 h-5 w-5" />
                {isTurkish ? 'İletişime Geç' : 'Get In Touch'}
              </Button>
              <Button
                as="a"
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="border-white text-white dark:border-gray-700 dark:text-gray-900 bg-transparent hover:bg-white hover:text-primary-600 font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                {isTurkish ? 'CV İndir' : 'Download CV'}
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
