import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    level: 95,
    category: 'frontend',
    icon: 'react'
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
    icon: 'typescript'
  },
  {
    name: 'Next.js',
    level: 85,
    category: 'frontend',
    icon: 'nextjs'
  },
  {
    name: 'Vue.js',
    level: 80,
    category: 'frontend',
    icon: 'vue'
  },
  {
    name: 'TailwindCSS',
    level: 95,
    category: 'frontend',
    icon: 'tailwind'
  },
  {
    name: 'Framer Motion',
    level: 85,
    category: 'frontend',
    icon: 'framer'
  },
  
  // Backend
  {
    name: 'Node.js',
    level: 90,
    category: 'backend',
    icon: 'nodejs'
  },
  {
    name: 'Python',
    level: 85,
    category: 'backend',
    icon: 'python'
  },
  {
    name: 'FastAPI',
    level: 80,
    category: 'backend',
    icon: 'fastapi'
  },
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'backend',
    icon: 'postgresql'
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'backend',
    icon: 'mongodb'
  },
  {
    name: 'Redis',
    level: 75,
    category: 'backend',
    icon: 'redis'
  },
  
  // Mobile
  {
    name: 'React Native',
    level: 90,
    category: 'mobile',
    icon: 'react'
  },
  {
    name: 'Flutter',
    level: 85,
    category: 'mobile',
    icon: 'flutter'
  },
  {
    name: 'Expo',
    level: 80,
    category: 'mobile',
    icon: 'expo'
  },
  {
    name: 'iOS Development',
    level: 70,
    category: 'mobile',
    icon: 'ios'
  },
  {
    name: 'Android Development',
    level: 75,
    category: 'mobile',
    icon: 'android'
  },
  
  // AI/ML
  {
    name: 'TensorFlow',
    level: 80,
    category: 'ai-ml',
    icon: 'tensorflow'
  },
  {
    name: 'PyTorch',
    level: 75,
    category: 'ai-ml',
    icon: 'pytorch'
  },
  {
    name: 'OpenAI API',
    level: 85,
    category: 'ai-ml',
    icon: 'openai'
  },
  {
    name: 'LangChain',
    level: 80,
    category: 'ai-ml',
    icon: 'langchain'
  },
  {
    name: 'Computer Vision',
    level: 75,
    category: 'ai-ml',
    icon: 'vision'
  },
  
  // IoT
  {
    name: 'Arduino',
    level: 85,
    category: 'iot',
    icon: 'arduino'
  },
  {
    name: 'ESP32',
    level: 90,
    category: 'iot',
    icon: 'esp32'
  },
  {
    name: 'Raspberry Pi',
    level: 80,
    category: 'iot',
    icon: 'raspberry'
  },
  {
    name: 'MQTT',
    level: 85,
    category: 'iot',
    icon: 'mqtt'
  },
  {
    name: 'WebSocket',
    level: 90,
    category: 'iot',
    icon: 'websocket'
  },
  
  // Tools
  {
    name: 'Git',
    level: 95,
    category: 'tools',
    icon: 'git'
  },
  {
    name: 'Docker',
    level: 85,
    category: 'tools',
    icon: 'docker'
  },
  {
    name: 'AWS',
    level: 80,
    category: 'tools',
    icon: 'aws'
  },
  {
    name: 'Vercel',
    level: 90,
    category: 'tools',
    icon: 'vercel'
  },
  {
    name: 'Figma',
    level: 85,
    category: 'tools',
    icon: 'figma'
  }
];

// Kategori bazlı beceri grupları
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};

export const getSkillCategories = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];
  return categories.map(category => ({
    value: category,
    label: category === 'frontend' ? 'Frontend' :
           category === 'backend' ? 'Backend' :
           category === 'mobile' ? 'Mobil' :
           category === 'ai-ml' ? 'AI/ML' :
           category === 'iot' ? 'IoT' :
           category === 'tools' ? 'Araçlar' : category
  }));
};
