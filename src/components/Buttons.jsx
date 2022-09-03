import React from 'react'
import { useDispatch } from 'react-redux'
import {increment, decrement, reset} from '../store/features/counterSlice'

const Buttons = () => {
    const dispatch = useDispatch()

    const addNumber = () => {
        dispatch(increment());

    }

    const removeNumber = () => {
        dispatch(decrement())

    }

    const resetNumber = () => {
        dispatch(reset())

    }
  return (
    <div>
      <button onClick={addNumber}>+</button>
      <button onClick={removeNumber}>-</button>
      <button onClick={resetNumber}>reset</button>
    </div>
  );
}

export default Buttons
