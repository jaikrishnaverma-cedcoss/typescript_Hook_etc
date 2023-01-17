import { type } from '@testing-library/user-event/dist/type'
import React, { useCallback, useReducer, useState } from 'react'

type InitialType = {
    count: number
}
type avtionType = {
    type: string
    payload: number
}
const initialState: InitialType = { count: 0 };

function reducer(state: InitialType, action: avtionType) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - Number(action.payload) };
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <button onClick={() => dispatch({ type: "increment", payload: 1 })} className='b'>you Clicked me {state.count} times</button>
    )
}

export default Counter