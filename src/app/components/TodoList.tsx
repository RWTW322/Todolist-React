"use client"

import React from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { useEffect, useState } from "react";


const LS_KEY: string = "TODOLIST";

export const createUniqueId = (lastId = 0) => {
    let last = lastId;
    return () => {
        last += 1;
        return last
    }
}

export const getTodoList = () => {

    if (typeof window !== "undefined") {
        const storedTodos = localStorage.getItem(LS_KEY);
        if (!storedTodos) {
            localStorage.setItem(LS_KEY, "[]");
            return [];
        }
        return JSON.parse(storedTodos);
    } else {
        return [];
    }
}

export const addTodo = (newTodo: object) => {

    const list = getTodoList();
    localStorage.setItem(LS_KEY, JSON.stringify([...list, newTodo]));
}

interface TodoProps {
    description: string;
    title: string;
    isDone: boolean;
    id: number;
}

export let storedTodos: TodoProps[] = getTodoList();

export function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem(LS_KEY);
        if (storedData) {
            const storedTodos = JSON.parse(storedData);
            setTodos(storedTodos);
        }
    }, []);

    return (
        <div>
            <ul className="todo-list">
                {storedTodos.map((todo) => (
                    <Todo key={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} id={todo.id} />
                ))}
            </ul>
        </div>
    )
}