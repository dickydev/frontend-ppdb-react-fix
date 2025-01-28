import React from "react";
import Forum from "../template/Forum";
import { Link } from "react-router-dom";
const ForumOrtu = () => {
  return (
    <Forum title={"Forum Data Orang Tua"}>
      <div className="max-w-5xl px-4 mx-auto mt-5">
        <div className="w-full pb-4 mt-16 border-b-2">
          <h1 className="mt-1 text-xl font-semibold text-gray-600">
            Pengetahuan Orang Tua Tentang Anak
          </h1>
        </div>
        <div className="mt-5">
          <from className="w-full text-gray-600 mt-7 ">
            <div className="mb-4">
              <label
                htmlFor="status Anak"
                className="block mb-2 font-medium text-md e"
              >
                Status Anak Dalam Keluarga
              </label>
              <input
                type="text"
                id="status Anak"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder="Status Anak Dalam Keluarga"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="riwayat penyakit"
                className="block mb-2 font-medium text-md e"
              >
                Apakah Anak Memiliki Riwayat Penyakit Berat
              </label>
              <input
                type="text"
                id="riwayat penyakit"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder="Apakah Anak Memiliki Riwayat Penyakit Berat"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="pandangan orang tua"
                className="block mb-2 font-medium text-md e"
              >
                Pandangan Orang Tua Terhadap Karakter Anak
              </label>
              <input
                type="text"
                id="pandangan orang tua"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder=" Pandangan Orang Tua Terhadap Karakter Anak"
                required=""
              />
            </div>

            {/* //? Bagian 2 */}
            <div className="w-full pb-4 mt-8 mb-4 border-b-2">
              <h1 className="mt-1 text-xl font-semibold">
                Pengetahuan Orang Tua Tentang Anak
              </h1>
            </div>

            <div className="mb-4">
              <label
                htmlFor="alasan"
                className="block mb-2 font-medium text-md e"
              >
                Alasan Memilih SMK Letris Indonesia 2
              </label>
              <input
                type="text"
                id="alasan"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder=" Alasan Memilih SMK Letris Indonesia 2"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="pandangan sekolah"
                className="block mb-2 font-medium text-md e"
              >
                Pandangan Sekolah Dan Tahu Dari Mana
              </label>
              <input
                type="text"
                id="pandangan sekolah"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder=" Pandangan Sekolah Dan Tahu Da"
                required=""
              />
            </div>

            {/* //? Bagian 3 */}
            <div className="w-full pb-4 mt-8 mb-4 border-b-2">
              <h1 className="mt-1 text-xl font-semibold">
                Komitmen Orang Tua Terhadap Program Sekolah
              </h1>
            </div>

            <div className="mb-4">
              <label
                htmlFor="tanggapan bapak/ibu"
                className="block mb-2 font-medium text-md e"
              >
                Bagaimana Tanggapan Bapak/Ibu tentang program sekolah
              </label>
              <input
                type="text"
                id="tanggapan bapak/ibu"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder="Bagaimana Tanggapan Bapak/Ibu tentang program sekolah"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="siap"
                className="block mb-2 font-medium leading-7 text-justify leadi text-md"
              >
                Apakah bapak ibu siap untuk berkomunikasi dengan wali kelas
                menghadiri rapat awal tahun mengambil raport hasil belajar siswa
                dan menghadiri panggilan sekolah dalam pendampingan belajar
                siswa selama siswa menjadi siswa SMK negeri Indonesia 2
              </label>
              <input
                type="text"
                id="siap"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder="  Apakah bapak ibu siap untuk berkomunikasi dengan wali kelas"
                required=""
              />
            </div>
            {/* //? Bagian 4 */}
            <div className="w-full pb-4 mt-8 mb-4 border-b-2">
              <h1 className="mt-1 text-xl font-semibold">
                Pengetahuan Orang Tua Tentang Anak
              </h1>
            </div>

            <div className="mb-4">
              <label
                htmlFor="paraturan"
                className="block mb-2 font-medium text-justify text-md e"
              >
                Jika Ananda selama bersekolah melanggar peraturan sekolah tidak
                mau belajar atau pun mengerjakan tugas sekolah lalu dilakukan
                pendampingan oleh sekolah namun masih tidak berubah menjadi
                lebih baik apakah menerima jika nantinya jika rapat pleno
                kenaikan kelas dinyatakan tinggal kelas atau dikembalikan ke
                orang tua
              </label>
              <input
                type="text"
                id="paraturan"
                className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                placeholder="  Jika Ananda selama bersekolah melanggar peraturan sekolah"
                required=""
              />
            </div>

            <div className="flex justify-end w-full gap-3 mt-8">
              <Link
                to={"/Ortu"}
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
              >
                Previous
              </Link>
              <Link
                to={"/hasilOrtu"}
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
  );
};

export default ForumOrtu;
