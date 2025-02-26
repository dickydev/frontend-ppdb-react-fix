// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/middleware/ProtectedRoute'; 
import Home from './page/Home';
import Error from './page/Error';
import Siswa from './page/Siswa';
import Ortu from './page/Ortu';
import ForumSiswa from './page/ForumSiswa';
import ForumSiswa2 from './page/ForumSiswa2';
import ForumOrtu1 from './page/ForumOrangTua1';
import ForumOrtu2 from './page/ForumOrangTua2';
import Medical from './page/Medical';
import ForumMedical from './page/ForumMedical';
import Invoice from './page/Invoice';
import HasilSiswa from './page/Hasil/HasilSiswa';
import HasilMedical from './page/Hasil/HasilMedical';
import HasilOrtu from './page/Hasil/HasilOrtu';
import LoginPage from './page/authentication/authLoginCover';
import DasboardAdmin from './page/admin/DasboardAdmin';
import { FormProvider } from './Context/FormContext';
const App = () => {
    return ( 
        <FormProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <DasboardAdmin />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/siswa"
                    element={
                        <ProtectedRoute>
                            <Siswa />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/ortu"
                    element={
                        <ProtectedRoute>
                            <Ortu />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/forumSiswa"
                    element={
                        <ProtectedRoute>
                            <ForumSiswa />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/forumSiswa2"
                    element={
                        <ProtectedRoute>
                            <ForumSiswa2 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/forumOrtu1"
                    element={
                        <ProtectedRoute>
                            <ForumOrtu1 />
                        </ProtectedRoute>
                    }
                />
                  <Route
                    path="/forumOrtu2"
                    element={
                        <ProtectedRoute>
                            <ForumOrtu2 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/forumMedical"
                    element={
                        <ProtectedRoute>
                            <ForumMedical />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/medical"
                    element={
                        <ProtectedRoute>
                            <Medical />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/invoice"
                    element={
                        <ProtectedRoute>
                            <Invoice />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/hasilSiswa"
                    element={
                        <ProtectedRoute>
                            <HasilSiswa />
                        </ProtectedRoute>
                    }
                />
                <Route path="/hasilSiswa/:id" 
                element={
                    <ProtectedRoute>
                        <HasilSiswa />
                    </ProtectedRoute>
                } />
                <Route
                    path="/hasilMedical"
                    element={
                        <ProtectedRoute>
                            <HasilMedical />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/hasilMedical/:id"
                    element={
                        <ProtectedRoute>
                            <HasilMedical />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/hasilOrtu"
                    element={
                        <ProtectedRoute>
                            <HasilOrtu />
                        </ProtectedRoute>
                    }
                />
                <Route path="/hasilOrtu/:id" 
                element={
                    <ProtectedRoute>
                        <HasilOrtu />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>  
        </FormProvider>   
    );
};

export default App;
