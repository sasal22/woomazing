import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:[],
    error:"",
    loading:"",
    filter:{}
}

export  const clothesSlice = createSlice({
    name:"clothes",
    initialState,
    reducers:{
        getAllClothes:(state,action)=>{
            state.data = action.payload
        }
    }

})

export const {getAllClothes} = clothesSlice.actions
export default clothesSlice.reducer
