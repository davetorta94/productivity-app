import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
name: 'todo',
initialState: {
    todos: [],
    filtered: false
 },
reducers: {
addNewTodo: (state, action ) => {
    state.todos.push(action.payload);
 },
filterTodosByCategory: (state, action) => {
    state.filtered = true;
    state.todos.filter( todo => todo.category === action.payload)
}
}
});
export const { addNewTodo, filterTodosByCategory } = todoSlice.actions;