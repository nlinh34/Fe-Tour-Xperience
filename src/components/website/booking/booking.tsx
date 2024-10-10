import React from 'react'
import { shape1 } from '../../../assets/tour'
import { Link } from 'react-router-dom'
import { Input } from 'react-daisyui'
import { travel1 } from '../../../assets/img'
import { RiMapPinLine } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'

const BookingPage: React.FC<object> = () => {

    return (
        <div className='w-full mb-10'>
            <div className="relative h-[450px] bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-65 filter brightness-75"></div>
                <img src={shape1} className='absolute w-screen h-32 bottom-0' />
                <div className='absolute inset-0 flex flex-col justify-center items-center gap-3'>
                    <p className=' text-white text-center text-7xl font-title'>BOOKING</p>
                    <div className='flex gap-3 text-center text-xl'>
                        <Link to='/home' className='text-red-400'>Home</Link>
                        <p className='text-white'> | </p>
                        <Link to='/booking' className='text-white'>Booking</Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-12 mx-40 '>
                <div className='col-span-2'>
                    <h1 className='text-2xl font-semibold border-b-[1px] pb-4 '>Thông tin chuyến đi</h1>
                    <h2 className='text-lg font-semibold mt-4'>Thông tin cá nhân</h2>
                    <form className=' mt-2 text-gray-600 flex flex-col gap-3'>
                        <div className='flex flex-col text-lg gap-1'>
                            <label>Họ và tên</label>
                            <Input 
                                className=' w-auto border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-400'
                                placeholder='Họ và tên' />
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <Input
                                    className='w-auto border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-400'
                                    placeholder='Email' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Số điện thoại</label>
                                <Input
                                    className='w-auto border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-400'
                                    placeholder='Số điện thoại' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='px-8 py-5 shadow-md rounded-lg'>
                        <div className='w-full flex flex-col gap-6'>
                            <p className='font-semibold text-2xl'>Chi tiết thông tin đặt chỗ</p>
                            <div className='flex flex-row gap-5'>
                                <img src={travel1}
                                    className='w-24 h-24 rounded-md' />
                                <div>
                                    <div className='flex flex-row gap-2'>
                                        <div className='flex flex-row gap-1 text-sm text-yellow-400 mt-1'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <p className='text-gray-700'>200 Đánh giá</p>
                                    </div>
                                    <p className='font-semibold'>Adriatic Adventure – Zagreb To Athens</p>
                                    <div className='flex items-center gap-1'>
                                        <RiMapPinLine className='text-sm text-red-800' />
                                        <p className='text-red-800 font-semibold'>Croatia</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='bg-gray-100 px-3 py-2 rounded-lg'>
                                    <p className='text-gray-500'>Check In</p>
                                    <p className='font-semibold'>10/10/2024</p>
                                    <p className='text-gray-500'>15:00 - 22:00</p>
                                </div>
                                <div className='bg-gray-100 px-3 py-2 rounded-lg'>
                                    <p className='text-gray-500'>Check Out</p>
                                    <p className='font-semibold'>14/10/2024</p>
                                    <p className='text-gray-500'>01:00 - 10:00</p>
                                </div>
                            </div>
                            <div className='border-t-[1px] pt-3'>
                                <p className='text-gray-500'>Thời gian ở:</p>
                                <p className='font-semibold'>3 ngày | 2 đêm</p>
                                <p className='text-red-800 cursor-pointer hover:underline'>Bạn muốn thay đổi thêm ngày?</p>
                            </div>
                            <div className='border-t-[1px] pt-3'>
                                <p className='text-gray-500'>Phòng đã chọn:</p>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-semibold'>Superior Double Rooms</p>
                                    <p>1 Phòng, 3 Người</p>
                                </div>
                                <p className='text-red-800 cursor-pointer hover:underline'>Thay đổi lựa chọn của bạn</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md px-8 py-5 rounded-lg'>
                        <div>
                            <p className='font-semibold text-2xl'>Hóa đơn tạm tính</p>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 ">
                                <p className='text-primary'>11</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage
