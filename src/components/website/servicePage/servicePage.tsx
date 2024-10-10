import React from 'react'
import { Link } from 'react-router-dom'
import { shape1 } from '../../../assets/tour'
import { BsFlag } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { SlDirections } from "react-icons/sl";
import { SlCompass } from "react-icons/sl";

const servicePage: React.FC<object> = () => {

    const itemlist = [
        {
            icon: BsFlag,
            title: 'Tell Us What You Want To Do'
        },
        {
            icon: IoLocationOutline,
            title: 'Share Your Travel Locations'
        },
        {
            icon: SlDirections,
            title: 'Share Your Travel Preference'
        },
        {
            icon: SlCompass,
            title: 'We Are 100% Trusted Tour Agency'
        }
    ]

    return (
        <div>
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
            <div className="flex justify-center flex-col">
                <div className='text-center'>
                    <p className='text-[#FBD037] text-2xl font-medium'>Core Of The Perfect Tour</p>
                    <div className='flex justify-center text-5xl space-x-2 font-medium font-title mt-2'>
                        <p className=''>Find</p>
                        <p className='text-[#029e9d]'>Travel Perfection</p>
                    </div>
                    <p className='text-xl mt-2 text-stone-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className='flex space-x-12 justify-center mt-8'>
                    {
                        itemlist.map((item) => {
                            const Icon = item.icon
                            return(
                            <div className='relative overflow-hidden flex flex-col w-64 h-60 items-center justify-center text-center border border-solid border-stone-200 rounded-md group'>
                                <div><Icon className='w-16 h-16 text-[#029e9d] group-hover:text-white duration-1000'/></div>
                                <Link to={'tour-explore'} className='text-2xl w-[98%] font-medium font-title group-hover:text-white duration-700' >{item.title}</Link>
                                <p className='text-center text-lg text-stone-400 mt-4 group-hover:text-white duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div className="absolute inset-0 bg-[#029e9d] transform translate-y-full transition-all duration-700 group-hover:translate-y-0 -z-10"></div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>

    )
}

export default servicePage
