import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
