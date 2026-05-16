/**
 * Declares URL → component mapping. Child routes under MainLayout share the same shell (navbar + sidebar).
 */
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage.jsx';
import { HomePage } from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { ProtocolPage } from './pages/ProtocolPage';
import { TestPage } from './pages/TestPage.jsx';
import { SEGMENTS as s } from './routes.js';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={s.WELCOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={s.HOW_IT_WORKS} element={<MainLayout />}>
        <Route index element={<HowItWorksPage />} />
      </Route>
      <Route path={`/${s.PROTOCOL}`} element={<MainLayout />}>
        <Route path={`:${s.PROTOCOL}Id`} element={<ProtocolPage />} />
      </Route>
      <Route path={s.ABOUT} element={<MainLayout showSideBar={false} />}>
        <Route index element={<AboutPage />} />
      </Route>
      <Route path={s.FAQ} element={<MainLayout showSideBar={false} />}>
        <Route index element={<FAQPage />} />
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
