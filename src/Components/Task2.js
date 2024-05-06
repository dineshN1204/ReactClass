import React, { useState } from 'react'

//03/04/2024
//Task2

function Toggle() {
    let [changeSwitch, setChangeSwitch] = useState(["On", "Off"])
    console.log(changeSwitch);
    function toggleSwitch() {
        if (changeSwitch == "Off") {
            setChangeSwitch("On")
        }
        else {
            setChangeSwitch("Off")
        }
    }


    return (
        <div>
            <button onClick={toggleSwitch}>Toggle</button>
            <p>{changeSwitch}</p>
        </div>
    )

}

export default Toggle