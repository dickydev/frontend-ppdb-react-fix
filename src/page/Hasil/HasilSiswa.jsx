import React from 'react'
import HasilForm from '../../template/HasilForm'




const HasilSiswa = () => {
    const data1 = [
        {
            title: 'Nama Siswa',
            value: 'Dearly'
        },
        {
            title: 'Kompetensi Keahlian',
            value: 'DKV'
        },
        {
            title: 'Asal Sekolah',
            value: 'SMP Al amanah'
        },
        {
            title: 'Visi Siswa',
            value: 'Menjadi kompeten dibidangnya'
        },
        {
            title: 'Misi Siswa',
            value: 'Belejar giat dan tekun'
        },
    ]
    const data2 = [
        {
            e: 'Alasan Memilih Kompetensi Keahlian',
            value: 'Menarik'
        },
        {
            e: 'Pengetahuan Tentang Kompetensi Tersebut',
            value: 'Belum tahu'
        },
        {
            e: 'Apakah pernah memiliki karya di kompetensi tersebut',
            value: 'Belum ada'
        },
        {
            e: 'Apa motivasi memilih Kompetensi tersebut',
            value: 'Tertarik dan minat '
        },
        {
            e: 'Apa Motivasi memilih kompetensi tersebut ',
            value: 'Tertarik dan minat'
        },
        {
            e: 'Apa harapanmu di kompetensi tersebut',
            value: 'Menjadi pribadi yang baik'
        },

    ]
    const data3 = [
        {
            e: 'Alasan memilih bersekolah di SMK Letris Indonesia 2',
            value: 'Keren'
        },
        {
            e: 'Apa pernah aktif dalam keperguruan OSIS ataupun Ekskul ketika di SMP/MTS',
            value: 'Tidak'
        },
        {
            e: 'Apa pernah memiliki prestasi Ketika di SMP/MTS',
            value: 'Tidak'
        },
        {
            e: 'Apa pernah melanggar tata tertib selama sekolah di SMP/MTS',
            value: 'Tidak'
        },
        {
            e: 'Jika Diterima Di SMK Letris Indonesia 2, Apakah Siap dan bersedia mengikuti seluruh tata tertib yang berlaku di SMK Letris Indonesia 2',
            value: 'Iya'
        },
        {
            e: 'Catatan Pewawancara ',
            value: 'OK'
        },
        {
            e: 'Tanggal wawancara ',
            value: 'Tangsel,12 Maret 2024'
        },
        {
            e: 'Pewawancara Siswa',
            value: 'Hadi solichin'
        },
    ]
    return (
        <div>
            <HasilForm data1={data1} to={'/siswa'} title={'HEALTY OBSERVATION RESULTS'} judul='IDENTITAS PESERTA DIDIK'>
                <div className='px-0 mt-4 text-gray-800 '>
                    <h1 className='text-lg font-medium sm:text-xl'>A. Tentang Kompetensi Keahlian</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            data2.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg'>
                                    <p className='sm:w-[700px] w-[400px] '>{e.e}</p>
                                    <div className='flex gap-3 sm:ms-2 w-[230px] '>

                                        :
                                        <p className=' text-wrap'> {e.value}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <h1 className='mt-4 text-lg font-medium sm:text-xl'>B. Tentang Sekolah</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            data3.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-md sm:text-lg '>
                                    <p className='sm:w-[700px] w-[400px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 w-[230px] '>

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

export default HasilSiswa
