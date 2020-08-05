import React, { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider =({children})=>{

	const [isSignedIn, setIsSignedIn] = useState(false)

	const [data, setData] = useState({
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[{name:'', address:'', phone:''}]
	})

	return(
		<DataContext.Provider value={{isSignedIn, setIsSignedIn, data, setData}}>
			{children}
		</DataContext.Provider>
	)
}