
import { useState } from "react"





export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onNewCategory }) => {



  const [inputValue, setInputValue] = useState('')



  const onAddCategory = (e) => {
    
    setInputValue(e.target.value)
    

  }

    const addCategoryToTodo = (e) => {
    e.preventDefault()
    todo.category = inputValue;
    onNewCategory(inputValue)
    console.log(todo.category)
  }

 
  


  

  return (

    <>
    
    <div className="row">
      <div className="col-8 lista-tareas p-0">
        <li className={`list-group-item d-flex justify-content-between ${ (todo.category) === 'trabajo' ? 'bg-primary' : (todo.category) === 'ocio' ? 'bg-warning' : (todo.category) === 'hogar' ? 'bg-info' : ''}`}>
              <span 
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''  }`}
                onClick={ () => onToggleTodo( todo.id ) }
              >
                { todo.description }
              </span>

        
          <div className="input-categoria">
            <form onSubmit={addCategoryToTodo}>
              <input type="text" value={inputValue} onChange={onAddCategory} placeholder="Categoria?" />
                <button type="submit" className="boton">Añadir</button>
            </form>
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



 

