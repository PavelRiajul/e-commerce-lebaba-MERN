import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState ={
    products: [],
    selectedItems: 0,
    totalPrice: 0
}
//calculate cart total
const calculateCartTotals = (products) => {
    const selectedItems = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + product.quantity * product.price , 0)

    return {selectedItems, totalPrice};
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const isExist = state.products.find(product => product._id === action.payload._id);
            //console.log(isExist)
            if(!isExist){
                state.products.push({...action.payload, quantity: 1})
                Swal.fire({
                    text:"Product added successfully!",
                    confirmButtonText: "It's Ok"
                })
            } else{
              Swal.fire({
                    title: 'Error!',
                    text: 'Product already Added to Cart',
                    icon: 'error',
                    confirmButtonText: "It's Ok"
                  })
            }
            const totals = calculateCartTotals(state.products);
            state.selectedItems = totals.selectedItems;
            state.totalPrice = totals.totalPrice;
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer