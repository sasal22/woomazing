import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{
        name:"",
        email:"",
        password:""
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        registerUser:(state,action)=>{
            state.user = action.payload
        },
        logOut:(state,action)=>{
            state.user = ''
        }
    }
})
export  const {registerUser,logOut} = userSlice.actions

export default userSlice.reducer