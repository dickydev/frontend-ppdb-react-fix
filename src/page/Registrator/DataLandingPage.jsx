import React, { useState, useEffect, useContext } from 'react';
import Dashboard from '../../template/Dashboard';
import Tabel from '../../template/Tabel';
import useTitle from '../../utils/useTitle';
import {get, deleteData} from '../../utils/api';
import Notification from '../../components/Notification/Notif';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import {FaFilePen, FaTrash } from 'react-icons/fa6';
import EditRegistrationModal from './registrator/EditRegistration';

const DataLandingPage = () => {
  useTitle('Update Data Daftar Ulang - Dashboard');

  const location = useLocation();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(location.state?.successMsg);
  const [errorMsg, setErrorMsg] = useState(location.state?.errorMsg);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const {state} = useContext(AuthContext);
  const userRole = state?.role;

  const isAdmin = userRole === 'admin'; 
  const isRegistrator = userRole === 'registrator';

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg('');
      setErrorMsg('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [successMsg, errorMsg]);

  const fetchData = async () => {
    try {
      const response = await get('registration');
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg('Gagal mengambil data');
      setIsLoading(false);
    }
  }

  const handleOpenEditModal = (id) => {
    setSelectedId(id);
    setShowEditModal(true);
  }

  const headTable = [
    { judul: "Jurusan" },
    { judul: "Jumlah Registrasi" },
    { judul: "Daya Tampung" },
    { judul: "Update" },
    { judul: "Aksi" }
  ];

  useEffect(() => {
    fetchData();
    const refreshInterval = import.meta.env.VITE_REFRESH_INTERVAL || 10000;

    const refreshData = setInterval(() => {
      fetchData();
    }
    , refreshInterval);

    return () => clearInterval(refreshData);
  },[]);

  const renderParentRow = (item, index) => (
    <tr className="bg-white border-b" key={index}>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900'>{item.competence_name}</th>
      <td className='px-6 py-4 text-gray-900'>{item.current_registered}</td>
      <td className='px-6 py-4 text-gray-900'>{item.max_capacity}</td>
      <td className='px-6 py-4 text-gray-900'>{new Date(item.last_updated).toLocaleString('id-ID')}</td>
      <td className='px-6 py-4'>
         <button onClick={() => handleOpenEditModal(item.id)} className="text-red-700 hover:text-red-500 cursor-pointer">
              <FaFilePen size={18} />
          </button>
          {isAdmin && (
            <button onClick={() => handleDelete(item.id)} className="text-red-700 hover:text-red-500 cursor-pointer">
              <FaTrash size={18} />
            </button>
          )}
      </td>
    </tr>
  );

  return (
    <Dashboard>
      <div className="flex flex-col justify-between w-full min-h-[700px] xl:min-h-[calc(100vh-130px)]">
        {successMsg && (
          <Notification type="success" message={successMsg} onClose={() => setSuccessMsg('')} />
        )}

        {errorMsg && (
          <Notification type="error" message={errorMsg} onClose={() => setErrorMsg('')} />
        )}

        <Tabel 
          title="Data Registrasi Terbaru "
          headers={headTable} 
          data={data}
          itemsPerPage={10}
          renderRow={renderParentRow}
          to={isAdmin ? "/tambahRegistrasi" : undefined}
        >
          {isLoading && (
            <tr>
              <td colSpan={headTable.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
        </Tabel>

        {showEditModal && (
          <EditRegistrationModal
            id={selectedId}
            onClose={() => setShowEditModal(false)}
            onUpdate={fetchData}
          />
        )}
      </div>
    </Dashboard>
  );
}

export default DataLandingPage;
