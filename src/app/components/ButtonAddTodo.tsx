"use client"

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TodoForm } from "./TodoForm";
import { addTodo, createUniqueId, getTodoList } from "./TodoList"

export function ButtonAddTodo() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="button button-add-todo" onClick={() => setShowModal(true)}>
                ADD TODO
            </button>
            {showModal && createPortal(
                <TodoForm addTodo={addTodo} createUniqueId={createUniqueId}/>,
                document.body
            )}
        </>
    )
}