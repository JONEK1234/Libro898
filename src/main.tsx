import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatically unregister any previously registered Service Worker
// to prevent Google 401 iframe interception errors in AI Studio
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  }).catch(() => {});
}

createRoot(document.getElementById('root')!).render(<App />);
