"use client"

import React from "react";
import { useState } from "react";
import { storedTodos } from "./TodoList";

let createUniqueId = (lastId = 0) => {
    let last = lastId;
    return () => {
        last += 1;
        return last
    }
}

export function TodoForm({ addTodo, createUniqueId }: { addTodo: Function, createUniqueId: Function }) {

    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    function handleFormSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const uniqueId = createUniqueId(storedTodos[storedTodos.length - 1]?.id);

        const newTodo = {
            title: titleValue,
            description: descriptionValue,
            isDone: false,  
            id: uniqueId,
        }

        addTodo(newTodo);
        console.log(newTodo)
        setTitleValue("");
        setDescriptionValue("");
    }

    return (
        <>
            <div className="form-wrapper">
                <form className="todo-form" onSubmit={handleFormSubmit}>
                    <h2 className="todo-form__title">ADD TODO</h2>
                    <input onChange={(e) => setTitleValue(e.target.value)} type="text" name="title" className="todo-form__input-title" id="input-title" placeholder="Title" autoFocus />
                    <input onChange={(e) => setDescriptionValue(e.target.value)} type="text" name="description" className="todo-form__input-description" id="input-description" placeholder="Description" />
                    <button className="todo-form-btn__input-submit button" id="submit-btn" type="submit">ADD</button>
                </form>
            </div>
        </>
    )
}