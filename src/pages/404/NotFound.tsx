import React from 'react'
import { Button, Hero } from 'react-daisyui'
import { Link } from 'react-router-dom'

const NotFound: React.FC<object> = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://s5.ezgif.com/tmp/ezgif-5-6e2d8a6ce3.jpg')" }}>
        <Hero className='flex justify-center items-center'>
          <Hero.Content className="text-center">
            <div className="">
              <Link to='/home'>
                <Button className='mt-[580px] px-4 py-3 text-white font-semibold bg-rose-900 rounded-md'>Quay lại</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </div>
  )
}

export default NotFound
