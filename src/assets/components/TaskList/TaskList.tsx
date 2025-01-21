import { ReactNode } from "react";

interface TaskListType {
    children: ReactNode
}


export default function TaskList({ children }:TaskListType) {
    return (
        <>
            <ul className=" w-full">
                {children}
            </ul>
        </>
    );
}