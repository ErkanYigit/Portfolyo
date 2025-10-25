import React from 'react';
import { Download, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { personalInfo, experience, education, certifications } from '../data/personal';
import { getSkillsByCategory } from '../data/skills';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

/**
 * Hakkımda sayfası bileşeni
 * Kişisel bilgiler, deneyim, eğitim, beceriler ve sertifikalar içerir
 */
const About: React.FC = () => {
  const { isTurkish } = useI18n();

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
      <Section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Sol taraf - Metin içeriği */}
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {isTurkish ? 'Hakkımda' : 'About Me'}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  {isTurkish ? personalInfo.bio : (personalInfo as any).bioEn || personalInfo.bio}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  as="a"
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  {isTurkish ? 'CV İndir' : 'Download CV'}
                </Button>
                <Button
                  as="a"
                  href={`mailto:${personalInfo.email}`}
                  variant="outline"
                  size="lg"
                >
                  {isTurkish ? 'İletişime Geç' : 'Get In Touch'}
                </Button>
              </motion.div>
            </div>

            {/* Sağ taraf - Avatar */}
            <motion.div
              variants={fadeInUp}
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
          </motion.div>
        </Container>
      </Section>

      {/* İstatistikler bölümü kaldırıldı */}

      {/* Deneyim */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                {isTurkish ? 'Deneyim' : 'Experience'}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-700 max-w-2xl mx-auto">
                {isTurkish ? 'Profesyonel kariyerimde edindiğim deneyimler ve projeler' : 'Experiences and projects from my professional career'}
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    initial: { 
                      opacity: 0, 
                      x: index % 2 === 0 ? -100 : 100,
                      y: 20 
                    },
                    animate: { 
                      opacity: 1, 
                      x: 0,
                      y: 0 
                    }
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  className="relative"
                >
                  <Card className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {isTurkish ? exp.title : ((exp as any).titleEn || exp.title)}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-200 mb-3">
                          <span className="font-medium">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                          <p className="text-gray-700 dark:text-gray-200 mb-4">
                            {isTurkish ? exp.description : (exp as any).descriptionEn || exp.description}
                          </p>
                        <ul className="space-y-2">
                          {(isTurkish ? exp.highlights : ((exp as any).highlightsEn || exp.highlights)).map((highlight: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-200 text-sm">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Eğitim */}
      <Section background="gray">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                {isTurkish ? 'Eğitim' : 'Education'}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                {isTurkish ? 'Akademik geçmişim ve sürekli öğrenme sürecim' : 'My academic background and continuous learning journey'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {isTurkish ? edu.degree : ((edu as any).degreeEn || edu.degree)}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {isTurkish ? edu.school : ((edu as any).schoolEn || edu.school)}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                          {edu.period}
                        </p>
                        {(edu as any).description && (
                          <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                            {(edu as any).description}
                          </p>
                        )}
                        {(edu as any).gpa && (
                          <Badge variant="primary" size="sm">
                            GPA: {(edu as any).gpa}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Beceriler */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                {isTurkish ? 'Yetenekler' : 'Skills'}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-700 max-w-2xl mx-auto">
                {isTurkish ? 'Sahip olduğum teknik beceriler ve uzmanlık alanlarım' : 'My technical skills and areas of expertise'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['frontend', 'backend', 'mobile', 'ai-ml', 'iot', 'tools'].map((category) => {
                const categorySkills = getSkillsByCategory(category as any);
                const categoryName = category === 'frontend' ? 'Frontend' :
                                   category === 'backend' ? 'Backend' :
                                   category === 'mobile' ? 'Mobil' :
                                   category === 'ai-ml' ? 'AI/ML' :
                                   category === 'iot' ? 'IoT' :
                                   category === 'tools' ? 'Araçlar' : category;

                return (
                  <motion.div
                    key={category}
                    variants={fadeInUp}
                  >
                    <Card className="h-full">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        {categoryName}
                      </h3>
                      <div className="space-y-3">
                        {categorySkills.slice(0, 6).map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                        {categorySkills.length > 6 && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            +{categorySkills.length - 6} daha fazla
                          </p>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Sertifikalar */}
      <Section background="gray">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {isTurkish ? 'Sertifikalar' : 'Certifications'}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                {isTurkish ? 'Aldığım sertifikalar ve profesyonel gelişim belgelerim' : 'My certifications and professional development credentials'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {isTurkish ? cert.name : ((cert as any).nameEn || cert.name)}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                          {cert.date}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                          ID: {cert.credentialId}
                        </p>
                        <Button
                          as="a"
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          {isTurkish ? 'Doğrula' : 'Verify'}
                        </Button>
                      </div>
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

export default About;
