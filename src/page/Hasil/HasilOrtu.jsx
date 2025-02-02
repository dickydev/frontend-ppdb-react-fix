/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HasilForm from '../../template/HasilForm';
import { useFormContext } from '../../Context/FormContext';
import { post } from '../../utils/api';
import { useNavigate, useLocation } from 'react-router-dom';

const HasilOrtu = () => {
    const { state, resetFormData } = useFormContext();
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        const combinedData = {
            ...state.form1,
            ...state.form2,
        };

        try {
            const response = await post('/parents/submit', combinedData);
            if (response?.status === 201) {
                setSuccessMsg('Data berhasil dikirim!');
                resetFormData();
                setTimeout(() => setErrorMsg(''), 3000);
                navigate('/ortu', { state: { successMsg: 'Data berhasil dikirim!' } });
            } else {
                setErrorMsg('Terjadi kesalahan saat mengirim data.');
                setTimeout(() => setErrorMsg(''), 3000);
            }
        } catch (error) {
            setErrorMsg('Terjadi kesalahan saat mengirim data.');
            setTimeout(() => setErrorMsg(''), 3000);
        }
    };

    const dataOrang = [
        { title: 'Nama Ayah', value: state.form1?.father_name || '-' },
        { title: 'Nama Ibu', value: state.form1?.mother_name || '-' },
        { title: 'Nama Siswa', value: state.form1?.child_name || '-' },
        { title: 'Kompetensi Keahlian', value: state.form1?.major || '-' },
        { title: 'Pekerjaan Ayah', value: state.form1?.father_job || '-' },
        { title: 'Pekerjaan Ibu', value: state.form1?.mother_job || '-' },
    ];

    const dataA = [
        { e: 'Status anak dalam Keluarga', value: state.form1?.child_status || '-' },
        { e: 'Penyakit berat sejak kecil', value: state.form1?.has_serious_illness == 1 ? 'Ada' : 'Tidak Ada' },
        { e: 'Pandangan orang tua terhadap anak', value: state.form1?.parent_view_on_child || '-' },
    ];

    const dataB = [
        { e: 'Alasan memilih sekolah', value: state.form2?.reason_choosing_school || '-' },
        { e: 'Pandangan tentang sekolah', value: state.form2?.parent_view_on_school || '-' },
    ];

    const dataC = [
        { e: 'Pendapat tentang program sekolah', value: state.form2?.response_to_program || '-' },
        { e: 'Komunikasi dengan wali kelas', value: state.form2?.willing_to_communicate == 1 ? 'Siap' : 'Tidak' },
    ];

    const dataD = [
        { e: 'Konsekuensi jika anak melanggar aturan sekolah', value: state.form2?.accept_consequences == 1 ? 'Bersedia' : 'Tidak Bersedia' },
    ];

    const dataE = [
        { e: 'Komitmen pembayaran sekolah', value: 'Iya' },
        { e: 'Daftar Ulang, SPP, dan Kegiatan sekolah', value: 'Iya' },
        { e: 'Catatan Pewawancara', value: 'Oke' },
        { e: 'Tanggal Wawancara', value: '12 September 2024' },
        { e: 'Pewawancara Orang Tua', value: 'Hadir Solichin' },
    ];

    return (
        <div>
            <HasilForm 
                data1={dataOrang} 
                title={"PARENTS' OBSERVATION RESULTS"} 
                judul='ORANG TUA' 
                to='/ortu'
                errorMsg={errorMsg}
                successMsg={successMsg}
                onSubmit={handleSubmit}
            >
                <div className='px-0 mt-4 text-gray-800'>
                    {[{ title: 'A. Pengetahuan Orang Tua Tentang Anak', data: dataA },
                      { title: 'B. Motivasi Orang Tua Memilih SMK Letris Indonesia 2', data: dataB },
                      { title: 'C. Komitmen Orang Tua Terhadap Program Sekolah', data: dataC },
                      { title: 'D. Konsekuensi Jika Melanggar Aturan', data: dataD },
                      { title: 'E. Data Tambahan', data: dataE }].map((section, index) => (
                        <div key={index}>
                            <h1 className='mt-5 font-medium text-md sm:text-xl'>{section.title}</h1>
                            <ul className='mt-2 space-y-2 sm:ms-6'>
                                {section.data.map((e, i) => (
                                    <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                        <p className='sm:w-[460px] w-[360px]'>{e.e}</p>
                                        <div className='flex gap-3 ms-2 sm:w-[400px] w-[310px]'>
                                            : <p className='text-wrap'>{e.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </HasilForm>
        </div>
    );
};

export default HasilOrtu;