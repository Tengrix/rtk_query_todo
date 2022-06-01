import {createSlice} from '@reduxjs/toolkit';

const todoInitialState = {

}
export const todoSlice = createSlice({
    initialState:todoInitialState,
    name:'TodoReducer',
    reducers:{

    }
})

export const TodoReducer = todoSlice.reducer