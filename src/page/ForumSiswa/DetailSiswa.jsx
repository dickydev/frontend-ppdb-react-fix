import React, { useState, useEffect } from "react";
import WrapperDataModal from "../../components/WraperDataModal";
import { get } from "../../utils/api";

const DetailSiswa = ({ id, onClose }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await get(`/students/detail/${id}`);
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
      <div className=" m-2 md:m-0 bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[80vh] flex flex-col">
        <div className="sticky top-0 bg-white p-6 border-b z-10 rounded-t-xl">
          <h2 className="text-3xl font-bold text-red-900">Detail Data Siswa</h2>
        </div>

        
        <div className="p-6 overflow-y-auto scroll-smooth flex-grow">
          {loading ? (
            <p className="text-gray-500 py-2">Memuat data...</p>
          ) : (
            detail && (
              <div>
                <div className="mt-2 grid grid-cols-1 gap-2">
                    <WrapperDataModal title="Nama Calon Peserta Didik" value={detail.student_name}/>
                    <WrapperDataModal title="Visi Calon Peserta Didik" value={detail.student_vision}/>
                    <WrapperDataModal title="Misi Calon Peserta Didik" value={detail.student_mission}/>
                    <WrapperDataModal title="Email Calon Peserta Didik" value={detail.student_email}/>
                    <WrapperDataModal title="Nomor Telpon Calon Peserta Didik" value={detail.student_phone_number}/>
                    <WrapperDataModal title="Tempat Lahir Calon Peserta Didik" value={detail.place_of_birth}/>
                    <WrapperDataModal 
                        title="Tanggal Lahir Calon Peserta Didik" 
                        value={new Date(detail.date_of_birth).toLocaleDateString('id-ID', { 
                          day: '2-digit' ,
                          month: '2-digit', 
                          year: 'numeric'
                        }).split('/').join('-')} 
                      />
                    <WrapperDataModal title="Gender Calon Peserta Didik" value={detail.gender == 'Male' ? "Laki-laki" : "Perempuan"}/>
                    <WrapperDataModal title="Agama Calon Peserta Didik" value={detail.religion}/>
                    <WrapperDataModal title="Kebangsaan Calon Peserta Didik" value={detail.nationality}/>
                    <WrapperDataModal title="Prodi Calon Peserta Didik" value={detail.skill_competence}/>
                    <WrapperDataModal title="Alasan Calon Peserta Didik Memilih Jurusan" value={detail.reason_choosing_competence}/>
                    <WrapperDataModal title="Calon Peserta Didik Sudah Tahu Tentang Kompetensi Keahlian yang Dipilihnya" value={detail.knowledge_about_competence}/>
                    <WrapperDataModal title="Calon Peserta Didik Memiliki Karya di Kompetensi yang Dipilihnya" value={detail.has_competence_work == 1 ? "Ada" : "Tidak Ada"}/>
                    <WrapperDataModal title="Motivasi Calon Peserta Didik Memilih prodinya" value={detail.motivation_for_competence}/>
                    <WrapperDataModal title="Harapa Calon Peserta Didik Memilih Prodinya" value={detail.expectations_for_competence}/>
                    <WrapperDataModal title="Alasan Calon Peserta Didik Memilih SMK Letris Indonesia 2" value={detail.reason_choosing_school}/>
                    <WrapperDataModal title="Calon Peserta Didik Aktif dalam Eksrakulikurel atau OSIS di SMP" value={detail.active_in_extracurricular == 1 ? "Pernah" : "Tidak Pernah"}/>
                    <WrapperDataModal title="Calon Peserta Didik Memiliki Prestasi Ketika di SMP/MTS" value={detail.achievements == null ? "Tidak Pernah" : detail?.achievements}/>
                    <WrapperDataModal title="Calon Peserta Didik Pernah Melanggar Peraturan Ketika di SMP/MTS" value={detail.ever_broken_rules == 1 ? "Pernah" : "Tidak Pernah"}/>
                    <WrapperDataModal title="Calon Peserta Didik Setuju Untuk Menaati Peraturan Yang Berlaku di SMK Letris" value={detail.agree_to_rules == 1 ? "Bersedia" : "Tidak Bersedia"}/>
                    <WrapperDataModal title="Catatan Pewawancara" value={detail.interviewer_notes || "Tidak Ada Informasi Tambahan"}/>
                    <WrapperDataModal title="Nama Pewawancara" value={detail.interviewer_name}/>
                    <WrapperDataModal title="Tanggal Ditambahkan" value={new Date(detail.interview_date).toLocaleDateString('id-ID')}/>
                
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

export default DetailSiswa;
