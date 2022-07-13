import React, { createContext, useState } from "react"

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {

   const [address, setAddress] = useState(null)

   return (
      <LocationContext.Provider value={{ address, setAddress }}>
         {children}
      </LocationContext.Provider>
   )
}