import React,{ useState } from 'react';
import {FaWindowClose} from 'react-icons/fa'
import {FaCaretSquareDown} from 'react-icons/fa'

const Tour = ({tours, removeTour}) => {
    const [toggleInfo, setToggleInfo] = useState(true)
    const {id, city, img, name, info} = tours
  return (
    <article className='img-container p-4 bg-gray-200 my-4 md:grid grid-cols-3 gap-4'>
        <div className='relative'>
            <img className='w-full block min-h-52' src={process.env.PUBLIC_URL+`${img}`} alt={tours.city} />
            <span className='absolute block top-[5%] right-[5%] text-green-500 
            text-4xl cursor-pointer transition-all duration-300 ease-linear opacity-0'>
                <FaWindowClose onClick={()=>removeTour(id)} />
            </span>
        </div>
        <div className='col-span-2 py-4 px-2'>
            <h3 className='uppercase text-green-500'>{city}</h3>
            <h4 className='capitalize text-gray-400 mt-1 mb-3 mx-0'>{name}</h4>
            <h5 className='capitalize flex items-center'>info{" "} 
            <span className='text-green-500 m-2 text-2xl cursor-pointer'>
                <FaCaretSquareDown onClick={()=>setToggleInfo(!toggleInfo)} />
                </span>
            </h5>
            {toggleInfo ? '':<p>{info}</p>}
        </div>
    </article>
  )
}

export default Tour