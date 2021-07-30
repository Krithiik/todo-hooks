import React from 'react';

import { Button } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';

export default function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}
            style={{ margin: "1rem", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                autoFocus
                fullWidth
                style={{ width: "50%" }}
            />
            <Button variant="contained" color="secondary" onClick={toggleEditForm} style={{ marginTop: "10px", height: "40px" }}>
                Cancel
            </Button>

        </form >
    )
}