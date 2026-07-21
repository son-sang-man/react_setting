import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@repo/styles/tokens/index.css';
import '@repo/styles/global.scss';
import '@/shared/styles/styles.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
