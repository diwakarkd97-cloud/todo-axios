import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'https://6ad1ee2d66cd28aed82d5d55.mockapi.io/test';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);