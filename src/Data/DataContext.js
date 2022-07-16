import React, { createContext } from "react"
import { initData, DataReducer } from './DataReducer'
import usePersistedState from './usePersistedState'
import usePersistedReducer from './usePersistedReducer'


export const DataContext = createContext()

export const DataProvider = ({ children }) => {

   const [isSignedIn, setIsSignedIn] = usePersistedState('isSignedIn', false)

   const [confirmNav, setConfirmNav] = usePersistedState('confirmNav', false)

   const [data, setData] = usePersistedReducer(DataReducer, initData, 'Data')

   return (
      <DataContext.Provider value={{ isSignedIn, setIsSignedIn, confirmNav, setConfirmNav, data, setData }}>
         {children}
      </DataContext.Provider>
   )
}