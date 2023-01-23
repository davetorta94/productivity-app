import {useTodos} from './useTodos'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';




export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();

    

  return (
    <>
    <div className="row d-flex justify-content-center mt-3">


        <div className="col-7">

            <TodoList   todos={ todos }
                        onDeleteTodo={ (id) => handleDeleteTodo(id) }
                        onToggleTodo={handleToggleTodo }/>

        </div>

        <div className="col-5">
            
            <TodoForm onNewTodo={ handleNewTodo } />

        </div>


    </div>
    </>

  )
}
