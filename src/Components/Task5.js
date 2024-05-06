import React, { useState } from 'react'
import List from './List'

export default function Task5() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [add, setAdd] = useState([])
    
    // console.log(add);
    const addEmployee = (e) => {
        e.preventDefault()
        setAdd([...add, { id: `${id}`, name: `${name}`, job: `${job}` }])
        // if key and values are same only use the values name only
        // setAdd([...add,{id,name,job}]) This is not recommended because other member cannot understand quickly
    }
    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={addEmployee}>
                <label>Employee ID:</label>
                <input type='text' value={id} onChange={(e) => { setId(e.target.value) }}></input><br />
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }}></input><br />
                <label>Job:</label>
                <select onChange={(e) => { setJob(e.target.value) }}>
                    <option value='select job'>Select Job</option>
                    <option value='developer'>Developer</option>
                    <option value='fresher'>Fresher</option>
                </select><br />
                <button>Add Employee</button>
            </form>

            <h1>Employee List</h1>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Job</th>
            </tr>
            <tbody>
                {add.map(e => {
                    return (
                        <tr key={e.id}> 
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.job}</td>
                        </tr>
                    )
                })}

            </tbody>

        </div>
    )
}
