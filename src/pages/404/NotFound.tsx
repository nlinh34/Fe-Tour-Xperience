import React from 'react'
import { Button, Hero } from 'react-daisyui'
import { Link } from 'react-router-dom'

const NotFound: React.FC<object> = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('https://s3.ezgif.com/tmp/ezgif-3-cf2c6be7b9.webp')` }}>
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
