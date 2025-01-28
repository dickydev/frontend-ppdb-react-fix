import React from 'react'
import Forum from '../template/Forum'
import { Link } from 'react-router-dom'

const ForumMedical = () => {
  return (
    <Forum title={'Forum Data Medical Check Up'}>
            <div className='max-w-5xl px-4 mx-auto mt-5'>
                <div className='w-full pb-4 mt-16 border-b-2'>
                    <h1 className='mt-1 text-xl font-semibold text-gray-600'>Pengetahuan Orang Tua Tentang Anak</h1>
                </div>
                <div className='mt-5'>

                    <from className='w-full text-gray-600 mt-7 '>
                        <div className="mb-4">
                            <label
                                htmlFor="Tinggi badan"
                                className="block mb-2 font-medium text-md e"
                            >
                                Tinggi Badan
                            </label>
                            <input
                                type="text"
                                id="Tinggi badan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Tinggi Badan"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="berat badan"
                                className="block mb-2 font-medium text-md e"
                            >
                                Berat Badan
                            </label>
                            <input
                                type="text"
                                id="berat badan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Berat Badan"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="golongan darah"
                                className="block mb-2 font-medium text-md e"
                            >
                               Golongan Darah
                            </label>
                            <input
                                type="text"
                                id="golongan darah"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Golongan Darah"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="riwayat penyakit"
                                className="block mb-2 font-medium text-md e"
                            >
                               Riwayat Penyakit
                            </label>
                            <input
                                type="text"
                                id="riwayat penyakit"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Riwayat Penyakit"
                                required=""
                            />
                        </div>
                        <div className='flex justify-between w-full gap-3 mb-4'>
                            <div className="w-[49%]">
                            <label
                                htmlFor="riwayat merokok"
                                className="block mb-2 font-medium text-md e"
                            >
                                Riwayat Merokok
                            </label>
                                <select
                                    id="riwayat merokok"
                                    className=" border border-gray-300 h-12 text-gray-400  text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon  block w-full p-2.5 "
                                >
                                    <option selected="">Choose a country</option>
                                    <option value="US" className='active:bg-maroon'>Pernah</option>
                                    <option value="CA">Tidak</option>
                                  
                                </select>
                            </div>
                            <div className="w-[49%]">
                            <label
                                htmlFor="riwayat tato"
                                className="block mb-2 font-medium text-md e"
                            >
                                Tindik / Tato
                            </label>
                                <select
                                    id="riwayat tato"
                                    className=" border border-gray-300 text-gray-400 h-12 text-sm rounded-lg focus:ring-maroon outline-none focus:border-maroon  block w-full pe-4 p-2.5 "
                                >
                                    <option selected="">Choose a country</option>
                                    <option value="US">Pernah</option>
                                    <option value="CA">Tidak</option>
                                  
                                </select>
                            </div>
                         

                        </div>
                        
                        <div className="mb-4">
                            <label
                                htmlFor="hasil pemeriksaan"
                                className="block mb-2 font-medium text-md e"
                            >
                               Setelah Melakukan Pemeriksaan maka kami menyatakan
                            </label>
                            <input
                                type="text"
                                id="hasil pemeriksaan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Setelah Melakukan Pemeriksaan maka kami menyatakan"
                                required=""
                            />
                        </div>


                      
                        <div className='w-full pb-4 mt-8 mb-4 border-b-2'>
                            <h1 className='mt-1 text-xl font-semibold'>Keterangan Pewawancara</h1>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="tanggal wawancara"
                                className="block mb-2 font-medium text-md e"
                            >
                               Tanggal Wawancara
                            </label>
                            <input
                                type="date"
                                id="tanggal wawancara"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Tanggal Wawancara"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="nama pewawancara"
                                className="block mb-2 font-medium text-md e"
                            >
                               Nama Pewawancara
                            </label>
                            <input
                                type="teks"
                                id="nama pewawancara"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                placeholder="Nama Pewawancara"
                                required=""
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="catatan "
                                className="block mb-2 font-medium text-md e"
                            >
                                Catatan Khusus Pewawancara
                            </label>
                            <textarea name="" id="catatan"
                                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"

                            ></textarea>
                         
                        </div>


                        <div className='flex justify-end w-full gap-3 mt-8'>

                            <Link to={'/medical'}
                                type="submit"
                                className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
                            >
                                Previous
                            </Link>
                            <Link
                                to={'/hasilMedical'}
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

export default ForumMedical
