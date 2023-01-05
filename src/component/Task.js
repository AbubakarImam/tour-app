import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,removeTask, toggleReminder}) => {
  return (
    <div>
        {task.map((tasks)=>{
          const {id,text,day,reminder} = tasks
            return(
                <div key={id} 
                className={`bg-white m-2 p-4 
                ${reminder ? 'border-l-4 border-lime-500': ''}`}
                onDoubleClick={()=>toggleReminder(id)}>
                    <h3 className='flex justify-between items-center'>
                        {text}
                    <FaTimes className='text-red-500 font-extrabold cursor-pointer' onClick={()=>removeTask(tasks.id)}/>
                    </h3>
                    <p>{day}</p>
                    </div>
            )
        })}
    </div>
  )
}

export default Task