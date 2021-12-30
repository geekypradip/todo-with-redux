import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../action';
import styles from './counter.module.css'

const Counter = () => {
    const count = useSelector((state) => state.Count)
    const dispatch = useDispatch();
    return (
        <div className={styles.counter}>
            <h1>counter {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;
