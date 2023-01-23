import React from 'react'
import { NavBar } from './NavBar'
import { TodoApp } from './TodoApp'

export const App = () => {
    
  return (
    <>
      <div className='row'>
        <div className="col-12">
          <NavBar />

        </div>
      </div>

      <div className="row">
        <div className="col-12">
          
          <TodoApp />

        </div>
      </div>

    
        
    </>
    
  )
}
