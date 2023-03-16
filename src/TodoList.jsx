import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem"







export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, onNewCategory }) => {

  const [isFiltered, setisFiltered] = useState(false)

  const [state, setState] = useState(todos)
  
  let [inputValue, setInputValue] = useState([])

  const [categorisedTodos, setCategorisedTodos] = useState(todos)



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( categorisedTodos ) );

  
}, [categorisedTodos])

  



  const addCategoryToInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
   
  }

  const updatedTodos = (updatedTodo)=> {
    const todosUpdated = categorisedTodos.map(todo => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    } else {
      return todo;
    }
  })

  setCategorisedTodos(todosUpdated)

  console.log(todosUpdated)
};



  
  


  const filtrarCategorias = (e) => {
    
    e.preventDefault();

    const filtrado = categorisedTodos.filter(todo => todo.category === inputValue)

    setState(filtrado)

    setisFiltered(true)

    console.log(filtrado)
    
    }

  const anularFiltradoCategorias = (e) => {
    setisFiltered(false)
  }
  
  return (

    <>

    <div className="container-fluid w-100 mt-5">

      
      <div className="row d-flex contenedor-tareas mt-3">
        
      { !isFiltered ? (
      <>
            <div className="row">
               <div className="col-12 mb-2 d-flex justify-content-center">
                         <form onSubmit={filtrarCategorias}>
                           <input type="text" className="input" value={inputValue} onChange={addCategoryToInput} />
                           <span className="mx-1">
                             <button type="submit" className="boton">Filtrar Categorias</button>
                           </span>
                         </form>
                     </div>
               </div>
              
                <div className="col-8 mt-4">
                  <ul className="list-group">
                     {
                         todos.map( todo => (
                           <TodoItem 
                               key={ todo.id } 
                               todo={ todo }
                               onDeleteTodo={ onDeleteTodo } 
                               onToggleTodo={ onToggleTodo }
                               onNewCategory={ onNewCategory }
                               updatedTodos={updatedTodos}

                               />
                           ))
                         }
                   </ul>
                   </div>
              
              
              
              
         
      
      </>
    ) : (
      <>

                <div className="row">
                      <div className="col-12 mb-2 mx-5 d-flex justify-content-center">
                                <form onSubmit={anularFiltradoCategorias}>
                                  <span className="mx-1">
                                    <button type="submit" className="boton">Anular Filtrado</button>
                                  </span>
                                </form>
                            </div>
                      </div>
       
              
                <div className="col-8">
                  <ul className="list-group">
                     {
                         state.map( todo => (
                           <TodoItem 
                               key={ todo.id } 
                               todo={ todo }
                               onDeleteTodo={ onDeleteTodo } 
                               onToggleTodo={ onToggleTodo }
                               onNewCategory={ onNewCategory }

                               />
                           ))
                         }
                   </ul>
                   </div>

      
      </>
    )

    }

            
      </div>
    </div>
    
    
    
    
    
    </>

    
  )
}
