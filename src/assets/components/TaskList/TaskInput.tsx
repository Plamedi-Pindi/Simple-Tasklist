import { ChangeEvent, KeyboardEvent } from "react"

interface TaskInputType {
    input: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void,
    onKeyDown: (e:KeyboardEvent<HTMLInputElement> ) => void
}

export default function TaskInput({ input, onChange, onClick, onKeyDown }: TaskInputType) {
    return (
        <section className="mb-8">
            <input
                value={input}
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Add new task..."
                className='bg-zinc-800 outline-none mx-auto block w-full p-2 text-sm pl-2 rounded'
            />
            <button
                onClick={onClick}
                className='bg-blue-500 p-1 rounded ml-2 hidden'
            >Add</button>
        </section>
    )
}