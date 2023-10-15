import React from "react"

interface TodoProps {
    title: string;
    description: string;
    isDone: boolean;
    id: number;
}

export function Todo({title, description, id}: TodoProps){

    return (
        <li className="todo-item">
            <h2 className="todo-item__title${id}">{title}</h2>
            <span className="todo-item__description">{description}</span>
            <label className="checkbox-container">
                <input className="todo-item__checkbox" type="checkbox" id={`checkbox${id}`}/>
            </label>
        </li>
    )
}