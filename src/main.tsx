import { createRoot } from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <ErrorBoundary fallbackTitle="Urban Hero Training Center">
      <App />
    </ErrorBoundary>
  );
}
