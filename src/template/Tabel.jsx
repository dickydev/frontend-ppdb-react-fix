import React from 'react'
import { Link } from 'react-router-dom'

const Tabel = ({ title, headers, children, to, handle }) => {
  return (
    <div>
      <div className='flex justify-end w-full'>

        {/* <BtnK className='border-2 ' fs={handleShowModal} warna='bg-cyan-400'>ADD</BtnK> */}
      </div>
      <div className="flex items-end justify-between py-5 text-lg font-semibold text-left text-gray-900 bg-white shadow-sm sm:p-5 rtl:text-right ">
        <div className='w-[70%] '>

          <div className='flex items-center justify-between w-full'>

            <h1 className='text-xl font-semibold'>

              Data {title}
            </h1>

          </div>
          <p className="mt-1 text-sm font-normal text-gray-800 ">
            Tabel berisi data {title} harap melakukan cek rutin terhadap data
          </p>
        </div>

        <Link className='px-2 py-0 sm:py-1 text-[13px]  sm:text-sm text-white rounded-sm lg:px-4 bg-maroon active:scale-95' to={to}>Tambah Data</Link>
      </div>
      <div className="relative overflow-x-auto shadow-sm custom-scrollbar ">

        <table className="relative w-full text-sm text-left text-gray-500 rtl:text-right ">


          <thead className="text-xs text-white uppercase bg-maroon">
            <tr>
              {headers.map((item, i) => (

                <th key={i} scope="col" className="px-6 py-3 text-nowrap">
                  {item.judul}
                </th>

              ))}

            </tr>
          </thead>
          <tbody>
            {children}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tabel
