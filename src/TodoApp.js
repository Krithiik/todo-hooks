import React, { useEffect } from 'react';
import useTodoState from "./hooks/useTodoState";
import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from "./TodoForm"
export default function TodoApp() {

    const initTodos = [
        { id: 1, task: "clean", completed: false },
        { id: 2, task: "clean", completed: true },
        { id: 3, task: "clean", completed: false },
    ]
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos), [todos]);
    })

    return (
        <Paper style={{ height: "100vh", background: "#e2e9f2" }}>
            <AppBar color="secondary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>
                        Todos with hooks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }} >
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}
