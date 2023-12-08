import React, { useState } from "react"
import { TodoProps } from "../types";
import { LS_KEY } from "./TodoList";
import { storedTodos } from "./TodoList";

export function Todo(todo: TodoProps) {
    
    const {title, description, isDone, id, onChangeTodo} = todo;

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const updatedChecked = e.target.checked;

        onChangeTodo({...todo, isDone: updatedChecked})

    }

    return (
        <li className={isDone ? "todo-item checked" : "todo-item"} id={`todo-item-${id}`}>
            <div>
                <h2 className={`todo-item__title-${id}`} contentEditable>{title}</h2>
                <span className="todo-item__description">{description}</span>
            </div>
            <label className="checkbox-container">
                <input className="todo-item__checkbox" type="checkbox" id={`${id}`} onChange={handleCheckboxChange} checked={isDone}/>
                <span className="todo-item__custom-checkbox"></span>
            </label>
        </li>
    )
}