/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaRegFileAlt, FaRegFileArchive } from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaBezierCurve, FaUser, FaFileMedical, FaChild , FaRegMessage, FaRepeat, FaRegUser, FaArrowRightFromBracket, FaCreativeCommonsNd } from 'react-icons/fa6';
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { post } from '../utils/api';

const ModalProfil = ({ modal }) => {
    return (
        <div>
            
        </div>
    );
};

const Dashboard = ({ title, children }) => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName") || "User";
    const Logout = async () => {
        try {
            const response = await post("/auth/logout");
            // if (!response.ok) {
            //     throw new Error("Logout failed");
                
            // }
    
            localStorage.removeItem("token");
            localStorage.removeItem("userName");
            navigate("/");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const data = [
        { name: 'Home', ic: <FaHouse />, to: '/home' },
        { name: 'Orang Tua', ic: <FaUser />, to: '/ortu' },
        { name: 'Siswa', ic: <FaChild size={22}/>, to: '/siswa' },
        { name: 'Medical', ic: <FaFileMedical />, to: '/medical' }
    ];


    function tanggal() {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const [showProfile, setShowProfile] = useState(false);
    const [showYourProfile, setShowYourProfile] = useState(false);
    const [showSide, setShowSide] = useState(false);

    function handleSide() {
        setShowSide(!showSide);
    }

    return (
        <>
            <ModalProfil modal={{ showYourProfile, setShowYourProfile }} />
            <div>
                <nav className="fixed top-0 z-50 w-full h-[69px] bg-white/[99] border-b border-maroon">
                    <div className="h-full px-3 py-4 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start lg:ps-4 rtl:justify-end">
                                <button
                                    className="inline-flex items-center p-2 text-sm rounded-lg text-maroon md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                                >
                                    <FaBars onClick={handleSide} />
                                </button>
                                <div className='items-center hidden md:flex'>
                                    <img
                                        src={img}
                                        className=" w-[32px] bg-white me-3"
                                    />
                                    <span className="self-center text-xl font-bold text-gray-800 sm:text-2xl whitespace-nowrap">
                                        SMK LETRIS INDONESIA 2
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button
                                            onClick={() => setShowProfile(!showProfile)}
                                            type="button"
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <FaUser
                                                className="w-8 h-8 rounded-full bg-white"

                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`${showProfile ? 'absolute block' : 'hidden'} w-[240px] z-50 my-4 text-base list-none bg-white divide-y divide-gray-800 rounded shadow right-4 top-12 border-[0.6px] border-gray-900`}
                                        id="dropdown-user"
                                    >
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900">{userName}</p>
                                        </div>
                                        <ul>
                                            <li
                                                className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:text-white hover:bg-maroon"
                                                onClick={Logout} // Trigger logout on the entire list item click
                                            >
                                                <span className="block text-sm">
                                                    Log out
                                                </span>
                                                <FaArrowRightFromBracket />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <aside
                    id="logo-sidebar"
                    className={`${showSide ? '-translate-x-0' : ' -translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r md:translate-x-0 bg-gray-800 border-maroon`}
                    aria-label="Sidebar"
                >
                    <div className="h-full mt-1 px-4 pt-20 flex flex-col justify-between pb-4 overflow-y-auto bg-white/[99]">
                        <div>
                            <ul className="pb-4 space-y-2 font-medium">
                                {data.map((e, i) => (
                                    <li key={i} className='cursor-pointer'>
                                        <Link to={e.to}>
                                            <div className={`${e.name == title ? 'shadow-lg py-2.5 ' : ''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                                <span className={`${e.name == title ? 'bg-maroon  group-hover:text-white' : 'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-maroon group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}>
                                                    <i className={`${e.name == title ? 'text-white' : 'text-gray-900 group-hover:text-white '}`}>{e.ic}</i>
                                                </span>
                                                <span className={`${e.name == title ? 'text-black' : 'text-gray-600 group-hover:text-black'} font-semibold m7-3`}>{e.name}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='px-4 py-4 text-white bg-white rounded-lg'>
                            <p className='font-bold text-center text-maroon'>{tanggal()}</p>
                        </div>
                    </div>
                </aside>
                <div className="p-4 mt-3 bg-neutral-100/20 md:ml-64">
                    <div className=" border-gray-200  mt-14 min-h-[620px] ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
