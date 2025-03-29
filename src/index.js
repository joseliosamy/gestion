import { createRoot } from 'react-dom/client'; // Importe createRoot
import App from './App';
import './global.css';

// 1. Selecione o elemento raiz
const container = document.getElementById('root');

// 2. Crie a raiz do React 18
const root = createRoot(container);

// 3. Renderize o app
root.render(<App />);