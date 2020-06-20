import React, { useContext } from 'react';
import valueContext from './Context';

function Child(){
    const value=useContext(valueContext)
    return (
        <div>
            <br/>
            useContext <br/>
            Hello from Child  {value[0]}
            <button onClick={()=>{value[1](++value[0])}}>Increment</button>
        </div>
    )
}
export default Child;