import React, { createContext, useState } from "react"

export const LocationContext = createContext()

export const LocationProvider =({children})=>{

	const [marker, setMarker] = useState({lat:null, lng:null})

	return(
		<LocationContext.Provider value={{marker, setMarker}}>
			{children}
		</LocationContext.Provider>
	)
}