<<<<<<< HEAD
import React, { useState } from 'react';
import { FaRegFileAlt, FaRegFileArchive } from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaBezierCurve, FaRegBell, FaRegMessage, FaRepeat, FaRegUser, FaArrowRightFromBracket, FaCreativeCommonsNd } from 'react-icons/fa6';
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react'
import { FaRegFileAlt, FaRegFileArchive} from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaBezierCurve, FaRegBell, FaRegMessage, FaRepeat,FaRegUser,FaArrowRightFromBracket,FaCreativeCommonsNd } from "react-icons/fa6";
import img from '../images/logo.png'
import { Link } from 'react-router-dom';

>>>>>>> second/development

const ModalProfil = ({ modal }) => {
    return (
        <div className={`${modal.showYourProfile ? 'flex' : 'hidden'} absolute  items-center justify-center w-full z-[99] top-0 h-screen bg-black/20`}>
<<<<<<< HEAD
            <div className="max-w-2xl mx-4 mt-16 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                <div className="h-32 overflow-hidden rounded-t-lg">
                    <img
                        className="object-cover object-top w-full"
                        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        alt="Mountain"
                    />
                </div>
                <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
                    <img
                        className="object-cover object-center h-32"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        alt="Woman looking front"
                    />
                </div>
                <div className="mt-2 text-center">
                    <h2 className="font-semibold">Sarah Smith</h2>
                    <p className="text-gray-500">Freelance Web Designer</p>
                </div>
                <ul className="flex items-center justify-around py-4 mt-2 text-gray-700">
                    <li className="flex flex-col items-center justify-around">
                        <svg
                            className="w-4 text-blue-900 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <div>2k</div>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                        <svg
                            className="w-4 text-blue-900 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                        <div>10k</div>
                    </li>
                    <li className="flex flex-col items-center justify-around">
                        <svg
                            className="w-4 text-blue-900 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        <div>15</div>
                    </li>
                </ul>
                <div className="p-4 mx-8 mt-2 border-t">
                    <button
                        onClick={() => modal.setShowYourProfile(false)}
                        className="block w-1/2 px-6 py-2 mx-auto font-semibold text-white rounded-full bg-maroon hover:shadow-lg"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Dashboard = ({ title, children }) => {
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const data = [
        { name: 'Home', ic: <FaHouse />, to: '/home' },
        // { name: 'Struktur', ic: <FaBezierCurve />, to: '/kendaraan' },
        { name: 'Orang Tua', ic: <FaRegCircleUser />, to: '/ortu' },
        { name: 'Siswa', ic: <FaRegFileArchive />, to: '/siswa' },
        { name: 'Medical', ic: <FaRegFileAlt />, to: '/medical' }
    ];

    const data2 = [
        { name: 'Home', ic: <FaHouse />, to: '/home' },
        { name: 'Pengetahuan', ic: <FaBezierCurve />, to: '/kendaraan' },
        { name: 'Orang Tua', ic: <FaRegCircleUser />, to: '/user' }
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
=======
            <>
                {/* https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c */}
                <div className="max-w-2xl mx-4 mt-16 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                    <div className="h-32 overflow-hidden rounded-t-lg">
                        <img
                            className="object-cover object-top w-full"
                            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            alt="Mountain"
                        />
                    </div>
                    <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
                        <img
                            className="object-cover object-center h-32"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            alt="Woman looking front"
                        />
                    </div>
                    <div className="mt-2 text-center">
                        <h2 className="font-semibold">Sarah Smith</h2>
                        <p className="text-gray-500">Freelance Web Designer</p>
                    </div>
                    <ul className="flex items-center justify-around py-4 mt-2 text-gray-700">
                        <li className="flex flex-col items-center justify-around">
                            <svg
                                className="w-4 text-blue-900 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <div>2k</div>
                        </li>
                        <li className="flex flex-col items-center justify-between">
                            <svg
                                className="w-4 text-blue-900 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                            </svg>
                            <div>10k</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <svg
                                className="w-4 text-blue-900 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>
                            <div>15</div>
                        </li>
                    </ul>
                    <div className="p-4 mx-8 mt-2 border-t">
                        <button
                            onClick={() => modal.setShowYourProfile(false)}
                            className="block w-1/2 px-6 py-2 mx-auto font-semibold text-white rounded-full bg-maroon hover:shadow-lg">
                            CLose
                        </button>
                    </div>
                </div>
            </>
        </div>
    )
}
const Dashboard = ({ title, children }) => {
    const data = [
        {
            name: 'Home',
            ic: <FaHouse />,
            to: '/'
        },
        {
            name: 'Struktur',
            ic: <FaBezierCurve />,
            to: '/kendaraan'
        },
        {
            name: 'Orang Tua',
            ic: <FaRegCircleUser />,
            to: '/ortu'
        },
        {
            name: 'Siswa',
            ic: <FaRegFileArchive />,
            to: '/siswa'
        },
        {
            name: 'Medical',
            ic: <FaRegFileAlt />,
            to: '/medical'
        },

    ]
    const data2 = [
        {
            name: 'Home',
            ic: <FaHouse />,
            to: '/home'
        },
        {
            name: 'Pengetahuan',
            ic: <FaBezierCurve />,
            to: '/kendaraan'
        },
        {
            name: 'Orang Tua',
            ic: <FaRegCircleUser />,
            to: '/user'
        },


    ]

    function tanggal() {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        return currentDate

    }
    const [showProfile, setShowProfile] = useState(false)
    const [showYourProfile, setShowYourProfile] = useState(false)
    const [showSide, setShowSide] = useState(false)
    console.log(showYourProfile)
    function handleSide() {
        showSide ? setShowSide(false) : setShowSide(true)
>>>>>>> second/development
    }

    return (
        <>
            <ModalProfil modal={{ showYourProfile, setShowYourProfile }} />
            <div>
<<<<<<< HEAD
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
=======



                <nav className="fixed top-0 z-50 w-full h-[69px] bg-white/[99] border-b border-maroon">

                    <div className="h-full px-3 py-4 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center justify-start lg:ps-4 rtl:justify-end">
                                <button

                                    className="inline-flex items-center p-2 text-sm rounded-lg text-maroon md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                                >
                                    <FaBars onClick={handleSide} />

                                </button>
                                <div className='items-center hidden md:flex '>


                                    <img
                                        src={img}
                                        className=" w-[25px] bg-red-900 me-3"
>>>>>>> second/development
                                    />
                                    <span className="self-center text-xl font-bold text-gray-800 sm:text-2xl whitespace-nowrap">
                                        SMK LETRIS INDONESIA 2
                                    </span>
                                </div>
                            </div>
<<<<<<< HEAD
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button
                                            onClick={() => setShowProfile(!showProfile)}
=======


                            <div className="flex items-center">
                                <div className='flex items-center gap-5 text-gray-800 me-2'>

                                    <FaRegMessage />
                                    <FaRegBell />
                                </div>
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button
                                            onClick={() => showProfile ? setShowProfile(false) : setShowProfile(true)}
>>>>>>> second/development
                                            type="button"
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                alt="user photo"
                                            />
                                        </button>
                                    </div>
                                    <div
<<<<<<< HEAD
                                        className={`${showProfile ? 'absolute block' : 'hidden'} w-[240px] z-50 my-4 text-base list-none bg-white divide-y divide-gray-800 rounded shadow right-4 top-12 border-[0.6px] border-gray-900`}
                                        id="dropdown-user"
                                    >
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900">Admin Letris</p>
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
=======
                                        className={`${showProfile ? 'absolute block' : 'hidden'} w-[240px] z-50 my-4 text-base list-none bg-white divide-y divide-gray-800 rounded shadow right-4  top-12 border-[0.6px] border-gray-900 `}
                                        id="dropdown-user"
                                    >
                                        <div className="px-4 py-3" role="none">
                                            <p
                                                className="text-sm text-gray-900 "
                                                role="none"
                                            >
                                                Admin Letris
                                            </p>
                                            <p
                                                className="text-sm font-medium text-gray-900 truncate "
                                                role="none"
                                            >
                                                Yadika234@gmail.com

                                            </p>
                                        </div>
                                        <ul className="" role="none">
                                          
                                            <li
                                                // 
                                                className='flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:text-white hover:bg-maroon' >
                                                <span
                                                    // 

                                                    className="block text-sm "

                                                >
                                                    Your Profil
                                                </span>
                                                <FaRegUser/>

                                            </li>
                                            <li
                                                className='flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:text-white hover:bg-maroon' >
                                                <span

                                                    className="block text-sm "

                                                >
                                                    Setting
                                                </span>
                                                <FaCreativeCommonsNd/>

                                            </li>
                                            <li
                                                
                                                className='flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:text-white hover:bg-maroon' >
                                                <span
                                                    

                                                    className="block text-sm "

                                                >
                                                    Log out
                                                </span>
                                                <FaArrowRightFromBracket/>

                                            </li>
                                           

>>>>>>> second/development
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <aside
                    id="logo-sidebar"
<<<<<<< HEAD
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
=======
                    className={`${showSide ? '-translate-x-0' : '  -translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r md:translate-x-0 dark:bg-gray-800 border-maroon`}
                    aria-label="Sidebar"
                >
                    <div className="h-full mt-1  px-4 pt-20 flex flex-col justify-between pb-4 overflow-y-auto bg-white/[99]">
                        <div>

                            <ul className="pb-4 space-y-2 font-medium border-b-2">
                                {
                                    data.map((e, i) => (
                                        <li key={i} className='cursor-pointer'>
                                            <Link to={e.to}>
                                                <div className={`${e.name == title ? 'shadow-lg py-2.5 ' : ''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                                    <span className={`${e.name == title ? 'bg-maroon  group-hover:text-white' : 'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-maroon group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}><i className={`${e.name == title ? 'text-white  ' : 'text-gray-900 group-hover:text-white '}`}>{e.ic}</i></span>
                                                    <span className={` ${e.name == title ? 'text-black' : 'text-gray-600 group-hover:text-black'} font-semibold  m7-3`}>{e.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }





                            </ul>

                        </div>

                        <div className='px-4 py-4 text-white bg-white rounded-lg '>
>>>>>>> second/development
                            <p className='font-bold text-center text-maroon'>{tanggal()}</p>
                        </div>
                    </div>
                </aside>
<<<<<<< HEAD
                <div className="p-4 mt-3 bg-neutral-100/20 md:ml-64">
                    <div className=" border-gray-200 rounded-lg mt-14 min-h-[620px] w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
=======




                <div className="p-4 mt-3 bg-neutral-100/30 md:ml-64">
                    <div className=" border-gray-200 bg-neutral-100/30  rounded-lg mt-14 min-h-[620px]  w-full ">


                        {children}

                    </div>
                </div>


            </div>
        </>
    )
}

export default Dashboard
>>>>>>> second/development
