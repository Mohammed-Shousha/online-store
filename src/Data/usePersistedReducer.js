import { useEffect, useReducer } from 'react'

const usePersistedReducer = (reducer, initialState, key) => {
   const init = () => {
      const stringState = localStorage.getItem(key)
      if (stringState) {
         try {
            return JSON.parse(stringState)
         } catch (error) {
            return initialState
         }
      } else {
         return initialState
      }
   }
   
   const [state, dispatch] = useReducer(reducer, initialState, init)


   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state))
   }, [state, key])

   return [state, dispatch]
}

export default usePersistedReducer
