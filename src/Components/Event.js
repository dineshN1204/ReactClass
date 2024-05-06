import React from 'react';
import MethodProps from './MethodProps';

export default function Event(){
    function Abc(a){
        console.log("Button is clicked");
        console.log(a);
    }
    return(
        <div>
            <button onClick={Abc}>Click me</button>
            <MethodProps fn={Abc}/>
        </div>
    )
}