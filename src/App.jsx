/**
 * Declares URL → component mapping. Child routes under MainLayout share the same shell (navbar + sidebar).
 */
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { ProtocolPage } from './pages/ProtocolPage';
import { SEGMENTS as s } from './routes.js';
import PageNotFound from './pages/PageNotFound.jsx';
import { TestPage } from './pages/TestPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={`/${s.PROTOCOL}`} element={<MainLayout />}>
        <Route path={`:${s.PROTOCOL}Id`} element={<ProtocolPage />} />
      </Route>
      <Route path={s.ABOUT} element={<MainLayout showSideBar={false} />}>
        <Route index element={<AboutPage />} />
      </Route>
      <Route path={'/test'} element={<MainLayout showSideBar={false} />}>
        <Route index element={<TestPage />} />
      </Route>
      <Route path="*" element={<MainLayout showSideBar={false} />}>
        <Route path="*" element={<PageNotFound />} />
      </Route>
      {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
    </Routes>
  );
};

export default App;
