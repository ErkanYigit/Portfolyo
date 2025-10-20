import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ExternalLink, Github, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { useDebounce } from '../hooks/useDebounce';
import { projects, getProjectCategories } from '../data/projects';
import type { ProjectFilter } from '../types';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';

/**
 * Projeler sayfası bileşeni
 * Filtreleme, arama ve proje listesi içerir
 */
const Projects: React.FC = () => {
  const { isTurkish } = useI18n();
  const [filters, setFilters] = useState<ProjectFilter>({
    category: '',
    search: '',
    tech: ''
  });

  const debouncedSearch = useDebounce(filters.search, 300);
  const categories = getProjectCategories();

  // Filtrelenmiş projeler
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Kategori filtresi
      if (filters.category && project.category !== filters.category) {
        return false;
      }

      // Arama filtresi
      if (debouncedSearch) {
        const searchTerm = debouncedSearch.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(searchTerm);
        const matchesDescription = project.description.toLowerCase().includes(searchTerm);
        const matchesTech = project.tech.some(tech => 
          tech.toLowerCase().includes(searchTerm)
        );
        
        if (!matchesTitle && !matchesDescription && !matchesTech) {
          return false;
        }
      }

      // Teknoloji filtresi
      if (filters.tech) {
        if (!project.tech.some(tech => 
          tech.toLowerCase().includes(filters.tech!.toLowerCase())
        )) {
          return false;
        }
      }

      return true;
    });
  }, [filters.category, debouncedSearch, filters.tech]);

  // Filtre değiştirme fonksiyonları
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      category: category === prev.category ? '' : category
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      search: e.target.value
    }));
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      tech: e.target.value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      search: '',
      tech: ''
    });
  };

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
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {isTurkish ? 'Projelerim' : 'My Projects'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isTurkish ? 'Geliştirdiğim projeler ve teknolojiler' : 'Projects I developed and technologies I used'}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Filtreler */}
      <Section background="gray">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Arama ve Filtreler */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Arama */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder={isTurkish ? 'Proje ara...' : 'Search projects...'}
                    value={filters.search}
                    onChange={handleSearchChange}
                    className="pl-10"
                  />
                </div>

                {/* Teknoloji Arama */}
                <Input
                  placeholder={isTurkish ? 'Teknoloji ara (örn: React, Python)' : 'Search technologies (e.g., React, Python)'}
                  value={filters.tech}
                  onChange={handleTechChange}
                />

                {/* Filtreleri Temizle */}
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {isTurkish ? 'Filtreleri Temizle' : 'Clear Filters'}
                </Button>
              </div>

              {/* Kategori Filtreleri */}
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => handleCategoryChange('')}
                  variant={filters.category === '' ? 'primary' : 'outline'}
                  size="sm"
                >
                  {isTurkish ? 'Tümü' : 'All'}
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    onClick={() => handleCategoryChange(category.value)}
                    variant={filters.category === category.value ? 'primary' : 'outline'}
                    size="sm"
                  >
                    {isTurkish ? category.labelTr : category.labelEn}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sonuç Sayısı */}
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                {isTurkish ? (
                  <>
                    <span className="font-semibold">{filteredProjects.length}</span> proje bulundu
                  </>
                ) : (
                  <>
                    <span className="font-semibold">{filteredProjects.length}</span> projects found
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Proje Listesi */}
      <Section>
        <Container>
          {filteredProjects.length === 0 ? (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {isTurkish ? 'Proje bulunamadı' : 'No projects found'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {isTurkish ? 'Arama kriterlerinize uygun proje bulunamadı. Filtreleri değiştirmeyi deneyin.' : 'No projects match your criteria. Try adjusting the filters.'}
              </p>
              <Button onClick={clearFilters} variant="primary">
                {isTurkish ? 'Filtreleri Temizle' : 'Clear Filters'}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    initial: { 
                      opacity: 0, 
                      y: -60,
                      scale: 0.9
                    },
                    animate: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    }
                  }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  className="group"
                >
                  <Card className="h-full">
                    {/* Proje Görseli */}
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Proje Bilgileri */}
                    <div className="space-y-4">
                      {/* Başlık ve Kategori */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <Badge variant="primary">
                            {project.category === 'web' ? 'Web' :
                             project.category === 'mobile' ? 'Mobil' :
                             project.category === 'ai-ml' ? 'AI/ML' :
                             project.category === 'iot' ? 'IoT' : project.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Açıklama */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {isTurkish ? project.description : (project as any).descriptionEn || project.description}
                      </p>

                      {/* Teknolojiler */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" size="sm">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Proje Detayları */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          {project.year && (
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{project.year}</span>
                            </div>
                          )}
                          {project.role && (
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{project.role}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Aksiyon Butonları */}
                      <div className="flex space-x-2 pt-2">
                        <Button
                          as={Link}
                          to={`/projects/${project.slug}`}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          {isTurkish ? 'Detayları Gör' : 'View Details'}
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
                            <ExternalLink className="mr-1 h-4 w-4" />
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
                            size="sm"
                            className="px-3"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
