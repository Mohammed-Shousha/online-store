export const initData = {
    name: '',
    email: '',
    confirmed: false,
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
        case 'CONFIRM_EMAIL':
            return{
                ...data,
                confirmed: true
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
        case 'EDIT_ORDERS':
            return {
                ...data,
                orders: action.payload
            }
        case 'SIGN_OUT':
            return initData
        case 'EDIT_USER':
            return action.payload
        default:
            return data
    }
}
