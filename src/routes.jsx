// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Perhatikan perubahan di sini
import Dashboard from './pages/dashboard';
import Grafik from './pages/grafik';
import Tabel from './pages/tabel';
import Kamera from './pages/kamera';

const RoutesPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/grafik" element={<Grafik />} />
        <Route path="/tabel" element={<Tabel />} />
        <Route path="/kamera" element={<Kamera />} />
        {/* Tambahkan rute untuk halaman-halaman lainnya di sini */}
      </Routes>
    </Router>
  );
}

export default RoutesPage;
