export const initData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    addresses: [],
    cartItems: [],
    orders: []
}

export const DataReducer = (data, action) => {
    switch (action.type) {
        case 'EDIT_DATA':
            return {
                ...data,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                phone: action.payload.phone,
            }
        case 'EDIT_ADDRESSES':
            return {
                ...data,
                addresses: action.payload
            }
        case 'EDIT_CARTITEMS':
            return {
                ...data,
                cartItems: action.payload
            }
        case 'CLEAR_CART':
            return {
                ...data,
                cartItems: initData.cartItems
            }
        case 'EDIT_ORDERS':
            return {
                ...data,
                orders: [...data.orders, action.payload]
            }
        case 'SIGN_OUT':
            return initData
        default:
            return data
    }
}
