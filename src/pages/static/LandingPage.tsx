import React from 'react'
import { GoPlay } from 'react-icons/go'
import { Link } from 'react-router-dom'

const LandingPage: React.FC<object> = () => {
  return (
    <div >
      <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
        <div className='block pl-40 pt-36'>
          <h1 className='text-white font-bold text-9xl'>TOUR</h1>
          <h1 className='text-white font-bold text-9xl'>XPERIENCE</h1>
          <p className='text-white w-[670px] italic text-sm pt-2'>
            Cung cấp các chuyến đi du lịch kết hợp với các trải nghiệm độc đáo.
            Chúng tôi không chỉ cung cấp thông tin về các tour du lịch mà còn
            nhấn mạnh vào trải nghiệm cá nhân, giúp người dùng có những kỷ niệm đáng nhớ
            từ những chuyến đi đó.
          </p>
          <Link to='/home-page' >
            <button className='text-white border border-solid-2 px-5 py-2 border-pink-800 mt-5 transition transform hover:scale-110 duration-700 hover:bg-pink-500 font-semibold'>
              <div className='flex flex-row items-center gap-1'>
                <p>TRẢI NGHIỆM</p>
                <GoPlay />
              </div>
            </button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
