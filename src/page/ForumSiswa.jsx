<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Forum from '../template/Forum';
import { Link, useNavigate } from 'react-router-dom';
import { useFormContext } from '../Context/FormContext';

const ForumSiswa = () => {

    const navigate = useNavigate();
    const {state, updateFormData} = useFormContext();
    const [dataForm1Siswa, setDataForm1Siswa] = useState(state.from1Siswa || {
        student_name : '',
        student_email: '',
        student_phone_number:'',
        place_of_birth: '',
        date_of_birth: '',
        gender: '',
        religion: '',
        nationality: ''
    });

    console.log(dataForm1Siswa);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm1Siswa({
            ...dataForm1Siswa,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData('form1Siswa', dataForm1Siswa);
        console.log(`Data Form 1 Siswa : ${dataForm1Siswa}`);
        navigate('/forumSiswa2');
    };

    useEffect(() => {
        if (state.form1Siswa) {
            setDataForm1Siswa(state.form1Siswa);
        }
    }, [state.form1Siswa]);
    
=======
import React from 'react'
import Forum from '../template/Forum'
import FromSiswa from '../template/FromSiswa'
import FromSiswa2 from '../template/FromSiswa2'
import { Link } from 'react-router-dom'

const ForumSiswa = ({ }) => {
>>>>>>> second/development
    return (
        <div>
            <Forum title={'Forum Data Peserta Didik'}>
                <div className='max-w-5xl px-4 mx-auto mt-5'>

<<<<<<< HEAD
                    <div className='flex items-center text-[12px] justify-center w-full font-medium sm:text-sm '>
                        <div className='flex items-center justify-center gap-2 px-4 py-2 border-2 rounded-full sm:py-2 border-maroon'> <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-maroon'>1</span> <span>Data Siswa</span></div>
                        <div className='border-2'></div>

                        <div className="flex w-[10px] sm:w-[40px] bg-gray-300 h-0.5" />

                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-full'> <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-gray-300'>2</span> <span>Tentang Sekolah & Prestasi</span></div>
                    </div>
                    <div className='w-full pb-4 mt-12 border-b-2'>
                        <p className='text-lg font-medium text-gray-600'> Bagian 1</p>
                        <h1 className='mt-1 text-xl font-semibold'>Data Siswa</h1>
=======
                    <div className='flex items-center justify-center w-full font-medium '>
                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-sm border-2 rounded-full sm:py-2 border-maroon'> <span className='size-[20px] flex items-center justify-center border-2 rounded-full border-maroon'>1</span> <span>Kompetisi Keahlian </span></div>
                        <div className='border-2'></div>

                        <div className="hidden sm:flex w-[40px] bg-gray-200 h-0.5 dark:bg-gray-300" />

                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 border-2 border-gray-300 rounded-full'> <span className='size-[20px] flex items-center justify-center border-2 rounded-full border-gray-300'>2</span> <span>Tentang Sekolah </span></div>
                    </div>
                    <div className='w-full pb-4 mt-12 border-b-2'>
                        <p className='text-lg font-medium text-gray-600'> Bagian 1</p>
                        <h1 className='mt-1 text-xl font-semibold'>Kompetisi Keahlian</h1>
>>>>>>> second/development
                    </div>


                    <div className='mt-5'>

<<<<<<< HEAD
                        <form className='w-full text-gray-600 mt-7 '>
                            <div className="mb-4">
                                <label
                                    htmlFor="student_name"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Nama Siswa
                                </label>
                                <input
                                    type="text"
                                    id="student_name"
                                    name="student_name"
                                    value={dataForm1Siswa.student_name}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Nama Siswa"
=======
                        <from className='w-full text-gray-600 mt-7 '>
                            <div className="mb-4">
                                <label
                                    htmlFor="alasan"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Alasan Memilih Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="alasan"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Pilih Alasan"
>>>>>>> second/development
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
<<<<<<< HEAD
                                    htmlFor="student_email"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Email Siswa
                                </label>
                                <input
                                    type="email"
                                    id="student_email"
                                    value={dataForm1Siswa.student_email}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Email Siswa"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="student_phone_number"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Nomor Telpon Siswa
                                </label>
                                <input
                                    type="text"
                                    id="student_phone_number"
                                    value={dataForm1Siswa.student_phone_number}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Nomor Telpon Siswa"
=======
                                    htmlFor="pengetahuan"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Pengetahuan Tentang Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="pengetahuan"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Pengetahuan Tentang Kompetisi"
>>>>>>> second/development
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
<<<<<<< HEAD
                                    htmlFor="place_of_birth"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Tempat Lahir Siswa
                                </label>
                                <input
                                    type="text"
                                    id="place_of_birth"
                                    value={dataForm1Siswa.place_of_birth}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Tempat Lahir Siswa"
=======
                                    htmlFor="karya kompetisi"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Apakah Pernah Memiliki Karya Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="karya kompetisi"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="  Apakah Pernah Memiliki Karya Kompetisi"
>>>>>>> second/development
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
<<<<<<< HEAD
                                    htmlFor="date_of_birth"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Tanggal Lahir Siswa
                                </label>
                                <input
                                    type="date"
                                    id="date_of_birth"
                                    value={dataForm1Siswa.date_of_birth}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder=""
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block mb-2 font-medium text-md">
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={dataForm1Siswa.gender}
                                    onChange={handleChange}
                                    className="select-option border border-gray-300 h-12 text-gray-600 text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon block w-full p-2.5"
                                    aria-label="Pilih Gender"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled className="text-gray-600">
                                        Pilih Gender
                                    </option>
                                    <option value="Male" className="text-gray-600">
                                        Laki-Laki
                                    </option>
                                    <option value="Female" className="text-black">
                                        Perempuan
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="religion" className="block mb-2 font-medium text-md">
                                    Agama
                                </label>
                                <select
                                    id="religion"
                                    name="religion"
                                    value={dataForm1Siswa.religion}
                                    onChange={handleChange}
                                    className="select-option border border-gray-300 h-12 text-gray-600 text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon block w-full p-2.5"
                                    aria-label="Pilih Gender"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled className="text-gray-600">
                                        Pilih Agama Siswa
                                    </option>
                                    <option value="Islam" className="text-gray-600">
                                        Islam
                                    </option>
                                    <option value="Katolik" className="text-black">
                                        Katolik
                                    </option>
                                    <option value="Protestan" className="text-black">
                                        Protestan
                                    </option>
                                    <option value="Buddha" className="text-black">
                                        Buddha
                                    </option>
                                    <option value="Hindu" className="text-black">
                                        Hindu
                                    </option>
                                    <option value="Kepercayaan Kepada Tuhan YME" className="text-black">
                                        Kepercayaan Kepada Tuhan YME
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="nationality"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Kewarganegaraan
                                </label>
                                <input
                                    type="text"
                                    id="nationality"
                                    value={dataForm1Siswa.nationality}
                                    onChange={handleChange}
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Masukan Kewarganegaraan Siswa"
=======
                                    htmlFor="motivasi memilih"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Apa Motivasi Memilih kompetensi tersebut
                                </label>
                                <input
                                    type="text"
                                    id="motivasi memilih"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="  Apa Motivasi memilih kompetensi tersebut"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="harapan di kompetensi"
                                    className="block mb-2 font-medium text-md e"
                                >
                                   Apa Harapanmu di Kompetensi Tersebut
                                </label>
                                <input
                                    type="text"
                                    id="harapan di kompetensi"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder=" Apa harapanmu di kompetensi tersebu"
>>>>>>> second/development
                                    required=""
                                />
                            </div>
                            <div className='flex justify-end w-full gap-3 mt-8'>

                                <Link to={'/siswa'}
<<<<<<< HEAD
=======
                                    type="submit"
>>>>>>> second/development
                                    className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
                                >
                                    Previous
                                </Link>
<<<<<<< HEAD
                                <button type="submit" className="px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none ">
                                    Next
                                </button>
                            </div>


                        </form>
=======
                                <Link
                                    to={'/forumSiswa2'}
                                    type="submit"
                                    className="px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none "
                                >
                                    Next
                                </Link>
                            </div>


                        </from>
>>>>>>> second/development
                    </div>
                </div>

            </Forum>
        </div>
    )
}

export default ForumSiswa
