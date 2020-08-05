import {ProductsList} from '../components/Database'

export const initData = {
    name:'',
    email:'',
    password:'',
    phone:'',
    addresses:[{name:'', address:'', phone:''}], 
    cartItems: Array(ProductsList.length).fill(0),
    orders:[]

}
export const DataReducer =(data, action)=>{
    switch(action.type){
        case 'EDIT_DATA':
            return {...data,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                phone: action.payload.phone,
            }
        case 'EDIT_ADDRESSES':
            return {...data,
                addresses: action.payload
            }
        case 'EDIT_ITEM':
            let newCartItems = [...data.cartItems]
            if(action.payload.method==='ADD'){
                newCartItems[action.payload.productId]++
            }else{
            newCartItems[action.payload.productId]--
            }
            return {...data,
                cartItems:newCartItems
            }
        case 'EDIT_ORDERS':
            return{...data,
                orders: [...data.orders, action.payload] 
            }
		case 'SIGN_OUT':
            return initData 
        default:
            return data
    }
}
