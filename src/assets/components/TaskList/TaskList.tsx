import { ReactNode } from "react";

interface TaskListType {
    children: ReactNode
}


export default function TaskList({ children }:TaskListType) {
    return (
        <>
            <ul className="mb-10 w-full">
                {children}
            </ul>
        </>
    );
}