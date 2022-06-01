import React from 'react';
import {useTypedDispatch} from '../customHooks/useTypedDispatch';
import {useTypedSelector} from '../customHooks/useTypedSelector';
import {onDecrement, onIncrement} from '../reducers/counterReducer';
import s from './Counter.module.css'


const Counter = () => {
    const dispatch = useTypedDispatch()
    const counter = useTypedSelector(state => state.counterReducer.counter)
    const increment = ()=>{
        dispatch(onIncrement())
    }
    const decrement = ()=>{
        dispatch(onDecrement())
    }
    return (
        <div className={s.counterBlock}>
            <button onClick={increment}>+</button>
            {counter}
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;