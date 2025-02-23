import React from "react";
import WrapperDataModal from "../../components/WraperDataModal";
import { get } from "../../utils/api";

const DetailMedical = ({ id, onClose }) => {
  const [detail, setDetail] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await get(`/medical/detail/${id}`);
        setDetail(response);
        console.log(response)
      } catch (error) {
        console.log("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="m-2 md:m-0 bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[80vh] flex flex-col">
        {/* HEADER */}
        <div className="sticky top-0 bg-white p-6 border-b z-10 rounded-t-xl">
          <h2 className="text-3xl font-bold text-red-900">Detail Data Medis</h2>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto scroll-smooth flex-grow">
          {loading ? (
            <p className="text-gray-500 py-2">Memuat data...</p>
          ) : (
            detail && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 break-words">
                <WrapperDataModal title="Nama Calon Peserta Didik" value={detail.student_name} />
                <WrapperDataModal title="Nomor Peserta" value={detail.participant_card_number} />
                <WrapperDataModal title="Tempat Lahir" value={detail.place_of_birth} />
                <WrapperDataModal title="Tanggal Lahir" value={new Date(detail.date_of_birth).toLocaleDateString('id-ID')} />
                <WrapperDataModal title="Jenis Kelamin" value={detail.gender} />
                <WrapperDataModal title="Alamat" value={detail.address} />
                <WrapperDataModal title="Catatan Medis" value={detail.medical_notes || "Tidak Ada Informasi"} />
                <WrapperDataModal title="Alergi" value={detail.allergies || "Tidak Ada Informasi"} />
                <WrapperDataModal title="Kondisi Medis" value={detail.medical_conditions || "Tidak Ada Informasi"} />
                <WrapperDataModal title="Berat Badan (kg)" value={detail.weight} />
                <WrapperDataModal title="Tinggi Badan (cm)" value={detail.height} />
                <WrapperDataModal title="Golongan Darah" value={detail.blood_type} />
                <WrapperDataModal title="Riwayat Merokok" value={detail.parent_knowledge_smoking_history ? "Ya" : "Tidak"} />
                <WrapperDataModal title="Riwayat Tato / Tindik" value={detail.parent_knowledge_tattoo_piercing ? "Ya" : "Tidak"} />
              </div>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  <WrapperDataModal title="Catatan Pewawancara" value={detail.interviewer_notes || "Tidak Ada Informasi Tambahan"}/>
                  <WrapperDataModal title="Nama Pewawancara" value={detail.interviewer_name || "Tidak Ada Informasi Tambahan"}/>
                  <WrapperDataModal title="Tanggal Ditambahkan" value={new Date(detail.created_at).toLocaleDateString('id-ID')}/>
                </div>
            </div>    
            )
          )}
        </div>

        {/* FOOTER */}
        <div className="sticky bottom-0 bg-white p-4 border-t z-10 rounded-b-xl">
          <button onClick={onClose} className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailMedical;
