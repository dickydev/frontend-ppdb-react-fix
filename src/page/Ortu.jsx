import React, { useState, useEffect, useContext } from 'react';
import Dashboard from '../template/Dashboard';
import Tabel from '../template/Tabel';
import { FaEye, FaFilePdf, FaTrash, FaFilePen } from "react-icons/fa6";
import { get} from '../utils/api'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import Notification from '../components/Notification/Notif';
import DetailOrtu from './ForumOrangTua/DetailOrtu';
import useTitle from '../utils/useTitle';
import { AuthContext } from '../Context/AuthContext';

const Ortu = () => {
  useTitle('Data Orang Tua - Dashboard');
  
  const location = useLocation();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(location.state?.successMsg);
  const [errorMsg, setErrorMsg] = useState(location.state?.errorMsg);
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { state } = useContext(AuthContext);
  const userRole = state?.role;

  const isAdmin = userRole === 'admin';

  const handleOpenModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleOpenDeleteModal = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await deleteData(`/parents/${selectedId}`);
      setData(data.filter(item => item.id !== selectedId));
      setShowDeleteModal(false);
      setSuccessMsg('Data orang tua berhasil dihapus');
    } catch (error) {
      setErrorMsg('Gagal menghapus data orang tua');
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg('');
      setErrorMsg('');
    }, 2000);
    return () => clearTimeout(timer);
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
    return text; 
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('/parents'); 
        setData(response);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setErrorMsg('Gagal memuat data orang tua');
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Custom render function for table rows
  const renderParentRow = (item, index) => (
    <tr className="bg-white border-b" key={item.id || index}>
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
        <div className='flex items-center justify-between gap-x-5'>
          <button onClick={() => handleOpenModal(item.id)} className="text-red-700 hover:text-red-500 cursor-pointer">
            <FaEye size={18} />
          </button>
          <button
            onClick={() => navigate(`/hasilOrtu/${item.id}`, { state: { childName: item.child_name } })}
            className="text-red-700 hover:text-red-500 cursor-pointer"
          >
            <FaFilePdf size={18} />
          </button>
          {isAdmin && (
            <>
              <button
                onClick={() => navigate(`/editOrtu/${item.id}`)}
                className="text-red-700 hover:text-red-500 cursor-pointer"
              >
                <FaFilePen size={20}/>
              </button>
              <button
                onClick={() => handleOpenDeleteModal(item.id)}
                className="text-red-700 hover:text-red-500 cursor-pointer"
              >
                <FaTrash size={18}/>
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

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
          data={isLoading ? [] : data}
          itemsPerPage={5}
          renderRow={renderParentRow}
        >
          {isLoading && (
            <tr>
              <td colSpan={headTable.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
        </Tabel>

        {showModal && <DetailOrtu id={selectedId} onClose={() => setShowModal(false)} />}
        
        {showDeleteModal && (
          <ConfirmationModal
            title="Konfirmasi Hapus"
            message="Apakah Anda yakin ingin menghapus data orang tua ini?"
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    </Dashboard>
  );
};

export default Ortu;