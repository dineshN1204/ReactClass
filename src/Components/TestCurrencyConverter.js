import React, { useState } from 'react'
export default function TestCurrencyConverter() {
const[inp1,setInp1]=useState(1)
const[inp2,setInp2]=useState(1)
const[currency1,setCurrency1]=useState('inr')
const[currency2,setCurrency2]=useState('usd')
let currencyValues = {
    inr:{usd:86.52,eur:90.24,gbp:99.36,},
    usd:{inr:86.52,eur:90.24,gbp:99.36,},
    eur:{usd:86.52,inr:90.24, gbp:99.36,},
    gbp:{usd:86.52,eur:90.24,inr:99.36,}}
  return (
    <div><input type='number' value={inp1} onChange={(e)=>{setInp1(e.target.value);setInp2(e.target.value * currencyValues[currency1][currency2])}}></input>
        <select value={currency1} onChange={(e)=>{setCurrency1(e.target.value);}}><option value='inr'>INR</option>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='gbp'>GBP</option>
        </select>
        <input type='number' value={inp2} onChange={(e)=>{setInp2(e.target.value); setInp1(e.target.value / currencyValues[currency1][currency2])}}></input>
        <select value={currency2} onChange={(e)=>{setCurrency2(e.target.value)}}><option value='inr'>INR</option>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='gbp'>GBP</option>
        </select></div>)}
