export const editData =(name, email, password, phone)=>({
    type:'EDIT_DATA',
    payload:{name, email, password, phone}
})

export const editAddresses =(address)=>({
    type:'EDIT_ADDRESSES',
    payload: address
})

export const editItem = (productId, addItem)=>({
    type:'EDIT_ITEM',
    payload:{productId, addItem}
})

export const clearCart =()=>({
    type:'CLEAR_CART'
})

export const editOrders =(order)=>({
    type:'EDIT_ORDERS',
    payload: order
})

export const signOut =()=>({
    type:'SIGN_OUT'
})