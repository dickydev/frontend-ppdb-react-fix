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
        console.log(combinedData);
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
        { e: 'Apakah anak memiliki penyakit berat bawaan dari lahir / kecil yang mengganggu dalam belaja', value: state.form1?.has_serious_illness == 1 ? 'Ada' : 'Tidak Ada' },
        { e: 'Pandangan orang tua terhadap karakter anak dirumah', value: state.form1?.parent_view_on_child || '-' },
    ];

    const dataB = [
        { e: 'Alasan memilih SMK Letris Indonesia 2', value: state.form2?.reason_choosing_school || '-' },
        { e: 'Pandangan tentang sekolah', value: state.form2?.parent_view_on_school || '-' },
        { e: 'Tahu SMK Letris Indonesia 2 dari mana', value: state.form2?.know_about_school || '-' },
    ];

    const dataC = [
        { e: 'Bagaimana Pendapat bapak/ibu tentang program sekolah', value: state.form2?.willing_to_communicate == 1 ? 'Siap' : 'Tidak' },
        { e: 'Apakah bapak ibu siap untuk berkomunikasi dengan wali kelas menghadiri rapat awal tahun mengambil raport hasil belajar siswa dan menghadiri panggilan sekolah dalam pendampingan belajar siswa selama menjadi siswa SMK negeri Indonesia 2', value: 'Iya' },
    ];

    const dataD = [
        { e: 'Jika Ananda selama bersekolah melanggar peraturan sekolah tidak mau belajar atau pun mengerjakan tugas sekolah lalu dilakukan pendampingan oleh sekolah namun masih tidak berubah menjadi lebih baik apakah menerima jika nantinya jika rapat pleno kenaikan kelas dinyatakan tinggal kelas atau dikembalikan ke orang tua', value: state.form2?.accept_consequences == 1 ? 'Bersedia' : 'Tidak Bersedia' },
    ];

    const dataE = [
        { e: 'Catatan Pewawancara', value: state.form2?.interviewer_notes || 'Tidak ada catatan khusus'},
        { e: 'Tanggal Wawancara', value: state.form2?.interview_date },
        { e: 'Pewawancara Orang Tua', value: state.form2?.interviewer_name },
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
                                        <p className='sm:w-[560px] w-[360px]'>{e.e}</p>
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