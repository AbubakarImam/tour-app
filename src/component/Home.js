import React from 'react';
import Carousel from './Carousel';

const Home = ({tour}) => {
  return (
    <div className='max-w-5xl mx-auto md:p-5 my-4 bg-slate-100'>
      <Carousel tour={tour} />
      <h2 className='text-green-400 text-center font-extrabold'>
        Discover and Live your Dream Adventures
        </h2>
    </div>
  )
}

export default Home