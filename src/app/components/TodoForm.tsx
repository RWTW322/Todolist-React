"use client"

import React, { useCallback } from "react";
import { TodoProps } from "../types";
import { createTodoFn } from "./TodoList";
import { todo } from "node:test";


interface FormElements extends HTMLFormElement {
    todoTitle: HTMLInputElement
    description: HTMLInputElement
}

interface TodoFormProps { addTodo: createTodoFn, todoList: TodoProps[] }

export function TodoForm({ addTodo, todoList }: TodoFormProps) {

    const handleFormSubmit = useCallback((e: React.ChangeEvent<FormElements>) => {
        e.preventDefault();

        const title = e.target.todoTitle.value;
        const description = e.target.description.value;
        
        let newId = 1

        if(todoList.length > 0) {
            newId = todoList[todoList.length - 1]?.id + 1
        }

        const newTodo = {
            title: title,
            description: description,
            isDone: false,  
            id: newId,
        }
        console.log(newTodo.id)
        addTodo(newTodo);
    }, [addTodo, todoList])

    return (
        <>
            <div className="form-wrapper">
                <form className="todo-form" onSubmit={handleFormSubmit}>
                    <h2 className="todo-form__title">ADD TODO</h2>
                    <input type="text" name="todoTitle" className="todo-form__input-title" id="input-title" placeholder="Title" autoFocus />
                    <input type="text" name="description" className="todo-form__input-description" id="input-description" placeholder="Description" />
                    <button className="todo-form-btn__input-submit button" id="submit-btn" type="submit">ADD</button>
                </form>
            </div>
        </>
    )
}