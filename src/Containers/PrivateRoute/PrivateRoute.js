import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../../Data/DataContext'


const PrivateRoute = ({ children }) => {

   const { isSignedIn } = useContext(DataContext)

   return (
      isSignedIn ?
         children
         :
         <Navigate to='/signin' />
   )
}

export default PrivateRoute