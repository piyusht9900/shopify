import {createSlice} from "@reduxjs/toolkit";

const cartsystem =createSlice({
    name:"cart",
    initialState:[],
    reducers:{

        addcart(state,action){
            state.push(action.payload)
        },
        removeTocart(state,action){
            state.shift(action.payload)
        }
    }
})
export default cartsystem.reducer
export const {addcart,removeTocart}=cartsystem.actions