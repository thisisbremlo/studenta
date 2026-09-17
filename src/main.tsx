import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LocaleProvider } from './i18n/locale';
import { LegalPage } from './pages/LegalPage.tsx';
import { MacAppsPage } from './pages/MacAppsPage.tsx';
import './index.css';

function getRoute() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

function Root() {
  const route = getRoute();
  if (route === '/legal-notice' || route === '/impressum') return <LegalPage kind="imprint" />;
  if (route === '/privacy-policy' || route === '/datenschutz') return <LegalPage kind="privacy" />;
  if (route === '/mac-apps' || route === '/macapps') return <MacAppsPage />;
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <Root />
    </LocaleProvider>
  </StrictMode>
);
