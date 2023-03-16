import { useState } from "react"


export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onNewCategory, updatedTodos }) => {



  const [inputValue, setInputValue] = useState('')



  

  const onAddCategory = (e) => {
    setInputValue(e.target.value)
    
    
  }

  const updateNewTodo = () => {
    const updatedTodo = { ...todo, category: inputValue }
    updatedTodos(updatedTodo)
  }

 
  
  

  return (

    <>
    
    <div className="row">
      <div className="col-8 lista-tareas p-0">
        <li className={`list-group-item d-flex justify-content-between ${ (todo.category) === 'trabajo' ? 'bg-trabajo' : (todo.category) === 'ocio' ? 'bg-ocio' : (todo.category) === 'hogar' ? 'bg-hogar' : ''}`}>
              <span 
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''  }`}
                onClick={ () => onToggleTodo( todo.id ) }
              >
                { todo.description }
              </span>

        
          <div className="input-categoria">
            <form onSubmit={updateNewTodo}>
              <input type="text" value={inputValue} onChange={onAddCategory} placeholder="¿Categoria?" />
                
            </form>
              {todo.category ? <div className="mx-4 my-2 category-style"><p>{todo.category}</p></div> : <p></p>

              }
          </div>

          

              <button 
                className="btn btn-danger boton-eliminar"
                onClick={ () => onDeleteTodo( todo.id ) }
                >Borrar
              </button>
          </li>
      </div>

      <div className="col-1">
        <button
          className="btn btn-danger boton-externo"
          onClick={ () => onDeleteTodo( todo.id ) }>
          X
        </button>
      </div>
        
        
    </div>

  
    
    </>
  )
}