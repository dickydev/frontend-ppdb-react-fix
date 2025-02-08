import React, { useState, useEffect } from "react";
import WrapperDataModal from "../../components/WraperDataModal";
import { get } from "../../utils/api";

const DetailOrtu = ({ id, onClose }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await get(`/parents/detail/${id}`);
        setDetail(response);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[80vh] flex flex-col">
        
        
        <div className="sticky top-0 bg-white p-6 border-b z-10 rounded-t-xl">
          <h2 className="text-3xl font-bold text-red-900">Detail Data Orang Tua</h2>
        </div>

        
        <div className="p-6 overflow-y-auto scroll-smooth flex-grow">
          {loading ? (
            <p className="text-gray-500 py-2">Memuat data...</p>
          ) : (
            detail && (
              <div>
                <div className="grid grid-cols-2 gap-2 break-words">
                  <WrapperDataModal title="Nama Ayah" value={detail.father_name}/>
                  <WrapperDataModal title="Nama Ibu" value={detail.mother_name}/>
                  <WrapperDataModal title="Pekerjaan Ayah" value={detail.father_job}/>
                  <WrapperDataModal title="Pekerjaan Ibu" value={detail.mother_job}/>
                  <WrapperDataModal title="Email Ayah" value={detail.father_email}/>
                  <WrapperDataModal title="Email Ibu" value={detail.mother_email}/>
                  <WrapperDataModal title="Nama Anak" value={detail.child_name}/>
                  <WrapperDataModal title="Kompetensi Keahlian" value={detail.major}/>
                  <WrapperDataModal title="Hubungan Dengan Anak" value={detail.relationship_to_student}/>
                  <WrapperDataModal title="Status Anak Dalam Keluarga" value={detail.child_status}/>
                  <WrapperDataModal title="Riwayat Penyakit Berat Pada Anak" value={detail.has_serious_illness == 1 ? "Ada" : "Tidak Ada"} />
                  <WrapperDataModal title="Pandangan Orang Tua Terhadap Anak" value={detail.parent_view_on_child} />
                  <WrapperDataModal title="Alasan Memilih SMK Letris Indonesia 2" value={detail.reason_choosing_school}/>
                  <WrapperDataModal title="Pandangan Orang Tua Terhadap SMK Letris Indonesia 2" value={detail.parent_view_on_school}/>
                  <WrapperDataModal title="Tahu SMK Letris Indonesia 2 Melalui" value={detail.know_about_school}/>
                  <WrapperDataModal title="Tanggapan Orang Tua Tentang Program Sekolah" value={detail.response_to_program}/>
                  <WrapperDataModal title="Berkomitmen Untuk Menjalin Komunikasi" value={detail.willing_to_communicate == 1 ? "Bersedia" : "Tidak"}/>
                  <WrapperDataModal title="Berkomitmen Untuk Menerima Konsekuensi" value={detail.accept_consequences == 1 ? "Bersedia" : "Tidak"}/>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  <WrapperDataModal title="Informasi Tambahan Tentang Anak" value={detail.additional_info && detail.additional_info !== "null" ? detail.additional_info : "Tidak Ada Informasi Tambahan"}/>
                  <WrapperDataModal title="Catatan Pewawancara" value={detail.interviewer_notes !=="null" ? detail.interviewer_notes : "Tidak Ada Catatan"}/>
                  <WrapperDataModal title="Tanggal Ditambahkan" value={new Date(detail.created_at).toLocaleDateString('id-ID')}/>
                </div>
              </div>
            )
          )}
        </div>

        {/* FOOTER (Tombol Tutup) */}
        <div className="sticky bottom-0 bg-white p-4 border-t z-10 rounded-b-xl">
          <button 
            onClick={onClose}
            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

export default DetailOrtu;
