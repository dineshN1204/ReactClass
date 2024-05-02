import React, { useState } from 'react'

function State() {
    const [name, setName] = useState('Adam')
    function changeName(){
        setName('Dinesh')
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Click Here</button>
        </div>
    )
}

export default State