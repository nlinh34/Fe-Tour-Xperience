import React from 'react'
import { Checkbox } from 'react-daisyui';
const ModalCatagories: React.FC = () => {
    const List = [
        {
            name: 'Tour',
            number: 92
        },
        {
            name: 'Attractions',
            number: 92
        },
        {
            name: 'Day Trips',
            number: 92
        },
        {
            name: 'Outdoor Activities',
            number: 92
        },
        {
            name: 'Concert & Show',
            number: 92
        },
        {
            name: 'Indoor',
            number: 92
        },
        {
            name: 'Sight Seeing',
            number: 92
        },
        {
            name: 'Travels',
            number: 92
        },
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

export default ModalCatagories;