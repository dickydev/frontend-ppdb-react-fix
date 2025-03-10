import React, { useState, useEffect, useContext } from 'react'
import Dashboard from '../template/Dashboard';
import Tabel from '../template/Tabel';
import { FaEye, FaTrash, FaFilePen } from "react-icons/fa6";
import { get, deleteData } from '../utils/api'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import Notification from '../components/Notification/Notif';
import useTitle from '../utils/useTitle';
import { sortLatedData } from '../utils/sortLatedData';
import { AuthContext } from '../Context/AuthContext';
import DeleteConfirmation from '../components/Notification/DeleteConfirmation';
import DetailUser from './User/DetailUser';
import EditUser from './User/EditUser';

const User = () => {
    useTitle('Data User - Dashboard');
    const location = useLocation();
    const navigate = useNavigate();
    const [successMsg, setSuccessMsg] = useState(location.state?.successMsg);
    const [errorMsg, setErrorMsg] = useState(location.state?.errorMsg);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    
    const { state } = useContext(AuthContext);
    const userRole = state?.role;

    const isAdmin = userRole === 'admin';

    useEffect(() => {
        const timer = setTimeout(() => {
          setSuccessMsg('');
          setErrorMsg('');
        }, 2000);
        return () => clearTimeout(timer);
    }, [successMsg, errorMsg]);

    const handleOpenModal = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleOpenEditModal = (id) => {
        setSelectedId(id);
        setShowEditModal(true);
    };

    const handleDelete = DeleteConfirmation({
        onDelete: (id) => deleteData(`/user/delete/${id}`),
        itemName: 'data user',
        onSuccess: (id) => {
            setData(data.filter(item => item.user_id !== id));
            setSuccessMsg('Data user berhasil dihapus');
        },
        onError: (error) => {
            console.error("Error deleting user:", error);
            setErrorMsg('Gagal menghapus data user');
        }
    });

    const headTable = [
        {judul: "Nama Lengkap"},
        {judul: "Username"},
        {judul: "Role"},
        {judul: "Status"},
        {judul: "Terakhir Login"},
        {judul: "Tanggal Dibuat"},
        {judul: "Aksi"}
    ];

    const fetchData = async () => {
        try {
            const response = await get('/user');
            const sortedData = sortLatedData(response);
            setData(sortedData);
            setIsLoading(false);
        } catch (err) {
            setErrorMsg('Gagal Mengambil Data');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        const refreshData = setInterval(() => {
            fetchData();
        }, 10000);  

        return () => clearInterval(refreshData);
    }, []);

    const renderUserRow = (item, index) => (
        <tr className="bg-white border-b" key={item.user_id || index}>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {item.full_name}
          </th>
          <td className="px-6 py-4 text-gray-900">{item.username}</td>
          <td className="px-6 py-4 text-gray-900">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
                {item.role}
            </span>
          </td>
          <td className="px-6 py-4 text-gray-900">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-300 text-gray-800'
            }`}>
                {item.is_active ? 'Online' : 'Offline'}
            </span>
          </td>
          <td className="px-6 py-4 text-gray-900">
            {new Date(item.last_login).toLocaleString('id-ID')}
          </td>
          <td className="px-6 py-4 text-gray-900">
            {new Date(item.created_at).toLocaleDateString('id-ID')}
          </td>
          <td className='flex justify-center items-center py-6'>
            <div className='flex items-center justify-between gap-x-5'>
              <button onClick={() => handleOpenModal(item.user_id)} className="text-red-700 hover:text-red-500 cursor-pointer">
                <FaEye size={18} />
              </button>
              {isAdmin && (
                <>
                  <button onClick={() => handleOpenEditModal(item.user_id)} className="text-red-700 hover:text-red-500 cursor-pointer">
                    <FaFilePen size={18} />
                  </button>
    
                  <button
                    onClick={() => handleDelete(item.user_id)}
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
        <Dashboard title="User">
            <div className="flex flex-col justify-between w-full min-h-[700px] xl:min-h-[calc(100vh-130px)]">
                {successMsg && (
                    <Notification type="success" message={successMsg} onClose={() => setSuccessMsg('')} />
                )}

                {errorMsg && (
                    <Notification type="error" message={errorMsg} onClose={() => setErrorMsg('')} />
                )}
                
                <Tabel
                    title="Data User"
                    headers={headTable}
                    to="/add-user"
                    data={isLoading ? [] : data}
                    itemsPerPage={5}
                    renderRow={renderUserRow}
                >
                    {isLoading && (
                        <tr>
                        <td colSpan={headTable.length} className="text-center py-4">
                            Loading...
                        </td>
                        </tr>
                    )}
                </Tabel>

                {showModal && <DetailUser id={selectedId} onClose={() => setShowModal(false)} />}
                {showEditModal && <EditUser id={selectedId} onClose={() => setShowEditModal(false)} onUpdate={fetchData} />}
            
            </div>
        </Dashboard>
    )
}

export default User