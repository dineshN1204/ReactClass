import React from 'react'

export default function TernaryOperator() {
    const a = (5 > 3) ? (2 > 3) ? (6 > 2) ? (7 < 4) ? 10 : 20 : 30 : (9 < 10) ? 0 : 50 : 40 ? (7 > 3) ? (6 > 1) ? 70 : 80 : (9 > 7) ? 90 : 100 : 20 ;
    console.log(a);
    return (
        <div>

        </div>
    )
}
