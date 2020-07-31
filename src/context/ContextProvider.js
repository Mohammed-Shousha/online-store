import React from 'react'
import {DataProvider} from './DataContext'
import {CartItemsProvider} from './CartItemsContext'
import {LocationProvider} from './LocationContext'
import {OrdersProvider} from './OrdersContext'

const ContextProvider =({children})=>(
	<DataProvider>
		<CartItemsProvider>
			<LocationProvider>
				<OrdersProvider>
					{children}
				</OrdersProvider>
			</LocationProvider>
		</CartItemsProvider>
	</DataProvider>
)

export default ContextProvider