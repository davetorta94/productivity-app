import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
      console.log(todos)
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



    const handleFilterTodo = (category) => {
        const action = {
            type: 'FILTER TODO',
            payload: category,
        }

        dispatch(action)
    }

    return {
        ...todos,
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        handleFilterTodo
    }
    

}


//const handleCategoryTodo = (category) => {
    //    const action = {
    //        type: 'CATEGORIZE TODO',
    //        payload:  category,
    //    }
//
    //    dispatch(action)
    //}