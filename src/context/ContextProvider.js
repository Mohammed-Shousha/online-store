import React from 'react'
import {DataProvider} from './DataContext'
import {LocationProvider} from './LocationContext'


const ContextProvider =({children})=>(
	<DataProvider>
		<LocationProvider>
			{children}
		</LocationProvider>
	</DataProvider>
)

export default ContextProvider