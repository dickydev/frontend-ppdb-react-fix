<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import Home from './page/Home'
import { FaRegFileAlt, FaRegFileArchive } from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaCar, FaRepeat } from "react-icons/fa6";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './page/Error';
import Tabel from './template/Tabel';
import Siswa from './page/Siswa';
import Ortu from './page/Ortu';
import ForumSiswa from './page/ForumSiswa';
import ForumOrtu from './page/ForumOrtu';
import ForumSiswa2 from './page/ForumSiswa2';
>>>>>>> second/development
import Medical from './page/Medical';
import ForumMedical from './page/ForumMedical';
import Invoice from './page/Invoice';
import HasilSiswa from './page/Hasil/HasilSiswa';
import HasilMedical from './page/Hasil/HasilMedical';
import HasilOrtu from './page/Hasil/HasilOrtu';
<<<<<<< HEAD
import LoginPage from './page/authentication/authLoginCover';
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
                <Route
                    path="/hasilMedical"
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
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>  
        </FormProvider>   
    );
};

export default App;
=======

const App = ({title}) => {
  const data = [
    {
        name: 'Home',
        ic: <FaHouse />,
        to: '/home'
    },
    {
        name: 'Pengetahuan',
        ic: <FaCar />,
        to: '/kendaraan'
    },
    {
        name: 'Orang Tua',
        ic: <FaRegCircleUser />,
        to: '/user'
    },
    {
        name: 'Siswa',
        ic: <FaRegFileArchive />,
        to: '/peminjaman'
    },
    {
        name: 'Staf / Guru',
        ic: <FaRegFileAlt />,
        to: '/pengembalian'
    },

]

function tanggal() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    return currentDate

}
const [showProfile, setShowProfile] = useState(false)
const [showSide, setShowSide] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/siswa" element={<Siswa />} />
      <Route path="/ortu" element={<Ortu />} />
      <Route path="/forumSiswa" element={<ForumSiswa />} />
      <Route path="/forumSiswa2" element={<ForumSiswa2 />} />
      <Route path="/forumOrtu" element={<ForumOrtu/>} />
      <Route path="/forumMedical" element={<ForumMedical/>} />
      <Route path="/medical" element={<Medical/>} />
      <Route path="/invoice" element={<Invoice/>} />
      <Route path="/hasilSiswa" element={<HasilSiswa/>} />
      <Route path="/hasilMedical" element={<HasilMedical/>} />
      <Route path="/hasilOrtu" element={<HasilOrtu/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
>>>>>>> second/development
