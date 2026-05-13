import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/shared/styles/theme.css';
import '@repo/styles/global.scss';
import '@/shared/styles/styles.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
