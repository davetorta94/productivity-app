import { useState } from "react"




export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  const [categories, setCategories] = useState('')
  
  

  const onAddCategory = (e) => {
    
    //if(categories.includes(e)) return;

    setCategories(e.target.value)

  }


  

  return (

    <>
    
    <li className={`list-group-item d-flex justify-content-between ${ (categories) === 'trabajo' ? 'bg-primary' : (categories) === 'ocio' ? 'bg-warning' : (categories) === 'hogar' ? 'bg-info' : ''}`}>
        <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''  }`}
          onClick={ () => onToggleTodo( todo.id ) }
        >
          { todo.description }
        </span>

    <div>

      <input type="button" value="trabajo" className="btn btn-secondary text-primary font-weight-bold btn-sm m-1" onClick={onAddCategory} />

      <input type="button" value="ocio" className="btn btn-secondary text-warning btn-sm m-1" onClick={onAddCategory} />

      <input type="button" value="hogar" className="btn btn-secondary text-info btn-sm m-1" onClick={onAddCategory} />
        
    </div>

        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) }
        >Borrar</button>
    </li>

    

      
      

  
    
    </>
  )
}

