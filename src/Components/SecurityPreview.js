import React, { useState, useEffect } from 'react'

const SecurityPreview = (props) => {
  // Display basic info (ticker, full name, etc.)

  const { stock } = props
  const [prices, setPrices] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:5000/current_price', {
      method: 'POST',
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(stock)
    })
      .then(res => res.json())
      .then(prices => {
        // console.log(prices);
        setPrices(prices)
      })
  },[ stock ])

  // console.log(prices);

  return (
    <div>
      <h3>{stock.symbol}</h3>
      <p>{stock.description}</p>
      <p>${prices.c}</p>
    </div>
  )
}

export default SecurityPreview;
