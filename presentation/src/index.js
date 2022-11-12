import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css'
import './styles.css'
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);