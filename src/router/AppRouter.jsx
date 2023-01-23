import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { Alternativa } from '../Alternativa'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/*' element={ <Alternativa />}/>

    </Routes>
    
    </>
  )
}
