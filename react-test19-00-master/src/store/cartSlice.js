import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let idx = state.cart.findIndex((el)=>{
                return el.id === action.payload.id})
            if (idx>=0){
                state.cart = state.cart.map((el)=>{
                   if (el.id === action.payload.id){
                       return {...el,count:el.count+1}
                   }
                   else{
                       return el
                   }

                })
            }
            else {
                state.cart = [...state.cart,action.payload]
            }
        },
        deleteCart:(state,action)=>{
            state.cart = state.cart.filter((el)=>{
                console.log(action.payload)
                return el.id !== action.payload.id
            })
        }

    }
})

export default cartSlice.reducer
export const {addToCart,deleteCart} = cartSlice.actions