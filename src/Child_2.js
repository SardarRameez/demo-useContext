import React, { useReducer } from 'react';
import numReducer from './Reducer.js';

function Child2(){
    const [state, dispatch]=useReducer(numReducer,6)
    return (
        <div>
            <br/>
            useReducer <br/>
            Hello from Child {state}
            <button onClick={()=>{dispatch("increment")}}>Increment</button>
            <button onClick={()=>{dispatch("decrement")}}>decrement</button>
        </div>
    )
}
export default Child2;