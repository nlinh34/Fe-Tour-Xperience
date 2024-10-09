import React from 'react'
import { shape1 } from '../../../assets/tour'
import { Link } from 'react-router-dom'
import { Input } from 'react-daisyui'

const BookingPage: React.FC<object> = () => {
    return (
        <div className='w-full'>
            <div className="relative h-[450px] bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-65 filter brightness-75"></div>
                <img src={shape1} className='absolute w-screen h-32 bottom-0' />
                <div className='absolute inset-0 flex flex-col justify-center items-center gap-3'>
                    <p className=' text-white text-center text-7xl rozha-one'>BOOKING</p>
                    <div className='flex gap-3 text-center text-xl'>
                        <Link to='/home' className='text-red-400'>Home</Link>
                        <p className='text-white'> | </p>
                        <Link to='/booking' className='text-white'>Booking</Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-48'>
                <div className='col-span-2'>
                    <h1 className='old-standard-ttt text-2xl font-semibold border-b-[1px] pb-4 '>Thông tin chuyến đi</h1>
                    <h2 className='old-standard-ttt text-xl font-semibold mt-4'>Thông tin cá nhân</h2>
                    <form className='mt-2 text-gray-600'>
                        <div className='flex flex-col text-lg gap-1'>
                            <label>Họ và tên</label>
                            <Input 
                            className='w-96 border border-solid border-gray-300 rounded-lg py-2 px-4'
                            placeholder='Họ và tên' />
                        </div>
                    </form>
                </div>
                <div>
                    2
                </div>
            </div>
        </div>
    )
}

export default BookingPage
