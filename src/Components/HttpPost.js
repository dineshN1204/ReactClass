import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function HttpPost() {
    //states
    const [list, setList] = useState([])
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [marks, setMarks] = useState(0)
    const [image, setImage] = useState('')

    //update state
    const [isPopup, setIsPopup] = useState(false)
    const [id1, setId1] = useState('')
    const [name1, setName1] = useState('')
    const [marks1, setMarks1] = useState(0)
    const [image1, setImage1] = useState('')

    //read operation
    useEffect(() => {
        axios.get('http://localhost:3001/students')
            .then(res => { setList(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    //create operation
    const handleSubmit = () => {
        axios.post('http://localhost:3001/students', {
            id: id, name: name, marks: marks, image: image
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    //update opertaion 
    const openPopUp = (data) => {
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name)
        setMarks1(data.marks)
        setImage1(data.image)
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:3001/students/${id1}`, {
            id: id1, name: name1, marks: marks1, image: image1
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    // delete operation 
    const handleDelete = (id1) => {
        axios.delete(`http://localhost:3001/students/${id1}`)
            .then(res => {
                console.log(res)
                alert('Deleted successfully')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <h1>Staff Page</h1>
            <div className='form-1'>
                <form onSubmit={handleSubmit}>
                    <label>ID:</label>
                    <input type='text' value={id} onChange={(e) => { setId(e.target.value) }} required/><br />
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <label>Marks:</label>
                    <input type='number' value={marks} onChange={(e) => { setMarks(e.target.value) }} /><br />
                    <label>Image Url:</label>
                    <input type='text' value={image} onChange={(e) => { setImage(e.target.value) }}></input><br></br>
                    <button type='submit'>Add Data</button>
                </form>
            </div>

            {/* table to display the user data */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Profile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.marks}</td>
                            <td><img src={x.image} height={70} width={70}></img></td>
                            <td><button onClick={() => { openPopUp(x) }}>Update</button></td>
                            <td><button onClick={() => handleDelete(x.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isPopup && (
                <div className='update-popup'>
                    <button onClick={() => { setIsPopup(false) }}>X</button>
                    <div className='form-1'>
                        <form onSubmit={handleUpdate}>
                            <label>ID:</label>
                            <input type='text' value={id1} onChange={(e) => { setId1(e.target.value) }} required/><br />
                            <label>Name:</label>
                            <input type='text' value={name1} onChange={(e) => { setName1(e.target.value) }} /><br />
                            <label>Marks:</label>
                            <input type='number' value={marks1} onChange={(e) => { setMarks1(e.target.value) }} /><br />
                            <label>Image Url:</label>
                            <input type='text' value={image1} onChange={(e) => { setImage1(e.target.value) }}></input><br></br>
                            <button type='submit'>Update Data</button>
                        </form>
                    </div>
                </div>)}

            <div>
                <h1>Student Page</h1>
                <div className='container'>
                    {list.map(x => (
                        <div className='flex-items'>
                            <img src={x.image} height={150} width={150}></img>
                            <h3>{x.name}</h3>
                            <h5>{x.marks}</h5>
                            <button>See Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
