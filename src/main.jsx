import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEventListener('error', e =>
  console.error('GlobalError:', e.error || e.message)
);
window.addEventListener('unhandledrejection', e =>
  console.error('PromiseRejection:', e.reason)
);
console.log('Booting…');

const el = document.getElementById('root');
if (!el) throw new Error('Root not found'); 

