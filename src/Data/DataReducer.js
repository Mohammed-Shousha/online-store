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
        case 'EDIT_ITEM':
            let newCartItems = [...data.cartItems]
            let product = data.cartItems.find(x => x[0] === action.payload.productId)
            let productIndex = data.cartItems.indexOf(product)

            if (action.payload.addItem) {
                if (data.cartItems.some(x => x[0] === action.payload.productId)) {
                    product[1]++
                } else {
                    newCartItems.push([action.payload.productId, 1])
                }
            } else {
                if (product[1] === 1) {
                    newCartItems.splice(productIndex, 1)
                } else {
                    product[1]--
                }
            }
            return {
                ...data,
                cartItems: newCartItems
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
