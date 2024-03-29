export const editData = (name, email, password, phone) => ({
   type: 'EDIT_DATA',
   payload: { name, email, password, phone }
})

export const confirm = () => ({
   type: 'CONFIRM_EMAIL'
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

export const editUser = (user) => ({
   type: 'EDIT_USER',
   payload: user
})