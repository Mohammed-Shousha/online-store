import React, { createContext, useState, useReducer } from "react"
import {initData, DataReducer} from './DataReducer'


export const DataContext = createContext()

export const DataProvider =({children})=>{

	const [isSignedIn, setIsSignedIn] = useState(true)

	const [data, setData] = useReducer(DataReducer, initData)

	return(
		<DataContext.Provider value={{isSignedIn, setIsSignedIn, data, setData}}>
			{children}
		</DataContext.Provider>
	)
}