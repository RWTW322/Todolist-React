"use client"

import React, { useCallback } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TodoProps } from "../types";
import { getTodoItems, setTodoItem } from "../utils/localStorage";


export const LS_KEY: string = "TODOLIST";

export const createUniqueId = (lastId = 0) => {
    let last = lastId;
    return () => {
        last += 1;
        return last
    }
}

export const getTodoList = (): TodoProps[] => {
    if (typeof window !== "undefined") {
        const todos = getTodoItems(LS_KEY)
        return todos;
    } else {
        return [];
    }
}

export const addTodo = (newTodo: TodoProps) => new Promise<TodoProps>((res) => {
    setTodoItem(LS_KEY, newTodo)
    res(newTodo)
})

export let storedTodos: TodoProps[] = getTodoList();

export type createTodoFn = (newTodo: TodoProps) => void

export function TodoList() {
    const [showModal, setShowModal] = useState(false);

    const [todos, setTodos] = useState<TodoProps[]>([]);

    const createTodo: createTodoFn = useCallback((newTodo) => {
        addTodo(newTodo).then(todo=>{
            setTodos(rest=>([...rest, todo]))
            setShowModal(false)
        })
    }, [])

    useEffect(() => {
        const storedData = localStorage.getItem(LS_KEY);
        if (storedData) {
            const storedTodos = JSON.parse(storedData);
            setTodos(storedTodos);
        }
    }, []);

    return (
        <>
            <button className="button button-add-todo" onClick={() => setShowModal(true)}>
                ADD TODO
            </button>
            {showModal && createPortal(
                <TodoForm addTodo={createTodo} todoList={todos}/>,
                document.body
            )}
            <div>
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo key={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} id={todo.id} />
                    ))}
                </ul>
            </div>
        </>

    )
}