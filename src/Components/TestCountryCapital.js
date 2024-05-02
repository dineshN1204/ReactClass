import React, { useState } from 'react'

export default function TestCountryCapital() {
  const[country,setCountry]=useState('')
  const[capital,setCapital]=useState('')
  return (
    <div>
        <h1>Country and Capital</h1>
        <ul>
          <li onClick={()=>{setCountry('USA')
        setCapital('Washington D.C')}}>USA</li>
          <li onClick={()=>{setCountry('UK')
        setCapital('London')}}>UK</li>
          <li onClick={()=>{setCountry('Germany')
        setCapital('Berlin')}}>Germany</li>
          <li onClick={()=>{setCountry('France')
        setCapital('Paris')}}>France</li>
          <li onClick={()=>{setCountry('Japan')
        setCapital('Tokyo')}}>Japan</li>
        </ul>
        <div>
          <h2>{country}</h2>
          <p>{capital}</p>
        </div>
    </div>
  )
}
