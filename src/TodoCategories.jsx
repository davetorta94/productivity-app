import { useState } from "react"

export const TodoCategories = ({ onNewCategory }) => {

  
  const [inputValue, setInputValue] = useState('')
  
  const marcarCategoria = (e) => {
    
    setInputValue(e.target.value)


  }

  const onSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim());
    setInputValue('');
    console.log(inputValue)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="m-1">

        <input type="text" placeholder="define una categoria" value={inputValue} onChange={marcarCategoria} />

        <input type="submit" className="btn btn-dark" />
        
      </form>


    </>
   
      
  )
}





//    <div className="dropdown">
//  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//    Categorias
//  </button>
//  <ul className="dropdown-menu dropdown-menu-dark" onClick={marcarCategoria}>
//    <li className="dropdown-item" value='trabajo'>Trabajo</li>
//    <li><Link className="dropdown-item" value='hogar' >Hogar</Link></li>
//    <li><Link className="dropdown-item" value='ocio' >Ocio</Link></li>
//  </ul>
//</div>



