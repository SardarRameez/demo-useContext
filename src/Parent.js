import React from 'react';
import Child from './Child.js'
import Child2 from './Child_2.js';
function Parent(){
    return (
        <div>
            In parent component
              <Child></Child>
              <Child2></Child2>
        </div>
        
    );
}
export default Parent;