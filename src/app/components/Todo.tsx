import React, {useState} from "react"
import { TodoProps } from "../types";
import { LS_KEY } from "./TodoList";
import { storedTodos } from "./TodoList";

export function Todo({ title, description, id }: TodoProps) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const updatedChecked = e.target.checked;
        const todoToUpdate = storedTodos.find((item: TodoProps) => item.id === id);
              
        if (todoToUpdate) {
          todoToUpdate.isDone = updatedChecked; 
          localStorage.setItem(LS_KEY, JSON.stringify(storedTodos));
          console.log(todoToUpdate);
        }
      
        setIsChecked(updatedChecked);
      }

    return (
        <li className={isChecked ? "todo-item checked" : "todo-item"} id={`todo-item-${id}`}>
            <div>
                <h2 className={`todo-item__title-${id}`}>{title}</h2>
                <span className="todo-item__description">{description}</span>
            </div>
            <label className="checkbox-container">
                <input className="todo-item__checkbox" type="checkbox" id={`${id}`} onChange={handleCheckboxChange} />
                <span className="todo-item__custom-checkbox"></span>
            </label>
        </li>
    )
}