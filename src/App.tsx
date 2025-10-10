import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

/**
 * Ana uygulama bileşeni
 * Router provider ile uygulama yapısını başlatır
 */
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;