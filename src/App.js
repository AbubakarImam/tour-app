import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Tours from './component/TourList'
import Footer from './component/Footer'
import { tourData } from './tourData'
const App = () => {
  const[tour,setTour] = useState(tourData);
  return (
    <div className='h-screen bg-slate-50'>
        <Navbar />
        <Home tour={tour} />
        <Tours tour={tour} setTour={setTour}/>
        <Footer />
        
    </div>
  )
}

export default App