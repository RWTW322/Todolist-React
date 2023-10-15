import { TodoProps } from "../types"

type setTodoItem = (key: string, value: TodoProps) => void;

type getTodoItem = (key: string) => TodoProps[]

export const setTodoItem: setTodoItem = (key, value) => {
    const list: TodoProps[] = getTodoItems(key)
    localStorage.setItem(key, JSON.stringify([...list, value]))
}

export const getTodoItems: getTodoItem = (key) => {
    const items = JSON.parse(localStorage.getItem(key) ?? "[]")
    return items
}