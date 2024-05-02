import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Http() {
    const [data, setData] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setData(res.data))
            .catch(err => { console.log(err) })
    }, [id])
    return (
        <div>
            {data.title}
            <input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}></input>
        </div>
    )
}
