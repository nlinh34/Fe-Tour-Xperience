import React from 'react';
import { shape1 } from '../assets/tour';
import { Link } from 'react-router-dom';

interface TitlePageProps {
  Title: string;
  SubTitle: string;
}

const TitlePage: React.FC<TitlePageProps> = ({
  Title,
  SubTitle
}) => {
  return (
    <div className="w-full">
      <div className="relative h-[450px] bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/10327.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-65 filter brightness-75"></div>
        <img src={shape1} className='absolute w-screen h-32 bottom-0' />
        <div className='absolute inset-0 flex flex-col justify-center items-center gap-3'>
          <p className=' text-white text-center text-7xl font-title'>{Title}</p>
          <div className='flex gap-3 text-center text-xl'>
            <Link to='/home' className='text-red-400'>Home</Link>
            <p className='text-white'> | </p>
            <Link to='' className='text-white'>{SubTitle}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;