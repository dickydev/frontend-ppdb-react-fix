// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute, AdminRoute } from './utils/middleware/ProtectedRoute';
import Home from './page/Home';
// eslint-disable-next-line no-unused-vars
import Error from './page/Error';
import Siswa from './page/Siswa';
import Ortu from './page/Ortu';
import ForumSiswa from './page/ForumSiswa/ForumSiswa';
import ForumSiswa2 from './page/ForumSiswa/ForumSiswa2';
import ForumOrtu1 from './page/ForumOrangTua/ForumOrangTua1';
import ForumOrtu2 from './page/ForumOrangTua/ForumOrangTua2';
import Medical from './page/Medical';
import ForumMedical from './page/ForumMedical';
import Invoice from './page/Invoice';
import HasilSiswa from './page/Hasil/HasilSiswa';
import HasilMedical from './page/Hasil/HasilMedical';
import HasilOrtu from './page/Hasil/HasilOrtu';
import LoginPage from './page/authentication/authLoginCover';
import DasboardAdmin from './page/admin/DasboardAdmin';
import { FormProvider } from './Context/FormContext';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<LoginPage />} />
            
            {/* Protected routes for any authenticated user */}
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/siswa" element={<Siswa />} />
              <Route path="/ortu" element={<Ortu />} />
              <Route path="/form-siswa-1" element={<ForumSiswa />} />
              <Route path="/form-siswa-2" element={<ForumSiswa2 />} />
              <Route path="/form-orang-tua-1" element={<ForumOrtu1 />} />
              <Route path="//form-orang-tua-2" element={<ForumOrtu2 />} />
              <Route path="/forumMedical" element={<ForumMedical />} />
              <Route path="/medical" element={<Medical />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/hasilSiswa" element={<HasilSiswa />} />
              <Route path="/hasilSiswa/:id" element={<HasilSiswa />} />
              <Route path="/hasilMedical" element={<HasilMedical />} />
              <Route path="/hasilMedical/:id" element={<HasilMedical />} />
              <Route path="/hasilOrtu" element={<HasilOrtu />} />
              <Route path="/hasilOrtu/:id" element={<HasilOrtu />} />
            </Route>
            
            {/* Admin-only routes */}
            <Route element={<AdminRoute />}>
              <Route path="/dashboard" element={<DasboardAdmin />} />
              {/* Other admin routes */}
            </Route>
            
            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </AuthProvider>
  );
};

export default App;