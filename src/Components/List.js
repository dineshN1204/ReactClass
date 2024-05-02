import React from 'react'
import TableData from './TableData'

export default function List() {
    let list = [
        { id: 1, name: "Adam", marks: 100, },
        { id: 2, name: "John", marks: 200, },
        { id: 3, name: "Joe", marks: 300, }
    ]
    return (
        <div>
            {list.map(x => <h1> {x.id} {x.name} {x.marks} </h1>)}
            {list.map(x =>
                <TableData id= {x.id} name={x.name} marks={x.marks} />)}
        </div>
    )
}
