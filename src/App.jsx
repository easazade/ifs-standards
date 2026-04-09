/**
 * Declares URL → component mapping. Child routes under MainLayout share the same shell (navbar + sidebar).
 */
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { ProtocolPage } from './pages/ProtocolPage';
import { SEGMENTS as s } from './routes.js';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout showSideBar={false} />}>
        <Route index element={<HomePage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path={`/${s.PROTOCOL}`} element={<MainLayout />}>
        <Route path={`:${s.PROTOCOL}Id`} element={<ProtocolPage />} />
      </Route>
      <Route path={s.ABOUT} element={<MainLayout showSideBar={false} />}>
        <Route index element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
