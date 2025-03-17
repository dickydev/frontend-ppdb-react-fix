import React from 'react';
import { FaUser, FaCode, FaPalette, FaFileInvoice, FaChartLine, FaMoneyBillTransfer, FaNetworkWired } from 'react-icons/fa6';
import Dashboard from '../../template/Dashboard';
// Card component
const DashboardCard = ({ title, count, description, Icon }) => {
  const isClosed = description.toLowerCase() === 'closed';
  
  return (
    <div className={`
      relative overflow-hidden rounded-xl border p-6 
      ${isClosed ? 'bg-red-50 border-red-100' : 'bg-white border-gray-100'}
      shadow-sm transition-all hover:shadow-md
    `}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className={`
            inline-flex items-center rounded-lg 
            ${isClosed ? 'bg-red-100' : 'bg-blue-100'} 
            p-2
          `}>
            <Icon className={`h-6 w-6 ${isClosed ? 'text-red-600' : 'text-blue-600'}`} />
          </div>
          <h3 className="font-medium text-gray-900 line-clamp-2 text-lg">
            {title}
          </h3>
        </div>
        <div className={` 
          text-2xl font-bold flex justify-center items-center 
          ${isClosed ? 'text-red-900' : 'text-gray-900'}
        `}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[75px]">{count}</span> 
            <span className="text-xl mt-5">Siswa</span>
          </div>
        </div>

      </div>
      
      <div className="mt-4">
        <div className={`
          inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium
          ${isClosed ? 
            'bg-red-100 text-red-800' : 
            'bg-emerald-100 text-emerald-800'
          }
        `}>
          {description}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 -ml-10 flex h-[200px] w-[200px] rotate-45 transform">
        <div className={`h-full w-full ${
          isClosed ? 'bg-red-50/50' : 'bg-blue-50/50'
        }`}></div>
      </div>
    </div>
  );
};

function App() {
  const dataJurusan = [
    { title: 'Rekayasa Perangkat Lunak dan Gim', count: 55, description: 'Kuota tersedia', icon: FaCode },
    { title: 'Desain Komunikasi Visual Regular', count: 76, description: 'Closed', icon: FaPalette },
    { title: 'Desain Komunikasi Visual Bilingual', count: 84, description: 'Kuota tersedia', icon: FaPalette },
    { title: 'Manajemen Perkantoran dan Layanan Bisnis Regular', count: 47, description: 'Kuota tersedia', icon: FaFileInvoice },
    { title: 'Manajemen Perkantoran dan Layanan Bisnis Bilingual', count: 25, description: 'Kuota tersedia', icon: FaFileInvoice },
    { title: 'Pemasaran dan Bisnis Retail', count: 19, description: 'Kuota tersedia', icon: FaChartLine },
    { title: 'Akutansi dan Keuangan Lemabaga', count: 48, description: 'Kuota tersedia', icon: FaMoneyBillTransfer },
    { title: 'Teknik Komputer dan Jaringan', count: 77, description: 'Closed', icon: FaNetworkWired },
  ];

  return (
  <Dashboard>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataJurusan.map((jurusan, index) => (
            <DashboardCard
              key={index}
              title={jurusan.title}
              count={jurusan.count}
              description={jurusan.description}
              Icon={jurusan.icon}
            />
          ))}
        </div>
      </div>
    </div>
  </Dashboard>
  );
}

export default App;
