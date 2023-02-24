import { NavBar } from './NavBar'
import { TodoApp } from './TodoApp'

export const App = () => {

  
    
  return (
    <>
      <div className='row m-0 '>
        <div className="col-12 p-0">
          <NavBar />

        </div>
      </div>

      <div className="row body-background">
        <div className="col-12">
          
          <TodoApp />

        </div>
      </div>

    
        
    </>
    
  )
}





