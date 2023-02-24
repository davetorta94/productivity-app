import { useState } from 'react'
import { useTodos } from './useTodos'




export const TodoFilter = () => {

  let {todos} = useTodos();

  const [state, setState] = useState(todos)
  
  

  let [inputValue, setInputValue] = useState([])


  const addCategoryToInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
   
  }

  


  const filtrarCategorias = (e) => {
    
    e.preventDefault();


    const filtrado = todos.filter(todo => todo.category === inputValue)


    setState(filtrado)

    console.log(filtrado)
    
    }
  
  

  return (
    <>

    <div>

      <button >
        Filtrar Categorias
      </button>

      <div >

      <form onSubmit={filtrarCategorias}>
        <input type="text" value={inputValue} onChange={addCategoryToInput} />
        <span className="mx-1">
          <button type="submit">Categoria</button>
        </span>
      </form>

      </div>

    </div>
    
    
    </>
  )
}

//<button type='submit'>submit</button>

//<input type="button" value='trabajo' className='dropdown-item' onClick={addCategoryToInput} />
//<input type="button" value='ocio' className='dropdown-item' onClick={addCategoryToInput} />
//<input type="button" value='hogar' className='dropdown-item' onClick={addCategoryToInput} />

