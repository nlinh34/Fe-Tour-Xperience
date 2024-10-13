import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaRegUser, FaTelegram } from 'react-icons/fa'
import { logo } from '../assets/img'
import { Link } from 'react-router-dom'

const Header: React.FC<object> = () => {
    return (
        <div className='w-full'>
            <div>
                <div className='flex flex-row justify-end items-center px-10 py-1 gap-3 bg-pink-900 text-white text-base'>
                    <FaFacebook />
                    |
                    <AiFillTwitterCircle />
                    |
                    <FaInstagram />
                    |
                    <FaTelegram />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center px-5'>
                        <img src={logo}
                            className='w-16' />
                        <p className='text-2xl text-pink-800 font-extrabold'>TOURXPERIENCE</p>
                    </div>
                    <div className='flex flex-row gap-10 text-lg'>
                        <Link to='/home-page' className='hover:text-red-700 transition duration-700'>TRANG CHỦ</Link>
                        <Link to='/location' className='hover:text-red-700 transition duration-700'>ĐỊA ĐIỂM</Link>
                        <Link to='/service' className='hover:text-red-700 transition duration-700'>DỊCH VỤ</Link>
                        <Link to='/about-page' className='hover:text-red-700 transition duration-700'>VỀ CHÚNG TÔI</Link>
                        <div className="relative group">
                            <div>
                                <Link
                                    to="/blog"
                                    className="group-hover:text-red-700 transition duration-700"
                                >
                                    BLOG
                                </Link>
                            </div>
                            <div className="absolute left-0 hidden w-48 bg-white shadow-md group-hover:block z-50">
                                <ul className="group-hover:block">
                                    <li className="px-4 py-2 hover:bg-gray-100 ">
                                        <Link to="/blog/rooms" className="block text-gray-700 hover:text-red-700 transition duration-700 ">
                                            KHÁCH SẠN
                                        </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link to="/blog/guide" className="block text-gray-700 hover:text-red-700 transition duration-700">
                                            CẨM NANG DU LỊCH
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-center px-10'>
                        <FaRegUser />
                        <div className='flex flex-row items-center gap-2'>
                            <Link to='/login' className='hover:text-red-800'>Đăng nhập</Link>
                            /
                            <Link to='/register' className='hover:text-red-800'>Đăng ký</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 
