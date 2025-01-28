import React from 'react'
import HasilForm from '../../template/HasilForm'

const HasilOrtu = () => {
    const dataorang=[
        {
            title:'Nama Ayah',
            value:'Zidan'
        },
        {
            title:'Nama Ibu',
            value:'Clara'
        },
        {
            title:'Nama Siswa',
            value:'Agus Rojali'
        },
        {
            title:'Komnepetensi Keahlian',
            value:'DKV'
        },
        {
            title:'Pekerjaan Ayah',
            value:'Supir'
        },
        {
            title:'Perkejaan Ibu',
            value:'Irt'
        },
        {
            title:'Visi dan Misi Keluarga',
            value:'Sukses dunia akhirat'
        },
    ]
    const dataA = [
        {
            e: 'Status anak dalam Keluarga',
            value: 'Kandung'
        },
        {
            e: 'Apakah anak memiliki penyakit berat bawaan dari lahir / kecil yang mengganggu dalam belajar',
            value: 'TIdak'
        },
        {
            e: 'Pandangan orang tua terhadap karakter anak dirumah ',
            value: 'Disiplin'
        },
              
    ]
    const dataB=[
        {
            e: 'Alasan memilih SMK Letris Indonesia 2',
            value: 'Keren'
        },
        {
            e: 'Pandangan Tentang Sekolah dan tahu sekolah dari mana ',
            value: 'Bagus, saya mengetahui ini pendaftaran dari website'
        },

    ]
    const dataC=[
        {
            e:'Bagaimana Pendapat bapak/ibu tentang program sekolah',
            value:'Setuju'
        },
        {
            e:'Apakah bapak ibu siap untuk berkomunikasi dengan wali kelas menghadiri rapat awal tahun mengambil raport hasil belajar siswa dan menghadiri panggilan sekolah dalam pendampingan belajar siswa selama menjadi siswa SMK negeri Indonesia 2',
            value:'Setuju'
        },
    ]
    
    const dataD=[
        {
            e:'Jika Ananda selama bersekolah melanggar peraturan sekolah tidak mau belajar atau pun mengerjakan tugas sekolah lalu dilakukan pendampingan oleh sekolah namun masih tidak berubah menjadi lebih baik apakah menerima jika nantinya jika rapat pleno kenaikan kelas dinyatakan tinggal kelas atau dikembalikan ke orang tua',
            value:'Baik'
        },

    ]
    const dataE=[
        {
            e:'Apakah bapak dan ibu bisa berkomitmen dalam melakukan pembayaran sekolah seperti daftar ulang, SPP, dan kegiatan program sekolah',
            value:"Iya"
        },
        {
            e:'Daftar Ulang, SPP, dan Kegiatan program sekolah',
            value:'Iya'
        },
        {
            e:'Catatab Pewawancara ',
            value:'Oke'
        },
        {
            e:'Tanggal Wawancara',
            value:'12 September 2024'
        },
        {
            e:'Pewawancara Orang Tua',
            value:'Hadir solichin'
        },
    ]
  return (
    <div>
                  <HasilForm  data1={dataorang}title={"PARENTS' OBSERVATION RESULTS"} judul='ORANG TUA' to='/ortu'>
                  <div className='px-0 mt-4 text-gray-800 '>
                    <h1 className='font-medium text-md sm:text-xl'>A. Pengetahuan Orang Tua Tentang Anak</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            dataA.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                    <p className='sm:w-[460px] w-[360px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 sm:w-[400px] w-[310px] '>

                                        :
                                        <p className=' text-wrap'> {e.value}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <h1 className='mt-5 font-medium text-md sm:text-xl'>B. Motivasi Orang Tua Memilih SMK Letris Indonesia 2</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            dataB.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                    <p className='sm:w-[460px] w-[450px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 sm:w-[400px] w-[400px] '>

                                        :
                                        <p className=' text-wrap'> {e.value}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <h1 className='mt-5 font-medium text-md sm:text-xl'>C. Komitmen Orang Tua Terhadap Program Sekolah</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            dataC.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                    <p className='w-[960px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 w-[100px] '>

                                        :
                                        <p className=' text-wrap'> {e.value}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <h1 className='mt-5 font-medium text-md sm:text-xl'>D. Pengetahuan Orang Tua Tentang Anak</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            dataD.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                    <p className='w-[960px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 w-[100px] '>

                                        :
                                        <p className=' text-wrap'> {e.value}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                   
                                     
                </div>
                  </HasilForm>

    </div>
    
  )
}




export default HasilOrtu
