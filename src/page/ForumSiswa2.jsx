import React from 'react'
import Forum from '../template/Forum'
import { Link } from 'react-router-dom'

const ForumSiswa2 = () => {
    return (
        <Forum title={'Forum Data Peserta Didik'}>
            <div className='max-w-5xl px-4 mx-auto mt-5'>

                <div className='flex items-center justify-center text-[12px] w-full font-medium sm:text-sm '>
                    <div className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-full'> <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-gray-300'>1</span> <span>  Kompetisi Keahlian </span></div>
                    <div className="flex w-[10px] sm:w-[40px] bg-gray-300 h-0.5 " />
                    <div className='flex items-center justify-center gap-2 px-4 py-2 border-2 rounded-full border-maroon'> <span className='size-[18px] sm:size-[20px] flex items-center justify-center border-2 rounded-full border-maroon'>2</span> <span>Tentang Sekolah </span></div>
                    <div className='border-2'></div>

                </div>
                <div className='w-full pb-4 mt-12 border-b-2'>
                    <p className='text-lg font-medium text-gray-600'>Bagian 2</p>
                    <h1 className='mt-1 text-xl font-semibold'>Tentang Sekolah</h1>
                </div>


                <div className='mt-5'>

                    <from className='w-full text-gray-600 mt-7 '>

                        <div className="mb-4">
                            <label
                                htmlFor="alasan"
                                className="block mb-2 font-medium text-md e"
                            >
                                Alasan Memilih Bersekolah di SMK Letris Indonesia 2
                            </label>
                            <input
                                type="text"
                                id="alasan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Alasan Memilih Bersekolah di SMK Letris Indonesia 2"
                                required=""
                            />
                        </div>

                        {/* //?option */}

                        <div className='flex flex-col justify-between w-full gap-3 mb-4 lg:flex-row'>
                            <div className="w-full lg:w-[33%]">
                            <label
                                htmlFor="aktif"
                                className="block mb-2 font-medium text-md e"
                            >
                                Aktif Eskul / Osis
                            </label>
                                <select
                                    id="aktif"
                                    className="select-option border border-gray-300 h-12 text-gray-400  text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon  block w-full p-2.5 "
                                >
                                    <option selected="" className=''>Choose a country</option>
                                    <option value="US" className=''>Pernah</option>
                                    <option value="CA">Tidak</option>
                                  
                                </select>
                            </div>
                            <div className="w-full lg:w-[33%]">
                            <label
                                htmlFor="prestasi"
                                className="block mb-2 font-medium text-md e"
                            >
                                Prestasi
                            </label>
                                <select
                                    id="prestasi"
                                    className=" border border-gray-300 text-gray-400 h-12 text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon  block w-full pe-4 p-2.5 "
                                >
                                    <option selected="">Choose a country</option>
                                    <option value="US">Pernah</option>
                                    <option value="CA">Tidak</option>
                                  
                                </select>
                            </div>
                            <div className="w-full lg:w-[33%]">
                            <label
                                htmlFor="tata tertib"
                                className="block mb-2 font-medium text-md e"
                            >
                                Bersedia Mengikuti Seluruh Tata Tertib
                            </label>
                                <select
                                    id="tata tertib"
                                    className=" border border-gray-300 text-gray-400 h-12 text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon  block w-full p-2.5 "
                                >
                                    <option selected="">Choose a country</option>
                                    <option value="US">Pernah</option>
                                    <option value="CA">Tidak</option>
                                  
                                </select>
                            </div>

                        </div>


                        <div className="mb-4">
                            <label
                                htmlFor="peraturan"
                                className="block mb-2 font-medium text-md e"
                            >
                                Pernah Melanggar Tata Tertib
                            </label>
                            <input
                                type="text"
                                id="peraturan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Pernah Melanggar Tata Tertib"
                                required=""
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label
                                htmlFor="catatan"
                                className="block mb-2 font-medium text-md e"
                            >
                                Catatan Pewawancara
                            </label>
                            <input
                                type="text"
                                id="catatan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="  Catatan Pewawancara"
                                required=""
                            />
                        </div>
                       
                        <div className="mb-4">
                            <label
                                htmlFor="pewawancara"
                                className="block mb-2 font-medium text-md e"
                            >
                            Pewawancara Siswa
                            </label>
                            <input
                                type="text"
                                id="pewawancara"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder=" Pewawancara Siswa"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="tanggal"
                                className="block mb-2 font-medium text-md e"
                            >
                                Tanggal Wawancara
                            </label>
                            <input
                                type="date"
                                id="tanggal"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="  Tanggal Wawancara"
                                required=""
                            />
                        </div>

                        <div className='flex justify-end w-full gap-3 mt-8'>

                            <Link to={'/forumSiswa'}
                                type="submit"
                                className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
                            >
                             Previous
                            </Link>
                            <Link
                            to={'/hasilSiswa'}
                                type="submit"
                                className="px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none "
                            >
                                Submit
                            </Link>
                        </div>

                    </from>
                </div>
            </div>

        </Forum>
    )
}

export default ForumSiswa2
