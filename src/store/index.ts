import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from '../reducers/counterReducer';
import {todoAPI} from '../api/todoAPI';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer:{
        counterReducer:counterReducer,
        [todoAPI.reducerPath]:todoAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoAPI.middleware, thunk)

})

export type AppRootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch