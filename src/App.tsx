// Hooks
import { useState, ChangeEvent, KeyboardEvent } from 'react';

// Types
import { TaskType } from './interfaces/types';

// CSS
import './index.css'

// Components
import TaskItem from './assets/components/TaskList/TaskItem';
import TaskList from './assets/components/TaskList/TaskList';
import TaskInput from './assets/components/TaskList/TaskInput';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(tasksList);
  const [input, setInput] = useState('');


  // Add Task ==================================
  const AddTask = () => {
    if (input !== '') {
      const newTask: TaskType = {
        id: Taskindex++,
        title: input,
        done: false
      }
      setTasks([newTask, ...tasks]);
      setInput('');
    }
  }

  // Update Task ==================================
  const updateTask = (id: number, input: string) => {

    const newTasks = tasks.map(task => {
      if (task.id !== id) {
        return task;
      } else {
        return {
          ...task,
          title: input
        }
      }
    });

    setTasks(newTasks);
  }

  // Delete Task function ==================================
  const deleteTask = (id: number) => {
    const newTask = tasks.filter(task => task.id !== id);
    setTasks(newTask);
  }

  // Set Task Done function ==================================
  const TaskDone = (id: number) => {

    const newTask = tasks.map(task => {
      if (task.id !== id) {
        return task;
      } else {

        if (task.done) {
          return {
            ...task,
            done: false
          }
        } else {
          return {
            ...task,
            done: true
          }
        }

      }
    });

    setTasks(newTask);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      AddTask();
    }
  }

  // Input Change Event Handler ================================
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }


  // Main Faction ========================================
  return (
    <div className='h-screen w-[100%] flex items-center justify-center '>
      <div className="bg-zinc-700 text-white w-72 pt-6 pb-6 h-[35rem] rounded">

        {/* This Component allow user add a task */}
        <div className='pr-6 pl-6'>
          <TaskInput
            input={input}
            onChange={handleInputChange}
            onClick={AddTask}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* This component List undone tasks */}
        <div className=' pr-6 pl-6 max-h-52 mb-4 overflow-y-scroll boxScroll'>
          <TaskList>
            {tasks.map(item => item.done === false && (
              <TaskItem
                key={item.id}
                checked={item.done}
                task={item}
                onChange={() => { TaskDone(item.id) }}
                text={'text-neutral-300'}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </TaskList>
        </div>

        <hr className='border-neutral-800 mb-5' />

        {/* This component List done tasks */}
        <div className='pr-6 pl-6 max-h-52 mb-4 overflow-y-scroll boxScroll'>
          <TaskList>
            {tasks.map(item => item.done === true && (
              <TaskItem
                checked={item.done}
                task={item}
                onChange={() => { TaskDone(item.id) }}
                text={'line-through text-neutral-400'}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </TaskList>
        </div>

      </div>
    </div>
  )
}

export default App

let Taskindex = 5;
const tasksList = [
  {
    id: 1,
    title: 'Learn englesh',
    done: false
  },
  {
    id: 2,
    title: 'Learn Math',
    done: false
  },
  {
    id: 3,
    title: 'Learn Javascript',
    done: false
  },
  {
    id: 4,
    title: 'Learn React.js',
    done: false
  },
]