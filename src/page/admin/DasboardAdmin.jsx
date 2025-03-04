/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUser, FaGraduationCap } from 'react-icons/fa6';
import Dashboard from '../../template/Dashboard';
import Footer from '../../components/Footer';
import useTitle from '../../utils/useTitle';
import CardStatAdmin from '../../components/cardDashboard/CardStatAdmin';

const DasboardAdmin = () => {
  useTitle('Admin - PPDB Letris 2');

  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard title='Dasboard'>
        <div className='flex flex-col mx-auto max-w-7xl xl:flex-row lg:w-full flex-1'>
          <div className="w-full h-full xl:w-full xl:px-5 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3 overflow-hidden group cursor-pointer hover:shadow-lg active:shadow-md rounded-lg bg-white shadow-md relative transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <span className='absolute -right-2 -top-2 flex h-6 w-6'>
                <span className='group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75'></span>
                <span className='relative inline-flex rounded-full h-6 w-6 bg-maroon'></span>
              </span>
              <div className="p-4">
                <h1 className='text-xl font-semibold text-red-900'>Total Online User</h1>
                <div className="flex justify-center items-center p-4">
                  <h2 className='mt-4 text-5xl font-extrabold text-gray-600'>120</h2>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 overflow-hidden group cursor-pointer hover:shadow-lg active:shadow-md rounded-lg bg-white shadow-md relative transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="p-4">
                <div className='flex justify-between items-center pb-2'>
                  <h1 className='text-xl font-semibold text-red-900'>Statistik Data</h1>
                  <p className='text-sm text-gray-500'>Update 1 month ago</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                  <CardStatAdmin icon={FaUser} count={89} label='Orang Tua' />
                  <CardStatAdmin icon={FaGraduationCap} count={89} label='Siswa' />
                  <CardStatAdmin icon={FaUser} count={89} label='Data Medical' />
                  <CardStatAdmin icon={FaUser} count={89} label='User' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 mx-0 lg:mx-16">
          <Footer />
        </div>
      </Dashboard>
    </div>
  );
};

export default DasboardAdmin;
