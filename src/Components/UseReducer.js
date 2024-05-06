import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increment': return state + 1
            case 'decrement': return state - 1
            case 'reset': return initialState
            default: return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {count} <br></br>
            Click events <br></br>
            <button onClick={() => { dispatch('increment') }}>Increment</button>
            <button onClick={() => { dispatch('decrement') }}>Decrement</button>
            <button onClick={() => { dispatch('reset') }}>Reset</button>
            <br></br> 
            MouseOver
            <br></br>
            <button onMouseOver={() => { dispatch('increment') }}>Increment</button>
            <button onMouseOver={() => { dispatch('decrement') }}>Decrement</button>
            <button onMouseOver={() => { dispatch('reset') }}>Reset</button>
        </div>
    )
}
