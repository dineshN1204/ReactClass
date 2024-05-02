import React, { useReducer } from 'react'
import A1 from './A1'
import B1 from './B1'
import C1 from './C1'

export const CounterContext = React.createContext()
export default function UseContextReducer() {
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'inc1': return state + 1
            case 'dec1' : return state - 1
            case 'reset' : return initialState
            default : return state
        }
    }
    const[count,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            {count}
            <CounterContext.Provider value={{ count: count, dispatch: dispatch }} >
                <A1 />
                <B1 />
                <C1 />
            </CounterContext.Provider>

        </div>
    )
}
