import React from 'react'
import HasilForm from '../../template/HasilForm'



const HasilMedical = () => {
    const dataorang = [
        {
            title: 'Nama Siswa',
            value: 'Dearly'
        },
        {
            title: 'Nomor Kartu Peserta',
            value: '20252026'
        },
        {
            title: 'Tempat/Tanggal Lahir',
            value: 'Semarang,13 juli 2009'
        },
        {
            title: 'Jenis Kelamin',
            value: 'Laki-laki'
        },
        {
            title: 'Alamat Tinggal',
            value: 'Villa Bintaro indah blok e 2'
        },
    ]
    const dataA = [
        {
            e: 'Tinngi Badan',
            value: '160cm'
        },
        {
            e: 'Berat Badan',
            value: '75 KG'
        },
        {
            e: 'Golongan Darah',
            value: 'O'
        },
        {
            e: 'Riwayat Penyakit',
            value: 'Tidak ada'
        },
        {
            e: 'Riwayat Merokok',
            value: 'Tidak'
        },
        {
            e: 'Tindik/Tatto',
            value: 'Tidak'
        },
        {
            e: 'Setelah di lakukan pemeriksaan fisik dan kesehatan maka kami menyatakan',
            value: 'Sehat Terbatas dan direkomendasikan untuk bersekolah di SMK Letris Indonesia 2'
        },
        {
            e:'Catatan Khusus Pewawancara',
            value:'Oke'
        },
        {
            e:'Tanggal wawancara',
            value:'12 Juli 2025'
        },
        {
            e:'Pewawancara Siswa',
            value:'Jaulani Wiguna'
        },
               

    ]

    return (
        <div>
            <HasilForm data1={dataorang} title={'HEALTY OBSERVATION RESULTS'} judul='IDENTITAS PESERTA DIDIK' to='/medical'>

                <div className='px-0 mt-4 text-gray-800 '>
                    <h1 className='font-medium text-md sm:text-xl'>A. KETERANGAN</h1>
                    <ul className='mt-2 space-y-2 sm:ms-6'>
                        {
                            dataA.map((e, i) => (
                                <li key={i} className='flex items-start justify-between gap-5 text-lg'>
                                    <p className='w-[460px] '>{e.e}</p>
                                    <div className='flex gap-3 ms-2 w-[400px] '>

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

export default HasilMedical
