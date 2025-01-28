import React from 'react'
import { Link } from 'react-router-dom'

const Invoice = () => {
    return (
        <div className='bg-gray-200'>
            {/* Invoice */}
            <div className="max-w-[85rem] px-4 sm:px-6  lg:px-8 mx-auto py-10 sm:my-0">
                <div className="mx-auto sm:w-11/12 lg:w-3/4">
                    {/* Card */}
                    <div className="relative flex flex-col p-4 bg-white shadow-xl sm:p-10 sm:py-12 rounded-xl ">
                        {/* Grid */}
                        <div className="flex justify-between  md:h-[130px] sm:h-[100px] h-[80px items-center">
                            <div className='http://localhost:5173/w-200px h-[130px]'>

                                <div className='absolute left-0 bg-maroon md:h-[130px] sm:h-[100px] h-[80px] text-white flex justify-center items-center ps-12 pe-8' >

                                    <h1 className='font-bold leading-7 tracking-wider sm:text-xl md:text-4xl'>LETRIS INDONESIA 2</h1>
                                </div>
                            </div>
                            {/* Col */}
                            <div className="flex items-center text-end">
                                <div>

                                    <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl ">
                                        Invoice #
                                    </h2>
                                    <span className="block mt-1 text-gray-500 dark:text-neutral-500">
                                        3682303
                                    </span>
                                </div>
                                <div className='w-[30px] h-[40px] '>

                                    <div className='w-[50px] h-[40px] bg-maroon absolute right-0'></div>
                                </div>

                            </div>
                            {/* Col */}
                        </div>
                        <h1 className="pb-4 mt-8 text-xl not-italic font-semibold tracking-wide text-gray-800 border-b-2 w-fit">

                            Allam Syah Wardana Answar
                            <br />
                        </h1>
                        {/* End Grid */}
                        {/* Grid */}
                        <div className="grid gap-3 mt-5 sm:grid-cols-2">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 ">
                                    Ditujukan Kepada:
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-800 ">
                                    Sara Williams
                                </h3>
                                <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                                    280 Suzanne Throughway,
                                    <br />
                                    Breannabury, OR 45801,
                                    <br />
                                    United States
                                    <br />
                                </address>
                            </div>
                            <div className="space-y-2 sm:text-end">
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Invoice date:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            03/10/2018
                                        </dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Due date:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            03/11/2018
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        {/* End Grid */}
                        {/* Table */}
                        <div className="mt-8">
                            <div className="p-4 space-y-4 border border-gray-200 rounded-lg dark:border-neutral-700">
                                <div className="hidden sm:grid sm:grid-cols-5">
                                    <div className="text-xs font-medium text-gray-500 uppercase sm:col-span-2 dark:text-neutral-500">
                                        Item
                                    </div>
                                    <div className="text-xs font-medium text-gray-500 uppercase text-start dark:text-neutral-500">
                                        Qty
                                    </div>
                                    <div className="text-xs font-medium text-gray-500 uppercase text-start dark:text-neutral-500">
                                        Rate
                                    </div>
                                    <div className="text-xs font-medium text-gray-500 uppercase text-end dark:text-neutral-500">
                                        Amount
                                    </div>
                                </div>
                                <div className="hidden border-b border-gray-200 sm:block dark:border-neutral-700" />
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            Design UX and UI
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">5</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $500
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 sm:hidden dark:border-neutral-700" />
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            Web project
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">24</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $1250
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 sm:hidden dark:border-neutral-700" />
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            SEO
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">6</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $2000
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            SEO
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">6</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $2000
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            SEO
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">6</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $2000
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Item
                                        </h5>
                                        <p className="font-medium text-gray-800 ">
                                            SEO
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Qty
                                        </h5>
                                        <p className="text-gray-800 ">1</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Rate
                                        </h5>
                                        <p className="text-gray-800 ">6</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden dark:text-neutral-500">
                                            Amount
                                        </h5>
                                        <p className="text-gray-800 sm:text-end ">
                                            $2000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Table */}
                        {/* Flex */}
                        <div className="flex mt-8 sm:justify-end">
                            <div className="w-full max-w-xl space-y-2 sm:text-end">
                                {/* Grid */}
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Subtotal:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            $2750.00
                                        </dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Total:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            $2750.00
                                        </dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Tax:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            $39.00
                                        </dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Amount paid:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            $2789.00
                                        </dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 ">
                                            Due balance:
                                        </dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                            $0.00
                                        </dd>
                                    </dl>
                                </div>
                                {/* End Grid */}
                            </div>
                        </div>
                        {/* End Flex */}
                        <div className="flex items-center mt-8 sm:mt-16">
                            {/* <div className='bg-maroon w-[40px] h-[20px] absolute left-0 '></div> */}
                            <div>

                                <h4 className="text-xl font-semibold text-gray-800 ">
                                    Thank you!
                                </h4>
                                <p className="text-gray-500 dark:text-neutral-500 mt-2 w-[80%]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae reprehenderit, illo vero saepe quia dicta voluptatum. Quisquam debitis laudantium a incidunt dolor exercitationem, possimus ullam! A provident fugiat cupiditate.
                                </p>

                            </div>
                        </div>
                        <div className='flex flex-row-reverse justify-between mt-4'>

                            <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">
                                © 2024 Preline.
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                <p className="block text-sm font-medium text-gray-800 ">
                                    SMK LETRIS INDONESIA 2@site.com
                                </p>
                                <p className="block text-sm font-medium text-gray-800 ">
                                    +1 (062) 109-9222
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* End Card */}
                    {/* Buttons */}

                    <div className='flex justify-end w-full gap-3 mt-8'>

                        <Link
                            type="submit"
                            className="flex items-center gap-3 px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
                        >
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polylinpe points="7 10 12 15 17 10" />
                                <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                            <p>PDF</p>
                        </Link>
                        <button
                            to={'/forumSiswa2'}
                            type="submit"
                            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none "
                        >

                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                            <p>Print</p>


                        </button>
                    </div>

                </div>
            </div>
            {/* End Invoice */}
        </div>

    )
}

export default Invoice
