import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { personalInfo } from '../data/personal';
import { socialLinks } from '../data/socials';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

// Form validasyon şeması
const contactSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  subject: z.string().min(5, 'Konu en az 5 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır')
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * İletişim sayfası bileşeni
 * İletişim formu, kişisel bilgiler ve sosyal medya linkleri içerir
 */
const Contact: React.FC = () => {
  const { isTurkish } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  // Form gönderme fonksiyonu
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        'service_8rwpr3f', // EmailJS Service ID
        'template_lckpcb5', // EmailJS Template ID
        templateParams,
        'jVHmwRt84ZlUI2uT5' // EmailJS Public Key
      );
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      mail: Mail,
      globe: Globe
    };
    
    const IconComponent = iconMap[iconName] || Mail;
    return IconComponent;
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
              {isTurkish ? 'İletişim' : 'Contact'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isTurkish ? 'Benimle iletişime geçin' : 'Get in touch with me'}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* İletişim İçeriği */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sol Kolon - İletişim Bilgileri */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-900 mb-6">
                  {isTurkish ? 'İletişim Bilgileri' : 'Contact Information'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-900">{isTurkish ? 'E-posta' : 'Email'}</h3>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-900">{isTurkish ? 'Telefon' : 'Phone'}</h3>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-900">{isTurkish ? 'Konum' : 'Location'}</h3>
                      <p className="text-gray-600 dark:text-gray-700">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-900 mb-4">
                  {isTurkish ? 'Sosyal Medya' : 'Social Media'}
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {React.createElement(getIcon(social.icon), { className: "h-5 w-5" })}
                      </div>
                      <span className="text-gray-700 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-900 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sağ Kolon - İletişim Formu */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {isTurkish ? 'Mesaj Gönder' : 'Send Message'}
                </h2>

                {/* Form Durumu */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-800 dark:text-green-200">
                      {isTurkish ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!'}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <p className="text-red-800 dark:text-red-200">
                      {isTurkish ? 'Mesaj gönderilirken bir hata oluştu.' : 'An error occurred while sending your message.'}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={isTurkish ? 'Ad Soyad' : 'Full Name'}
                      {...register('name')}
                      error={errors.name?.message}
                      placeholder={isTurkish ? "Adınız ve soyadınız" : "Your name and surname"}
                    />
                    <Input
                      label={isTurkish ? 'E-posta' : 'Email'}
                      type="email"
                      {...register('email')}
                      error={errors.email?.message}
                      placeholder={isTurkish ? "ornek@email.com" : "example@email.com"}
                    />
                  </div>

                  <Input
                    label={isTurkish ? 'Konu' : 'Subject'}
                    {...register('subject')}
                    error={errors.subject?.message}
                    placeholder={isTurkish ? "Mesaj konusu" : "Message subject"}
                  />

                  <TextArea
                    label={isTurkish ? 'Mesaj' : 'Message'}
                    {...register('message')}
                    error={errors.message?.message}
                    placeholder={isTurkish ? "Mesajınızı buraya yazın..." : "Write your message here..."}
                    rows={6}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      isTurkish ? 'Gönderiliyor...' : 'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        {isTurkish ? 'Gönder' : 'Send'}
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>{isTurkish ? 'Not:' : 'Note:'}</strong> {isTurkish ? 'Mesajınız doğrudan e-posta kutuma iletilecektir. En kısa sürede size geri dönüş yapacağım.' : 'Your message will be sent directly to my inbox. I will get back to you as soon as possible.'}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
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
                as="a"
                href="mailto:erkan@example.com"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <Mail className="mr-2 h-5 w-5" />
                {isTurkish ? 'Hemen İletişime Geç' : 'Get In Touch Now'}
              </Button>
              <Button
                as="a"
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="border-white text-white dark:border-gray-700 dark:text-gray-900 hover:bg-white hover:text-primary-600"
              >
                {isTurkish ? 'CV İndir' : 'Download CV'}
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
