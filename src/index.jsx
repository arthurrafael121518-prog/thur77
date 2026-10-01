import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import Contato from './pages/contato';
import Escrever from './escrever/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Escrever />
  </React.StrictMode>
);


