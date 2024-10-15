import React from 'react'
import { Link } from 'react-router-dom'
import { BsFlag } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { SlDirections } from "react-icons/sl";
import { SlCompass } from "react-icons/sl";
import Header from '../../Header';
import TitlePage from '../../Title';

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
            <Header />
                <TitlePage 
                Title='SERVICE'
                SubTitle='Service'
                />
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
