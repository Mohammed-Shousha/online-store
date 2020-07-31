import React, { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider =({children})=>{

	const [isSignedIn, setIsSignedIn] = useState(false)

	const [signUpData, setSignUpData] = useState({
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[{name:'', address:'', phone:''}]
	})

	const [signInData, setSignInData ] = useState({
		signInEmail:'',
		signInPassword:''
	})

	return(
		<DataContext.Provider value={{isSignedIn, setIsSignedIn, signUpData, setSignUpData, signInData, setSignInData}}>
			{children}
		</DataContext.Provider>
	)
}