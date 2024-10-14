import React, { useState } from 'react'
import { FaCreditCard } from 'react-icons/fa'
import { card } from '../../../assets/img'

const TabPayment: React.FC<object> = () => {
    const [activeTab, setActiveTab] = useState('tab1')

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }
    return (
        <div>
            <div className='flex flex-row gap-3 mt-3'>
                <button
                    onClick={() => handleTabClick('tab1')}
                    className={`border border-solid border-gray-200 rounded-lg py-3 px-14 text-lg hover:bg-teal-500 hover:text-white transition duration-500
                        ${activeTab === 'tab1' ? 'bg-teal-500 text-white' : ''} `}>
                    Credit / Debit Card
                </button>
                <button
                    onClick={() => handleTabClick('tab2')}
                    className={`border border-solid border-gray-200 rounded-lg py-3 px-14 text-lg hover:bg-teal-500 hover:text-white transition duration-500
                        ${activeTab === 'tab2' ? 'bg-teal-500 text-white' : ''} `}>
                    Ví điện tử
                </button>
            </div>
            <div className=' '>
                {activeTab === 'tab1' &&
                    <div>
                        <div className='flex flex-row items-center gap-2 text-xl font-semibold border-b border-dotted border-gray-200 py-4'>
                            <FaCreditCard />
                            <p>Credit Card</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4 items-center'>
                            <div className='text-lg text-gray-500'>
                                <div className='flex flex-col mt-2'>
                                    <label>Số chủ thẻ</label>
                                    <input type="text"
                                        className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                    />
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <label>Ngày hết hạn</label>
                                    <input type="text" placeholder="Ngày hết hạn"
                                        className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                    />
                                </div>
                            </div>
                            <div className='text-lg text-gray-500'>
                                <div className='flex flex-col mt-2'>
                                    <label>Số thẻ</label>
                                    <input type="text" placeholder="**** **** **** ****"
                                        className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                    />
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <label>CVC/CVV</label>
                                    <input type="text" placeholder="CVC/CVV"
                                        className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <img src={card} alt="" />
                            </div>
                        </div>
                    </div>
                }
                {activeTab === 'tab2' &&
                    <div>
                        33333
                    </div>
                }
            </div>
        </div>
    )
}

export default TabPayment
