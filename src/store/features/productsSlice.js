import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        {id: 1, name: 'product 1', description: 'description 1', price: 400},
        {id: 2, name: 'product 2', description: 'description 2', price: 300},
        {id: 3, name: 'product 3', description: 'description 3', price: 200},
        {id: 4, name: 'product 4', description: 'description 4', price: 100},
    ],
    totalPrice: 0,
    cart: [],
    showCart: false
}

const productSlice = createSlice({
  name: "product",
    initialState,
    reducers: {
        show: (state) => {
            state.showCart = true
        },
        hide: (state) => {
            state.showCart = false
        }
  }
});

export const {show, hide} = productSlice.actions


export default productSlice