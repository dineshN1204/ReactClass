import React from 'react'

export default function TableData(props) {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.marks}</th>
        </tr>
    )
}


