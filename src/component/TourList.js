import React from "react"
import Tour from "./Tour"

const Tours = ({tour, setTour}) => {

  //Remove A Tour
  const removeTour = (id)=> {
    setTour(
      tour.filter((tours)=> tours.id !== id)
    )
  }
 return(
  <section className='max-w-5xl mx-auto p-5 my-4'>
  {
  tour.map(tours => <Tour key={tours.id} tours={tours} removeTour={removeTour}/>)
  }
  </section>
 )
}

export default Tours