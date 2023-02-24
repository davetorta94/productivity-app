import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { Alternativa } from '../Alternativa'
import { TodoFilter } from '../TodoFilter'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/search' element={ <TodoFilter />}/>

    </Routes>
    
    </>
  )
}
