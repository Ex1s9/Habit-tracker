import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './index.scss';


createRoot(document.getElementById('root')!).render(
    <div>
        <App />
    </div>,
);
