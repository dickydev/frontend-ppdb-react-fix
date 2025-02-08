/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Dashboard from '../template/Dashboard';
import Tabel from '../template/Tabel';
import { FaAngleRight, FaAngleLeft, FaEye, FaFilePdf } from "react-icons/fa6";
import { get } from '../utils/api'; 
import {useLocation} from 'react-router-dom'; 
import Notification from '../components/Notification/Notif';
import DetailOrtu from './ForumOrangTua/DetailOrtu';
const Ortu = () => {
  const location = useLocation();
  const [successMsg, setSuccessMsg] = useState(location.state?.successMsg);
  const [errorMsg, setErrorMsg] = useState(location.state?.errorMsg);
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setSuccessMsg('');
      setErrorMsg('');
    }, 2000);
    return () => clearTimeout();
  }, [successMsg, errorMsg]);

  const headTable = [
    { judul: "Nama Ayah" },
    { judul: "Nama Ibu" },
    { judul: "Nama Anak" },
    { judul: "Hubungan dengan Anak" },
    { judul: "Info Tambahan" },
    { judul: "Tanggal Ditambahkan" },
    { judul: "Action" },
  ];

  const truncateText = (text, panjangTeksMaks) => {
    if (typeof text === 'string' && text.length > panjangTeksMaks) {
      return `${text.substring(0, panjangTeksMaks)}...`;
    }
    return text; // Kembalikan text apa adanya jika tidak perlu dipotong
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('/parents'); 
        setData(response);
        setIsLoading(false);
      } catch (err) {
        console.error('Meledak dikit lagi:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <Dashboard title="Orang Tua">
      <div className="flex flex-col justify-between w-full min-h-[700px] xl:min-h-[calc(100vh-130px)]">
      
    
      {successMsg && (
        <Notification type="success" message={successMsg} onClose={() => setSuccessMsg('')} />
      )}

      {errorMsg && (
        <Notification type="error" message={errorMsg} onClose={() => setErrorMsg('')} />
      )}
        <Tabel
          title="Orang Tua"
          headers={headTable}
          to="/forumOrtu1"
        >
          {isLoading ? (
            <tr>
              <td colSpan={headTable.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ?(
            <tr>
            <td colSpan={headTable.length} className="text-center py-4">
              Tidak Ada Data
            </td>
          </tr>
          ) : (
            data.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.father_name}
                </th>
                <td className="px-6 py-4 text-gray-900">{item.mother_name}</td>
                <td className="px-6 py-4 text-gray-900">{item.child_name}</td>
                <td className="px-6 py-4 text-gray-900">{item.relationship_to_student}</td>
                <td className="px-6 py-4 text-gray-900 truncate" 
                    title={item.additional_info ? item.additional_info : "Tidak Ada Informasi Tambahan"}
                >
                  {truncateText(item.additional_info || "Tidak Ada Informasi Tambahan", 50)}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {new Date(item.created_at).toLocaleDateString('id-ID')}
                </td>
                <td className='flex justify-center items-center py-6'>
                  <button className='flex items-center justify-between gap-x-5'>
                  <button onClick={() => handleOpenModal(item.id)} className="text-red-700 hover:text-red-500">
                    <FaEye size={18} />
                  </button>
                  <FaFilePdf>
                    <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                      Download PDF
                    </span>
                  </FaFilePdf>
                  </button>
                </td>
              </tr>
            ))
          )}
        </Tabel>

        <div className="w-full">
          <nav className="flex items-center justify-between gap-x-1" aria-label="Pagination">
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 group inline-flex justify-center items-center gap-x-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <FaAngleLeft className="group-hover:text-maroon" />
              <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                Previous
              </span>
            </button>
            <div className="flex items-center gap-x-1">
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                1
              </button>
            </div>
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] group py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                Next
              </span>
              <FaAngleRight className="group-hover:text-maroon" />
            </button>
          </nav>
        </div>
      </div>
      {showModal && <DetailOrtu id={selectedId} onClose={() => setShowModal(false)} />}
    </Dashboard>
  );
};

export default Ortu;
