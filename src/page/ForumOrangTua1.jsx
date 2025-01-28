/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Forum from '../template/Forum';
import { Link, useNavigate } from 'react-router-dom';
import { useFormContext } from '../Context/FormContext';

const ForumOrangTua1 = () => {
    const navigate = useNavigate();
    const { state, updateFormData } = useFormContext(); // Mengambil state dan fungsi update dari context
    const [dataForm1, setDataForm1] = useState(state.form1 || {
        parent_name: '',
        parent_email: '',
        child_name: '',
        relationship_to_student: 'Orang Tua',
        additional_info: '',
        child_status: 'Anak Kandung',
        has_serious_illness: '0',
        parent_view_on_child: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm1({
            ...dataForm1,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData('form1', dataForm1); // Memperbarui data di context
        console.log('Data Form 1:', dataForm1);
        navigate('/forumOrtu2'); // Navigasi ke halaman berikutnya
    };

    useEffect(() => {
        setDataForm1(state.form1); // Mengatur dataForm1 dari state context
    }, [state.form1]);

    return (
        <div>
            <Forum title={'Forum Data Orang Tua'}>
                <div className='max-w-5xl px-4 mx-auto mt-5'>
                    <div className='flex items-center text-[12px] justify-center w-full font-medium sm:text-sm '>
                        <div className='flex items-center justify-center gap-2 px-4 py-2 border-2 rounded-full sm:py-2 border-maroon'>
                            <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-maroon'>1</span>
                            <span>Data Orang Tua & Anak</span>
                        </div>
                        <div className='border-2'></div>
                        <div className="flex w-[10px] sm:w-[40px] bg-gray-300 h-0.5" />
                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-full'>
                            <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-gray-300'>2</span>
                            <span>Tentang Sekolah</span>
                        </div>
                    </div>
                    <div className='w-full pb-4 mt-12 border-b-2'>
                        <p className='text-lg font-medium text-gray-600'> Bagian 1</p>
                        <h1 className='mt-1 text-xl font-semibold'>Data Orang Tua Siswa</h1>
                    </div>

                    <div className='mt-5'>
                        <form className='w-full text-gray-600 mt-7 ' onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="parent_name" className="block mb-2 font-medium text-md e">Nama Orang Tua</label>
                                <input
                                    type="text"
                                    id="parent_name"
                                    name="parent_name"
                                    value={dataForm1.parent_name}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Nama Orang Tua"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="parent_email" className="block mb-2 font-medium text-md e">Email orang Tua</label>
                                <input
                                    type="email"
                                    id="parent_email"
                                    name="parent_email"
                                    value={dataForm1.parent_email}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Email Orang Tua"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="child_name" className="block mb-2 font-medium text-md e">Nama Anak</label>
                                <input
                                    type="text"
                                    id="child_name"
                                    name="child_name"
                                    value={dataForm1.child_name}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Nama Anak"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="relationship_to_student" className="block mb-2 font-medium text-md">Hubungan Dengan Anak</label>
                                <select
                                    id="relationship_to_student"
                                    name="relationship_to_student"
                                    value={dataForm1.relationship_to_student}
                                    onChange={handleChange}
                                    className={`select-option border border-gray-300 h-12 ${dataForm1.relationship_to_student ? 'text-black' : 'text-gray-400'} text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon block w-full p-2.5`}
                                    aria-label="Pilih Hubungan Orang Tua Dengan Anak"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" className='text-gray-400' disabled>
                                        Pilih Hubungan Orang Tua Dengan Anak
                                    </option>
                                    <option value="Orang Tua" className='text-gray-500'>Orang Tua</option>
                                    <option value="Wali" className='text-gray-500'>Wali</option>
                                </select>
                            </div>
                                <div className="mb-4">
                                <label htmlFor="child_status" className="block mb-2 font-medium text-md e">Status Anak Dalam Keluarga</label>
                                <select
                                    id="child_status"
                                    name="child_status"
                                    value={dataForm1.child_status}
                                    onChange={handleChange}
                                    className={`select-option border border-gray-300 h-12 ${dataForm1.child_status ? 'text-black': 'text-gray-400'} text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon block w-full p-2.5`}
                                    aria-label="Pilih Status Anak Dalam Keluarga"
                                    defaultValue=""
                                    required
                                >
                                     <option value="" className='text-gray-400' disabled>
                                        Pilih Status Anak Dalam Keluarga
                                    </option>
                                    <option value="Anak Kandung" className='text-gray-500'>Anak Kandung</option>
                                    <option value="Anak Angkat" className='text-gray-500'>Anak Angkat</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="has_serious_illness" className="block mb-2 font-medium text-md e">Apakah anak Memiliki Riwayat Penyakit Berat</label>
                                <select
                                    id="has_serious_illness"
                                    name="has_serious_illness"
                                    value={dataForm1.has_serious_illness}
                                    onChange={handleChange}
                                    className={`select-option border border-gray-300 h-12 ${dataForm1.has_serious_illness ? 'text-black': 'text-gray-400'} text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon block w-full p-2.5`}
                                    aria-label=''
                                    defaultValue=""
                                    required
                                >
                                    <option value="" className='text-gray-400' disabled>
                                        Pilih Jawaban
                                    </option>
                                    <option value="1"  className='text-gray-500'>Ada</option>
                                    <option value="0"  className='text-gray-500'>Tidak Ada</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="parent_view_on_child" className="block mb-2 font-medium text-md e">Pandangan Orang Tua Terhadap Karakter Anak</label>
                                <input
                                    type="text"
                                    id="parent_view_on_child"
                                    name="parent_view_on_child"
                                    value={dataForm1.parent_view_on_child}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Pandangan Orang Tua Terhadap Karakter Anak"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="additional_info" className="block mb-2 font-medium text-md e">Informasi Tambahan Tentang Anak</label>
                                <input
                                    type="text"
                                    id="additional_info"
                                    name="additional_info"
                                    value={dataForm1.additional_info}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Jika Ada (Jika Tidak Ada, Harap Masukan [Tidak Ada])"
                                    required
                                />
                            </div>
                            <div className='flex justify-end w-full gap-3 mt-8'>
                                <Link to={'/ortu'} className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none ">
                                    Previous
                                </Link>
                                <button type="submit" className="px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none ">
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Forum>
        </div>
    );
};

export default ForumOrangTua1;