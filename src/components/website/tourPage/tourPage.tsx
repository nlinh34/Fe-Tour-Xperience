import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { Select } from 'react-daisyui';
import { SlCalender } from "react-icons/sl";
import { FaStar } from 'react-icons/fa'
import { product1, shape1 } from '../../../assets/tour/index';
import DurationList from '../../tourPageModal/DurationList';
import { FaArrowRightLong } from "react-icons/fa6";
import ModalCatagories from '../../tourPageModal/ModalCatagories';

const TourPage: React.FC<object> = () => {

    const [rating] = useState(5)

    return (
        <div>
            <div>
                <div className=' flex w-screen bg-cover bg-no-repeat h-96 items-end relative '
                    style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
                    <div className='flex flex-col items-center absolute text-5xl text-center text-white font-bold inset-[44%] top-1/3'>
                        TourXeprience
                        <p className='text-lg w-56 font-semibold  mt-2'>
                            <Link className='text-[#e8026a]' to={'/home'}>Home</Link> | Explore for Tour
                        </p>
                    </div>
                    <div
                        className='bg-contain w-screen h-24 z-10 	'
                        style={{ backgroundImage: `url(${shape1})` }}
                    >
                    </div>
                </div>


                <div className='flex justify-center items-center flex-col mt-2'>
                    <div className='w-[70%] flex '>

                        <div className='w-[27%] pt-2 mr-7 flex flex-col '>
                            <div>
                                {/* list bar filter */}
                                <p className='text-3xl font-[450] p-2 border-b-2 border-solid border-[#029e9d] '>Catagories Type</p>
                                <ModalCatagories />
                                <p className='text-3xl font-[450] p-2 border-b-2 border-solid border-[#029e9d] mt-8'>Duration Type</p>
                                <DurationList />
                            </div>
                        </div>

                        <div className='w-[70%]'>
                            <div className='h-16 flex justify-between items-center'>
                                <p className='text-stone-500 text-lg'>Showing 1-5 of 80 results</p>
                                <div className='flex'>
                                    <button className='w-12 h-12 bg-yellow-400 rounded-lg flex justify-center items-center'><LuMenu className='text-white w-7 h-7' /></button>
                                    <Select defaultValue={'default'} className='ml-3 border border-solid w-40 h-12 rounded-xl pl-4 hover:border-slate-400 cursor-pointer' >
                                        <option value="default">Sort By</option>
                                        <option value="rating">Rating</option>
                                        <option value="low">Price: Low to high</option>
                                        <option value="high">Price: High to low</option>
                                    </Select>
                                </div>
                            </div>
                            <div className='gap-8 grid grid-cols-2'>
                                {Array.from({ length: 6 }).map(() => (
                                    <div className=' rounded-xl drop-shadow-lg border border-solid  hover:shadow-sm hover:shadow-[#029e9d]'>
                                        <div className='relative flex items-center justify-center w-[100%] '>
                                            <div className='overflow-hidden w-full h-full rounded-t-xl '>
                                                <img src={product1} className='rounded-t-xl transition-transform duration-300 hover:scale-110' alt="" />
                                            </div>
                                            <div className='absolute right-6 top-[90%] flex w-40 h-12 bg-[#029e9d] rounded-xl items-center justify-center'>
                                                <SlCalender className='w-6 h-6 mr-2 text-white' />
                                                <p className='text-white font-bold text-lg'>9 Days Tours</p>
                                            </div>
                                        </div>
                                        <div className='p-5'>
                                            <p className='text-[#029e9d] font-medium text-lg'>Greece</p>
                                            <Link to={'/home'} className='text-2xl font-semibold'>Santorini, Oia</Link>
                                            <div className='flex items-center mt-1'>
                                                <div className='flex flex-row space-x-1 pt-2 mb-2'>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <div key={index}>
                                                            <FaStar className={`w-4 h-4  ${index < rating ? 'text-yellow-400' : 'text-slate-200'}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className='ml-2'>(12)</p>
                                            </div>
                                            <p className='mt-3 w-[92%] h-24 text-lg font-extralight'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                            <div className='flex items-center mt-1 mb-3'>
                                                <label className='text-xl font-bold text-[#029e9d]'>$170.00</label>
                                                <p className='ml-2 font-extralight text-base'>| Per person</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center mt-8'>
                                <button className='flex items-center w-32 justify-center h-12 text-white rounded-lg bg-[#029e9d]'>Load more <FaArrowRightLong className='ml-1'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPage
