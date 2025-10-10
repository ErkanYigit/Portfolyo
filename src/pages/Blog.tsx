import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ExternalLink, 
  BookOpen,
  Code,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { blogPosts, externalBlogs, getAllTags } from '../data/blog';
import { formatDate, calculateReadTime } from '../lib/utils';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';

/**
 * Blog sayfası bileşeni
 * Blog yazıları, harici blog linkleri ve filtreleme içerir
 */
const Blog: React.FC = () => {
  const { t, isTurkish } = useI18n();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const allTags = getAllTags();

  // Filtrelenmiş blog yazıları
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

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
      <Section className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {isTurkish ? 'Blog' : 'Blog'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isTurkish ? 'Teknoloji ve geliştirme hakkında yazılarım' : 'My articles about technology and development'}
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Arama */}
                <Input
                  placeholder="Blog yazısı ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Tag Filtresi */}
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Tüm Etiketler</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Etiketler */}
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedTag('')}
                  variant={selectedTag === '' ? 'primary' : 'outline'}
                  size="sm"
                >
                  Tümü
                </Button>
                {allTags.slice(0, 8).map((tag) => (
                  <Button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    variant={selectedTag === tag ? 'primary' : 'outline'}
                    size="sm"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sonuç Sayısı */}
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">{filteredPosts.length}</span> yazı bulundu
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Blog Yazıları */}
      <Section>
        <Container>
          {filteredPosts.length === 0 ? (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Yazı bulunamadı
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Arama kriterlerinize uygun yazı bulunamadı. Filtreleri değiştirmeyi deneyin.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }} 
                variant="primary"
              >
                Filtreleri Temizle
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="space-y-8"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Sol taraf - İçerik */}
                      <div className="lg:col-span-3 space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime || calculateReadTime(post.content || post.excerpt)} {isTurkish ? 'dakika okuma' : 'min read'}</span>
                          </div>
                          {post.featured && (
                            <Badge variant="primary" size="sm">
                              Öne Çıkan
                            </Badge>
                          )}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              size="sm"
                              className="cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                              onClick={() => setSelectedTag(tag)}
                            >
                              <Tag className="mr-1 h-3 w-3" />
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4">
                          <Button
                            as={Link}
                            to={`/blog/${post.slug}`}
                            variant="outline"
                            size="sm"
                            className="group"
                          >
                            {isTurkish ? 'Devamını Oku' : 'Read More'}
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* Sağ taraf - Görsel (placeholder) */}
                      <div className="lg:col-span-1">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </Container>
      </Section>

      {/* Harici Blog Linkleri */}
      <Section background="gray">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {isTurkish ? 'Harici Blog Linkleri' : 'External Blog Links'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Diğer platformlardaki yazılarım ve paylaşımlarım
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {externalBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                        {blog.title.includes('Medium') && <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
                        {blog.title.includes('Dev.to') && <Code className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
                        {blog.title.includes('Hashnode') && <Globe className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {blog.description}
                      </p>
                      <Button
                        as="a"
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="w-full group"
                      >
                        Ziyaret Et
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default Blog;
