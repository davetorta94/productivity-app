import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

//const init = () => {
//    return JSON.parse(localStorage.getItem('todos')) || []; //si no devuelve algo devolvera un arreglo vacio. NO ME FUNCIONA A MI
//    
//}

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'ADD TODO',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'REMOVE TODO',
            payload: id,
        }

        dispatch( action );
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'TOGGLE TODO',
            payload: id,
        }

        dispatch( action );
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
    

}
