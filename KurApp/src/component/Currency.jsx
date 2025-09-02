import React, { useState } from 'react'
import axios from 'axios'



let Base_Url="https://api.freecurrencyapi.com/v1/latest"
let apikey="fca_live_bYNXhzNXr6n5cmyFtjoAQ3UEd7GsPXyCrW3omN0K"
let exchangeapi=``



function Currency() {

    const [amount,setamount]=useState(0)
    const [fromCurrency,setCurrency]=useState('USD')
    const [toCurrency,setToCurrency]=useState('TRY')
    const [result,setresult]=useState('')

const exchange =async () => {

  const response= await axios.get(`${Base_Url}?apikey=${apikey}&base_currency=${fromCurrency}`)
  const birim= await (response.data.data[`${toCurrency}`]);
  let sonuc =birim*amount

  setresult(sonuc)
  
  


  
  
  
  
      
};






  return (
<div className="currency-wrapper">
    
    <div className="currency-div">
        <h1 className="currency-title">Kur Çevirici</h1>
      <input type="number" className="amount" placeholder="Miktar"
      value={amount}
      onChange={(e)=>setamount(e.target.value)} />


      <select onChange={(e)=> setCurrency(e.target.value)} className="from-currency option">
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
      <select onChange={(e)=> setToCurrency(e.target.value)} className="to-currency option">
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
       <input value={result} onChange={(e) => setresult(e.target.value)}  type="number" className="result" placeholder='Sonuc'    />
      <button onClick={exchange} className="convert-btn">Hesapla</button>
    </div>
  </div>
  )
}

export default Currency
