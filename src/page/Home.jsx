import React, { useState, useEffect } from 'react';
import Dashboard from '../template/Dashboard';
import { get } from '../utils/api';
import DashboardCard from '../components/cardDashboard/CardDashboard';
import Footer from '../components/Footer';

const Home = () => {
  const [counts, setCounts] = useState({ medical: 0, students: 0, parents: 0 });

  useEffect(() => {
    async function fetchCounts() {
      try {
        const data = await get('/dashboard/count');
        setCounts(data);
      } catch (error) {
        console.error('Error fetching count data:', error);
      }
    }
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard title={'Home'}>
        <div className='flex flex-col mx-auto max-w-7xl xl:flex-row lg:w-full flex-1'>
          <div className='w-full h-full xl:w-full xl:px-5'>
            <div className='w-full mt-2'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Card for Parents */}
                <DashboardCard
                  to='/forumOrtu1'
                  title='Total Data Orang Tua'
                  count={counts.parents}
                  description='Input Data Orang Tua'
                />

                {/* Card for Students */}
                <DashboardCard
                  to='/forumSiswa'
                  title='Total Data Calon Peserta Didik'
                  count={counts.students}
                  description='Input Data Calon Peserta Didik'
                />

                {/* Card for Medical Check Up */}
                <DashboardCard
                  to='/forumMedical'
                  title='Total Data Medical Check Up'
                  count={counts.medical}
                  description='Input Data Medical Check Up'
                />
              </div>
            </div>
          </div>
        </div>
       {/* Footer */}
       <div className="relative bottom-0">
         <Footer />
      </div>
      </Dashboard>
    </div>
  );
};

export default Home;