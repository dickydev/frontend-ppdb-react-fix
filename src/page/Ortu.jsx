<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Dashboard from '../template/Dashboard';
import Tabel from '../template/Tabel';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { get } from '../utils/api'; 
import {useLocation} from 'react-router-dom'; 
import Notification from '../components/Notification/Notif';

const Ortu = () => {
  const location = useLocation();
  const [successMsg, setSuccessMsg] = useState(location.state?.successMsg);
  const [errorMsg, setErrorMsg] = useState(location.state?.errorMsg);
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  const handleCloseError = () => {
    errorMsg("");
    successMsg(""); 
  };

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setSuccessMsg('');
      setErrorMsg('');
    }, 2000);
    return () => clearTimeout();
  }, [successMsg, errorMsg]);

  const headTable = [
    { judul: "Nama" },
    { judul: "Email" },
    { judul: "Nama Anak" },
    { judul: "Hubungan dengan Anak" },
    { judul: "Info Tambahan" },
    { judul: "Tanggal Ditambahkan" },
  ];

  const truncateText = (text, panjangTeksMaks) => {
    return text.length > panjangTeksMaks ? `${text.substring(0, panjangTeksMaks)}...` : text;
  }
  
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
          ) : (
            data.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.parent_name}
                </th>
                <td className="px-6 py-4 text-gray-900">{item.parent_email}</td>
                <td className="px-6 py-4 text-gray-900">{item.child_name}</td>
                <td className="px-6 py-4 text-gray-900">{item.relationship_to_student}</td>
                <td className="px-6 py-4 text-gray-900 truncate" title={item.additional_info}>{truncateText(item.additional_info, 50)}</td>
                <td className="px-6 py-4 text-gray-900">
                  {new Date(item.created_at).toLocaleDateString('id-ID')}
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
    </Dashboard>
  );
};

export default Ortu;
=======
import React from 'react'
import Dashboard from '../template/Dashboard'
import Tabel from '../template/Tabel'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";

const Ortu = () => {
  const headTable = [
    { judul: "Nama" },
    { judul: "Kelas" },
    { judul: "Jurusan" },
    { judul: "Nomer HP" },
    { judul: "NIS" },
    { judul: "Orang Tua" },
    { judul: "Asal Sekolah" },
    { judul: "status" },

]
  return (
    <Dashboard title={'Orang Tua'}>

    <div className='flex flex-col justify-between w-full  min-h-[700px] xl:min-h-[calc(100vh-130px)]'>


        <Tabel title='Orang Tua
        ' headers={headTable} handle={()=>setModalSiswa(true)} to='/forumOrtu'>
            {
                [1, 2, 3, 4, 5, 6].map((e, i) => (

                    <tr className="bg-white border-b " key={i}>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >

                            Apip Kece
                        </th>
                        <td className="px-6 py-4 text-gray-900">
                            XII
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                            Multimedia
                        </td>

                        <td className="px-6 py-4 text-gray-900">
                            0895375874137
                        </td>

                        <td className="px-6 py-4 text-gray-900">
                            032112333
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                            Joseph
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                            SMP 22 Tangsel
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                            Active
                        </td>




                    </tr>
                ))
            }
        </Tabel>

        <div className='w-full '>
            <>
                {/* Pagination */}
                <nav
                    className="flex items-center justify-between gap-x-1"
                    aria-label="Pagination"
                >
                    <button
                        type="button"
                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 group inline-flex jusify-center items-center gap-x-2 text-sm  text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                        aria-label="Previous"
                    >
                      <FaAngleLeft className='group-hover:text-maroon'/>
                        <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                            Previous
                        </span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <button
                            type="button"
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            1
                        </button>
                        <button
                            type="button"
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 border-t-2 border-maroon hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            2
                        </button>
                        <button
                            type="button"
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            3
                        </button>
                        <button
                            type="button"
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            4
                        </button>
                    </div>
                    <button
                        type="button"
                        className="min-h-[38px] min-w-[38px] group py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm  text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                    >
                        <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                            Next
                        </span>
                           <FaAngleRight className='group-hover:text-maroon'/>
                      
                    </button>
                </nav>


            </>

        </div>
    </div>
</Dashboard>
  )
}

export default Ortu
>>>>>>> second/development
