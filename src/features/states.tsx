import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from '../app/store'

interface MyState {
  value: boolean,
  index:number,
  user:object,
  
}
const initialState: MyState = {
    value: false,
    index:0,
    user:{}
}

export const stateSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        setIndex: (state, {payload}) => {
            state.index = payload
        },
        setFromButtons:(state,{payload})=>{
            if(payload === "next") state.index +=1
            if(payload === "back") state.index -=1
        },
        setShowLegal:(state,{payload})=>{
            state.value = payload
        }
    }
})

export const {setIndex,setFromButtons,setShowLegal} = stateSlice.actions
export const selectCount = (state: RootState) => state.states.value
export default stateSlice.reducer
