export const editData = (name, email, password, phone) => ({
    type: 'EDIT_DATA',
    payload: { name, email, password, phone }
})

export const editAddresses = (address) => ({
    type: 'EDIT_ADDRESSES',
    payload: address
})

export const editCartItems = (cartItems) => ({
    type: 'EDIT_CARTITEMS',
    payload: cartItems
})

export const editOrders = (orders) => ({
    type: 'EDIT_ORDERS',
    payload: orders
})

export const signOut = () => ({
    type: 'SIGN_OUT'
})