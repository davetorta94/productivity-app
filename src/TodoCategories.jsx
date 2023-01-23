import { Link } from "react-router-dom"

export const TodoCategories = () => {

  const marcarCategoria = () => {
    console.log('categoria marcada')
  }
  return (
    <>
    
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><Link className="dropdown-item" onClick={marcarCategoria}>Trabajo</Link></li>
    <li><Link className="dropdown-item" onClick={marcarCategoria}>Hogar</Link></li>
    <li><Link className="dropdown-item" onClick={marcarCategoria}>Ocio</Link></li>
  </ul>
</div>
    </>
   
      
  )
}








