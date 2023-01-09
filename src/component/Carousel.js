import React, {useEffect, useState} from 'react'

const Carousel = ({tour}) => {
    // const images = [
    //     {id:1, img: "/img/newyork.jpeg"},
    //     {id:2, img: "/img/london.jpeg"},
    //     {id:3, img: "/img/paris.jpeg"},
    //     {id:4, img: "/img/tokyo.jpeg"}
    // ]
    const [index, setIndex] = useState(0)
    const carouselScroll = () => {
        if(index === tour.length - 1){
            return setIndex(0)
        }
        return setIndex(index + 1)
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            carouselScroll()
        },3000);
        return ()=> clearInterval(interval)
    })
  return (
    <div className='flex flex-nowrap overflow-hidden md:p-4'>
        {tour.map((images)=>{
            return <div key={images.id} style={{transform: `translate(-${index * 100}%)`}}
            className="carousel-item min-w-full mx-auto p-5 my-4 flex items-center justify-center
            ">
                <img className='w-full block min-h-52' src={process.env.PUBLIC_URL+`${images.img}`} alt={images.name}/>
            </div>
        })}
    </div>
  )
}

export default Carousel