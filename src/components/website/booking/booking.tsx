import React from 'react'
import { travel1 } from '../../../assets/img'
import { RiMapPinLine } from 'react-icons/ri'
import { FaGrinWink, FaStar } from 'react-icons/fa'
import TitlePage from '../../Title'
import Header from '../../Header'
import TabPayment from './TabPayment'

const BookingPage: React.FC<object> = () => {

    return (
        <div className='max-w-screen mx-auto mb-10'>
            <Header />
            <TitlePage
                Title='BOOKING'
                SubTitle='Booking'
            />
            <div className='grid grid-cols-3 gap-12 mx-40 '>
                <div className='col-span-2'>
                    <h1 className='text-2xl font-semibold border-b-[1px] pb-4 '>Thông tin chuyến đi</h1>
                    <h2 className='text-lg font-semibold mt-4'>Thông tin cá nhân</h2>
                    <form className=' mt-2 text-gray-600 flex flex-col gap-3'>
                        <div className='flex flex-col text-lg gap-1'>
                            <label>Họ và tên</label>
                            <input type="text" placeholder="Họ và tên"
                                className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input type="text" placeholder="Email"
                                    className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Số điện thoại</label>
                                <input type="text" placeholder="Số điện thoại"
                                    className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col'>
                                <label>Giới tính</label>
                                <select className="select select-bordered text-base w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400">
                                    <option disabled selected>Giới tính</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label>Ngày sinh</label>
                                <input type="date" placeholder=""
                                    className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col'>
                                <label>Quốc gia</label>
                                <select className="select select-bordered text-base w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400">
                                    <option disabled selected>Quốc gia</option>
                                    <option>Việt Nam</option>
                                    <option>Nhật Bản</option>
                                    <option>Trung Quốc</option>
                                    <option>Hàn Quốc</option>
                                    <option>Đức</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label>Tỉnh / Thành phố</label>
                                <select className="select select-bordered text-base w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400">
                                    <option disabled selected>Tỉnh / Thành phố</option>
                                    <option>Đồng Nai</option>
                                    <option>Thành phố Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col'>
                                <label>Địa chỉ 1</label>
                                <input type="text" placeholder="Địa chỉ 1"
                                    className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Địa chỉ 2</label>
                                <input type="text" placeholder='Địa chỉ 2'
                                    className="input input-bordered w-auto border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                    </form>
                    <div className='bg-gray-100 w-full mt-5 p-5 rounded-xl'>
                        <div className='flex flex-row justify-start gap-3 items-start'>
                            <FaGrinWink className='text-white bg-teal-500 w-20 h-14 p-2 rounded-lg text-5xl' />
                            <div className=''>
                                <p className='font-bold text-lg'>Lưu ý:</p>
                                <p>Bạn có thể hủy vé miễn phí trong vòng 24 tiếng</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-2xl font-semibold'>Bạn muốn thanh toán bằng?</h1>
                        <TabPayment />
                        <div className='border border-dashed mt-9' />
                        <div className='flex flex-row justify-between mt-3'>
                            <div className=' flex flex-row gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-gray-600'>
                                    Bằng việc tiếp tục, bạn đã đồng ý với Chính sách và điều khoản của chúng tôi
                                </p>

                            </div>
                            <button className="px-12 py-2 rounded-xl bg-teal-500 text-white font-semibold text-xl hover:bg-yellow-300 cursor-pointer">
                                Xác Nhận
                            </button>
                        </div>
                    </div>
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
                                        <RiMapPinLine className='text-sm text-teal-500' />
                                        <p className='text-teal-500 font-semibold'>Croatia</p>
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
                                <p className='text-teal-500 cursor-pointer hover:underline'>Bạn muốn thay đổi thêm ngày?</p>
                            </div>
                            <div className='border-t-[1px] pt-3'>
                                <p className='text-gray-500'>Phòng đã chọn:</p>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-semibold'>Superior Double Rooms</p>
                                    <p>1 Phòng, 3 Người</p>
                                </div>
                                <p className='text-teal-500 cursor-pointer hover:underline'>Thay đổi lựa chọn của bạn</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md px-8 py-5 rounded-lg'>
                        <div>
                            <p className='font-semibold text-2xl'>Hóa đơn tạm tính</p>
                            <div className="mt-3 mb-2">
                                <table className='min-w-full border border-gray-300'>
                                    <tbody className='divide-y divide-gray-200'>
                                        <tr>
                                            <td className='px-4 py-2 font-medium'>Chi phí phòng</td>
                                            <td className='px-4 py-2'>$500.00</td>
                                        </tr>
                                        <tr>
                                            <td className='px-4 py-2 font-medium'>Số người</td>
                                            <td className='px-4 py-2'>3</td>
                                        </tr>
                                        <tr>
                                            <td className='px-4 py-2 font-medium'>Thuế</td>
                                            <td className='px-4 py-2'>$50.00</td>
                                        </tr>
                                        <tr>
                                            <td className='px-4 py-2 font-medium'>Phí đặt phòng</td>
                                            <td className='px-4 py-2'>Miễn phí</td>
                                        </tr>
                                        <tr className='bg-sky-950 text-white'>
                                            <td className='px-4 py-2 font-bold'>Tổng tiền</td>
                                            <td className='px-4 py-2 font-bold'>$550.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md px-8 py-5 rounded-lg'>
                        <h1 className='font-semibold text-2xl'>Lịch sử thanh toán</h1>
                        <div className='flex flex-row justify-between text-lg mt-1 text-gray-500'>
                            <p>Trước khi ở bạn cần thanh toán</p>
                            <p>$40.00</p>
                        </div>
                    </div>
                    <div className='shadow-md px-8 py-5 rounded-lg'>
                        <h1 className='font-semibold text-2xl'>Mã giảm giá (Nếu có)</h1>
                        <div className='flex flex-col justify-center gap-2 mt-3 text-lg text-gray-500'>
                            <input type="text"
                                className="input input-bordered w-full border border-solid border-gray-300 focus:outline-none focus:border-gray-400"
                            />
                            <button className='bg-sky-950 text-white rounded-lg py-2 hover:bg-yellow-300 w-auto'>Sử dụng mã</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage
