import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Layout from '../components/layout/Layout';

/**
 * Uygulama rotaları
 * React Router ile sayfa yönlendirmeleri tanımlanır
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'projects/:slug',
        element: <ProjectDetail />
      },
      {
        path: 'about',
        element: <About />
      },

      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);
