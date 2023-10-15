import { TodoProps } from "../types"

export const setTodoItem = (key: string, value: TodoProps) => {
    const list: TodoProps[] = getTodoItems(key)
    localStorage.setItem(key, JSON.stringify([...list, value]))
}

export const getTodoItems = (key: string): TodoProps[] => {
    const items = JSON.parse(localStorage.getItem(key) ?? "[]")
    return items
}