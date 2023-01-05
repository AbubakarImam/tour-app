import React from 'react'

const Header = ({toggleAddTask,addTaskComp}) => {
  return (
    <div className='flex justify-between p-1 m-2 mb-3'>
        <h1 className='font-black'>Task Tracker</h1>
        <button className={`p-2 px-2 rounded-md  cursor-pointer'
        ${addTaskComp? 'bg-red-500 hover:bg-red-400':'hover:bg-green-400 bg-green-500'}`} 
        onClick={toggleAddTask}>
            {addTaskComp? 'Close':'Add'}
        </button>

    </div>
  )
}

export default Header