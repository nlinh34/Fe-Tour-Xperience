import React from 'react'
import { Link } from 'react-router-dom'
import { product1, shape1 } from '../../../assets/img'
import { LuMenu } from "react-icons/lu";
import { Select } from 'react-daisyui';
import { SlCalender } from "react-icons/sl";

const tourPage: React.FC<object> = () => {

    return (
        <div>
            <div>
                <div className=' flex w-screen bg-cover bg-no-repeat h-96 items-end relative '
                    style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
                    <div className='flex flex-col items-center absolute text-5xl text-center text-white font-bold inset-[44%] top-1/3'>
                        TourXplore
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
                        <div className='w-[30%]'>
                            Catagories type
                        </div>
                        <div className='w-[70%]'>
                            <div className='h-16 flex justify-between items-center'>
                                <p className='text-stone-500 text-lg'>Showing 1-5 of 80 results</p>
                                <div className='flex'>
                                    <button className='w-12 h-12 bg-yellow-400 rounded-lg flex justify-center items-center'><LuMenu className='text-white w-7 h-7' /></button>
                                    <Select defaultValue={'default'} className='ml-3 border border-solid w-40 h-12 rounded-xl pl-4 hover:border-slate-400' >
                                        <option value="default">Sort By</option>
                                        <option value="rating">Rating</option>
                                        <option value="low">Price: Low to high</option>
                                        <option value="high">Price: High to low</option>
                                    </Select>
                                </div>
                            </div>
                            <div className='flex justify-between space-x-12'>
                                <div className=' rounded-xl drop-shadow-lg h-96 '>
                                    <div className='relative flex items-center justify-center w-[100%]'>
                                        <img src={product1} className='rounded-t-xl w-[98%] h-[98%]' alt="" />
                                        <div className='absolute right-6 top-[90%] flex w-40 h-12 bg-[#029e9d] rounded-xl items-center justify-center'>
                                            <SlCalender className='w-6 h-6 mr-2 text-white' />
                                            <p className='text-white font-bold text-lg'>9 Days Tours</p>
                                        </div>
                                    </div>
                                    <div>
                                        Santorini, Oia
                                    </div>
                                </div>
                                <div className=' rounded-xl drop-shadow-lg h-96 border border-solid border-red-500'>
                                    <div className='relative w-[47%]'>
                                        <img src={product1} className='rounded-xl w-full h-full' alt="" />
                                        <div className='absolute right-3 top-[90%] flex w-40 h-12 bg-[#029e9d] rounded-xl items-center justify-center border border-solid border-red-500'>
                                            <SlCalender className='w-6 h-6 mr-2 text-white' />
                                            <p className='text-white font-bold text-lg'>9 Days Tours</p>
                                        </div>
                                    </div>
                                    <div>
                                        Santorini, Oia
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* border border-solid border-red-500 */}
                </div>
            </div>
        </div>
    )
}

export default tourPage
