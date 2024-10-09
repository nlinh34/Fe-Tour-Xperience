import React from 'react'
import { Checkbox } from 'react-daisyui';
const DurationList: React.FC = () => {
    const List = [
        {
            name: 'up to 1 hour',
            number: 92
        },
        {
            name: '1 to 2 hour',
            number: 92
        },
        {
            name: 'Day Trips',
            number: 92
        },
        {
            name: '2 to 4 hour',
            number: 92
        },
        {
            name: '4 to 8 hour',
            number: 92
        },
        {
            name: '8 to 1 Day',
            number: 92
        },
        {
            name: '1 Day to 2 Days',
            number: 92
        }
    ]
    return (
            <div className='space-y-2 mt-8 pl-1'>
                {
                    List.map((items, index) => (
                        <div className='flex justify-between'>
                            <label key={index}
                                className='flex justify-between text-lg text-center text-stone-500 '>
                                <div className='flex space-x-2 items-center '>
                                    <div className='flex items-center justify-center rounded-lg cursor-pointer hover:bg-slate-200 w-8 h-8'><Checkbox className='w-5 h-5 accent-[#029e9d] cursor-pointer ' /></div>
                                    <div className=''>{items.name}</div>
                                </div>
                            </label>
                            <div>{items.number}</div>
                        </div>
                    ))
                }
            </div>
       
    )
}

export default DurationList
