import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { DataProvider } from './Component/Jsx_Files/CommonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
      <App />
    </DataProvider>
);