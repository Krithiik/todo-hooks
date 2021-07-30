import { useState } from "react";
import uuid from "uuid/dist/v4";
import useLocalStorageState from "./useLocalStorageState";
export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const toggledTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(toggledTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo);
        setTodos(updatedTodos);
    }
    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }
}

