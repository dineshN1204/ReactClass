import React, { useState } from 'react'


export function Task6() {
    const createShow = () => {
        <Create />
    }

    return (
        <div>
            <h1>Employee Management</h1>
            <button onClick={createShow}>Create</button>
            <button>Read</button>

            {/* <Create /> */}
            {/* <Read /> */}

        </div>
    )
}



export default function Create() {
    // const [create, setCreate] = useState(true)
    // if (create) {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [job, setJob] = useState('select job')

    const handleSubmit = ()=>{

    }

    return (
        <div>
            <form>
                <label>Employee ID:</label>
                <input type='text' value={id} onChange={(e) => {setId(e.target.value)}}></input><br />
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}></input><br />
                <label>Job:</label>
                <select value={job} onChange={(e) => {setJob(e.target.value)}}>
                    <option value='select job'>Select Job</option>
                    <option value='developer'>Developer</option>
                    <option value='fresher'>Fresher</option>
                </select><br />
                <button>Add Employee</button>
            </form>
        </div>
    )
}
// }


export function Read() {
    const isRead = true;

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}




