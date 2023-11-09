'use client'

/* Core */
import { useState, useEffect } from 'react'
import type { ReduxState } from '@/lib/redux'


/* Instruments */
import {
    counterSlice,
    useSelector,
    useDispatch,
    selectCount,
    incrementAsync,
    incrementIfOddAsync,
} from '@/lib/redux'
import styles from './counter.module.css'

export const Counter = () => {
    const dispatch = useDispatch()
    //const count = useSelector(selectCount)
    const counter = useSelector((state: ReduxState) => state.counter)
    const [value, setValue] = useState(0)
    const [incrementAmount, setIncrementAmount] = useState(2)

    useEffect(() => {
        setValue(counter.value)

    }, [counter])

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterSlice.actions.decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{value}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(counterSlice.actions.increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementAmount))}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    )
}