import React,{ useState} from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Task from './component/Task';
import AddTask from './component/AddTask';
import Data from './component/data';
const App = () => {
  const [task,setTask] = useState(Data);
  const [addTaskComp,setAddTaskComp] = useState(false)
  // useEffect(()=>{
  //   fetchTask()
  // },[])
  // // Fetch Tasks
  // const fetchTask = async()=>{
  //   const res = await fetch('https://abubakarimam.github.io/json.server/db.json/data');
  //   const data = await res.json();
  //   setTask(data)
  // }
  // Fetch A Single Task
  // const fetchATask = async(id)=>{
  //   const res = await fetch(`https://abubakarimam.github.io/json.server/db.json/data/${id}`);
  //   const data = await res.json();
  //   return data
  // }
  //Remove Task
  const removeTask =  (id) => {
    // await fetch(`https://abubakarimam.github.io/json.server/db.json/data/${id}`,{
    //   method: 'DELETE',
    // })
    setTask(task.filter((tasks)=>tasks.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // const dataToToggle = await fetchATask(id);
    // const updTask = {...dataToToggle,reminder: !dataToToggle.reminder};
    // const res = await fetch(`https://abubakarimam.github.io/json.server/db.json/data/${id}`,{
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(updTask)
    // })
    // const data = await res.json()
    setTask(
      task.map((tasks)=> tasks.id === id? 
      {...tasks, reminder:!tasks.reminder}:tasks))
  }
  // Add Task
  const addTask =  (tasks)=> {
    // const res = await fetch('https://abubakarimam.github.io/json.server/db.json/data', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(tasks)
    // })
    // const data = await res.json();
    // setTask([...task,data])
     const id = Math.floor(Math.random * 100) +1;
    const newTask = {id,...tasks};
    setTask([...task,newTask])
  }
  // Add task form
  const toggleAddTask = ()=> {
    setAddTaskComp(!addTaskComp)
  }

  return (
    <div className='max-w-xs md:max-w-4xl mx-auto my-8 p-6 bg-slate-200 dark:bg-black border-2 border-blue-400 rounded-md'>
      <Header toggleAddTask={toggleAddTask} addTaskComp={addTaskComp}/>
      {addTaskComp ? <AddTask addTask={addTask} />:""}
      {task.length > 0 ? <Task task={task} removeTask={removeTask} toggleReminder={toggleReminder} />:
      'NO PENDING TASK'}
      <Footer/>
    </div>
  )
}

export default App