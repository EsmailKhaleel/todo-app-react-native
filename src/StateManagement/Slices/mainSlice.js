import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadTodos } from "../../Data/storage";
import { act } from "react";

export const fetchTodos = createAsyncThunk('todos/fetchStorageTodos', async () => {
    const response = await loadTodos();
    console.log(response)
    return response
},
)
const mainSlice = createSlice({
    name: "main",
    initialState: {
        todos: [],
        status: "idle",
        filter: "All",
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.title,
                description: action.payload.description,
                date: Date.now(),
                status: 'In progress',
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload);
            const updatedTodo = state.todos[updatedTodoIndex];
            if (updatedTodoIndex !== -1) {
                updatedTodo.status = updatedTodo.status === 'In progress' ? 'Done' : 'In progress';
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "succeed";
            state.todos = action.payload;
        })
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
            })
    },
});
export const { addTodo, deleteTodo, updateTodo, setFilter } = mainSlice.actions;
export default mainSlice;