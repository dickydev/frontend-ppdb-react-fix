import React, { useState, useEffect } from "react";
import { get } from "../../utils/api";
import InfoItem from "../../components/DetailModal/InfoItem";
import InfoSection from "../../components/DetailModal/InfoSection";
import ModalContainer from "../../components/DetailModal/ModalContainer";
import LoadingSpinner from "../../components/DetailModal/LoadingSpinner";

const DetailSiswa = ({ id, onClose }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await get(`/students/detail/${id}`);
        setDetail(response);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <ModalContainer 
      title="Detail Data Siswa" 
      subtitle="Informasi lengkap data calon peserta didik" 
      onClose={onClose}
    >
      {loading ? (
        <LoadingSpinner />
      ) : detail && (
        <div className="space-y-8">
          <InfoSection title="Informasi Pribadi">
            <InfoItem label="Nama Calon Peserta Didik" value={detail.student_name} />
            <InfoItem label="Email Calon Peserta Didik" value={detail.student_email} />
            <InfoItem label="Nomor Telpon Calon Peserta Didik" value={detail.student_phone_number} />
            <InfoItem label="Tempat Lahir Calon Peserta Didik" value={detail.place_of_birth} />
            <InfoItem 
              label="Tanggal Lahir Calon Peserta Didik" 
              value={new Date(detail.date_of_birth).toLocaleDateString('id-ID', { 
                day: '2-digit',
                month: '2-digit', 
                year: 'numeric'
              }).split('/').join('-')} 
            />
            <InfoItem label="Gender Calon Peserta Didik" value={detail.gender == 'Male' ? "Laki-laki" : "Perempuan"} />
            <InfoItem label="Agama Calon Peserta Didik" value={detail.religion} />
            <InfoItem label="Kebangsaan Calon Peserta Didik" value={detail.nationality} />
          </InfoSection>

          <InfoSection title="Visi dan Misi">
            <InfoItem label="Visi Calon Peserta Didik" value={detail.student_vision} />
            <InfoItem label="Misi Calon Peserta Didik" value={detail.student_mission} />
          </InfoSection>

          <InfoSection title="Informasi Akademik">
            <InfoItem label="Prodi Calon Peserta Didik" value={detail.skill_competence} />
            <InfoItem label="Alasan Calon Peserta Didik Memilih Jurusan" value={detail.reason_choosing_competence} />
            <InfoItem label="Calon Peserta Didik Sudah Tahu Tentang Kompetensi Keahlian yang Dipilihnya" value={detail.knowledge_about_competence} />
            <InfoItem label="Calon Peserta Didik Memiliki Karya di Kompetensi yang Dipilihnya" value={detail.has_competence_work == 1 ? "Ada" : "Tidak Ada"} />
            <InfoItem label="Motivasi Calon Peserta Didik Memilih prodinya" value={detail.motivation_for_competence} />
            <InfoItem label="Harapa Calon Peserta Didik Memilih Prodinya" value={detail.expectations_for_competence} />
          </InfoSection>

          <InfoSection title="Informasi Sekolah">
            <InfoItem label="Alasan Calon Peserta Didik Memilih SMK Letris Indonesia 2" value={detail.reason_choosing_school} />
            <InfoItem label="Calon Peserta Didik Aktif dalam Eksrakulikurel atau OSIS di SMP" value={detail.active_in_extracurricular == 1 ? "Pernah" : "Tidak Pernah"} />
            <InfoItem label="Calon Peserta Didik Memiliki Prestasi Ketika di SMP/MTS" value={detail.achievements == null ? "Tidak Pernah" : detail?.achievements} />
            <InfoItem label="Calon Peserta Didik Pernah Melanggar Peraturan Ketika di SMP/MTS" value={detail.ever_broken_rules == 1 ? "Pernah" : "Tidak Pernah"} />
            <InfoItem label="Calon Peserta Didik Setuju Untuk Menaati Peraturan Yang Berlaku di SMK Letris" value={detail.agree_to_rules == 1 ? "Bersedia" : "Tidak Bersedia"} />
          </InfoSection>

          <InfoSection title="Informasi Wawancara">
            <InfoItem label="Catatan Pewawancara" value={detail.interviewer_notes || "Tidak Ada Informasi Tambahan"} />
            <InfoItem label="Nama Pewawancara" value={detail.interviewer_name} />
            <InfoItem label="Tanggal Ditambahkan" value={new Date(detail.interview_date).toLocaleDateString('id-ID')} />
          </InfoSection>
        </div>
      )}
    </ModalContainer>
  );
};

export default DetailSiswa;