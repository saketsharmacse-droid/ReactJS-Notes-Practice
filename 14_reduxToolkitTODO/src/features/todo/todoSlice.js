import {createSlice, nanoid} from '@reduxjs/toolkit';
//nanoid generates unique ids.

const initialState = {
    todos: [
        {
            id: 1,
            text:"Hello World",

    }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //reducers:
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,

            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

//yeh ek structured syntax hai, aisi export krna hai reducers ko, do baar.