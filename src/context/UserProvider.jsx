import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {

    const [categories, setCategories] = useState()

  return (
   <UserContext.Provider value={[categories, setCategories]}>
        {children}
   </UserContext.Provider>
  )
}
