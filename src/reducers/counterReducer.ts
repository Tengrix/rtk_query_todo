import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    counter:0
}

export const counterSlice = createSlice({
    initialState,
    reducers:{
        onIncrement(state){
            state.counter = state.counter + 1
        },
        onDecrement(state){
            state.counter = state.counter - 1
        }
    },
    name:'counterReducer'
})
export const {onIncrement,onDecrement} = counterSlice.actions
export const counterReducer =  counterSlice.reducer