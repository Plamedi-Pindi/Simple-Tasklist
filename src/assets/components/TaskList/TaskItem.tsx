// Types
import { TaskType } from "../../../interfaces/types";

// Hooks 
import { ChangeEvent, useState, KeyboardEvent} from "react";

// Types
interface TaskItem {
    task: TaskType,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    checked: boolean,
    text: string,
    onUpdateTask: (id: number, input: string) => void,
    onDeleteTask: (id: number) => void,
}

// Icons
import {
    BsThreeDots,
    BsPencilSquare,
    BsTrash3,
    BsFloppy

} from 'react-icons/bs';

// Component Main function
export default function TaskItem({
    task,
    onChange,
    checked,
    text,
    onUpdateTask,
    onDeleteTask,
}: TaskItem) {
    const [isEditing, setEditing] = useState(false);
    const [sitting, setSitting] = useState(false);
    const [updateInput, setUpdateInput] = useState(task.title);

    //   
    const handleSittingClick = () => {
        setSitting((prev) => !prev);
    }

    //   
    const handleEditeClick = () => {
        setSitting(false);
        setEditing(true);  // close sittings
    }

    // Save throu pressing Enter key
    const handleSaveKeydown = (e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === "Enter") {
            onUpdateTask(task.id, updateInput);
            setEditing(false);
        }
    }

    //
    if (isEditing) {

        return (
            <li key={task.id}  className="flex items-center justify-between relative text-sm outline-none mb-2">
                <input
                    type="text"
                    value={updateInput}
                    onChange={(e) => {
                        setUpdateInput(e.target.value)
                    }}
                    onKeyDown={handleSaveKeydown}
                    className="border-b border-violet-500 bg-transparent w-full p-2 pl-1 outline-none text-sm "
                />

                <button onClick={() => {
                    onUpdateTask(task.id, updateInput);
                    setEditing(false);
                }}>
                    <BsFloppy className="text-sm" />
                </button>
            </li>
        )
    } else {
        return (
            <li key={task.id} className="flex items-center justify-between relative text-sm outline-none mb-6" >
                <div className="flex">
                    {/* Checkbox input */}
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        className="mr-3 bg-neutral-600"
                    />
                    {/* Title Text */}
                    <p className={`${text} `}> {task.title} </p>

                </div>

                {/* Button to open settings */}
                <button  onClick={handleSittingClick}>
                    <BsThreeDots className="ml-10" />
                </button>

                {/* Sittings list */}
                <ul className={`w-20 bg-zinc-600 p-2 absolute right-1 top-6 ${sitting ? '' : 'hidden'} text-sm text-neutral-300 cursor-pointer z-10`} >
                    <li
                        onClick={handleEditeClick}
                        className="flex items-center mb-5"
                    >
                        <BsPencilSquare className="shrink-0 mr-2 text-xs"  />
                        Edite
                    </li>
                    <li 
                        onClick={() => {
                            onDeleteTask(task.id);
                            setSitting(false);
                        }}
                        className="flex items-center"
                    >
                        <BsTrash3  className="shrink-0 mr-2 text-xs"  />
                        Delete
                    </li>

                </ul>
            </li>
        )
    }

}