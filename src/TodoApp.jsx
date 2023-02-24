import {useTodos} from './useTodos'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
//import { TodoFilter } from './TodoFilter';
import { UserProvider } from './context/UserProvider';
import { useState } from 'react';
import { TodoFilter } from './TodoFilter';




export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, handleFilterTodo} = useTodos();

    const [categories, setCategories] = useState('');

    const onAddCategory = (newCategory) => {

    setCategories( newCategory)
    }

    const prueba = todos.toString()
    

  return (
    <>

    <UserProvider>
      <div className="container-fluid">
        
    
        <div className="row d-flex justify-content-center">
    
    
          <div className="col-2">
              
              <TodoForm onNewTodo={ handleNewTodo } />
    
          </div>

          
    
        </div>

        <div className="row">


        <div className="col-12 mt-2">
    
            <TodoList   todos={ todos }
                onDeleteTodo={ (id) => handleDeleteTodo(id) }
                onToggleTodo={handleToggleTodo }
                onNewCategory={ (value) => onAddCategory(value)}
                />

        </div>
          
        </div>
    
      </div>
      
    </UserProvider>
    </>
        

  )
}

//<div className="col-2">
//    <TodoFilter onNewFilter={ handleFilterTodo }/>
//</div>

//<div className="col-2" >
//  <TodoFilter onNewFilter={handleFilterTodo}
//               todos={todos} />
// </div>