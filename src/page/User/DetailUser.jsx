import React, { useState, useEffect } from "react";
import { get } from "../../utils/api";
import InfoItem from "../../components/DetailModal/InfoItem";
import InfoSection from "../../components/DetailModal/InfoSection";
import ModalContainer from "../../components/DetailModal/ModalContainer";
import LoadingSpinner from "../../components/DetailModal/LoadingSpinner";

const DetailUser = ({ id, onClose }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await get(`/user/detail/${id}`);
        setUserData(response);
      } catch (err) {
        setError("Gagal mengambil data user");
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <ModalContainer 
      title="Detail User" 
      subtitle="Informasi lengkap data pengguna" 
      onClose={onClose}
    >
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="text-center py-4 text-red-500">
          <p>{error}</p>
        </div>
      ) : userData && (
        <div className="space-y-8">
          <InfoSection title="Informasi Pribadi">
            <InfoItem label="Nama Lengkap" value={userData.full_name} />
            <InfoItem label="Username" value={userData.username} />
            <InfoItem 
              label="Role" 
              value={
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  userData.role === 'admin' ?  'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {userData.role}
                </span>
              } 
            />
            <InfoItem 
              label="Status" 
              value={
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  userData.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-300 text-gray-800'
                }`}>
                  {userData.is_active ? 'Online' : 'Offline'}
                </span>
              } 
            />
          </InfoSection>

          <InfoSection title="Informasi Akun">
            <InfoItem 
              label="Terakhir Login" 
              value={new Date(userData.last_login).toLocaleString('id-ID')} 
            />
            <InfoItem 
              label="Tanggal Dibuat" 
              value={new Date(userData.created_at).toLocaleDateString('id-ID')} 
            />
          </InfoSection>

          {userData.additional_info && (
            <InfoSection title="Informasi Tambahan">
              {Object.entries(userData.additional_info).map(([key, value]) => (
                <InfoItem 
                  key={key} 
                  label={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} 
                  value={value || "Tidak ada informasi"} 
                />
              ))}
            </InfoSection>
          )}
        </div>
      )}
    </ModalContainer>
  );
};

export default DetailUser;