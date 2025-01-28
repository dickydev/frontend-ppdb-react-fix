import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import Tabel from '../template/Tabel'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import {get} from "../utils/api";
import Modal from '../template/Modal';

const Siswa = () => {

    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const headTable = [
        { judul: "Nama" },
        { judul: "Email" },
        { judul: "Alergi" },
        { judul: "Kondisi Medis" },
        { judul: "Berat Badan" },
        { judul: "Tinggi Badan" },
        { judul: "Golongan Darah" },
        { judul: "Kondisi Mata" },
        { judul: "Kondisi Pendengaran"},
        { judul: "Kondisi Gigi"},
        {judul: "Info Tambahan"},
        {judul: "Tanggal Di tambahkan"}
    ];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get ('/students');
                setData(response);
                setIsLoading(false);
            } catch (err) {
                console.error('Meledak dikit lagi:', err);
            }
        };

        fetchData();
    }, [])

    return (
        <Dashboard title={'Medis'}>
                  <div className="flex flex-col justify-between w-full min-h-[700px] xl:min-h-[calc(100vh-130px)]">
        <Tabel
          title="Medis"
          headers={headTable}
          handle={() => console.log('Open modal')} 
          to="/forumMedical"
        >
          {isLoading ? (
            <tr>
              <td colSpan={headTable.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr className="bg-white border-b" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.student_name}
                </th>
                <td className="px-6 py-4 text-gray-900">{item.student_email}</td>
                <td className="px-6 py-4 text-gray-900">{item.place_of_birth}</td>
                <td className="px-6 py-4 text-gray-900">{item.allergies}</td>
                <td className="px-6 py-4 text-gray-900">{item.weight}</td>
                <td className="px-6 py-4 text-gray-900">{item.height}</td>
                <td className="px-6 py-4 text-gray-900">{item.blood_type}</td>
                <td className="px-6 py-4 text-gray-900">{item.vision}</td>
                <td className="px-6 py-4 text-gray-900">{item.hearing}</td>
                <td className="px-6 py-4 text-gray-900">{item.dental_health}</td>
                <td className="px-6 py-4 text-gray-900">{item.additional_info}</td>
                <td className="px-6 py-4 text-gray-900">
                  {new Date(item.created_at).toLocaleDateString('id-ID')}
                </td>
              </tr>
            ))
          )}
        </Tabel>

        <div className="w-full">
          <nav className="flex items-center justify-between gap-x-1" aria-label="Pagination">
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 group inline-flex jusify-center items-center gap-x-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <FaAngleLeft className="group-hover:text-maroon" />
              <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                Previous
              </span>
            </button>
            <div className="flex items-center gap-x-1">
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                1
              </button>
            </div>
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] group py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                Next
              </span>
              <FaAngleRight className="group-hover:text-maroon" />
            </button>
          </nav>
        </div>
      </div>
        </Dashboard>
    )
}

export default Siswa
