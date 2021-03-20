import React, { useState, useEffect } from 'react'

const SecurityProfile = (props) => {
  // Display candlestick chart and basic info of company, high/low's, etc.

  const { ticker } = props
  const [basicInfo, setInfo] = useState({})
  const [prices, setPrices] = useState({})


  useEffect(() => {
    // retrieve basic info
    fetch('http://127.0.0.1:5000/stock_info', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(security)
      body: JSON.stringify({'symbol': ticker})
    })
      .then(res => res.json())
      .then(data => {
        setInfo(data)
      })

    // retrieve current price
    fetch('http://127.0.0.1:5000/current_price', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'symbol': ticker})
    })
      .then(res => res.json())
      .then(prices => {
        setPrices(prices)
      })
  },[ ticker ])

  // console.log(basicInfo);

  return (
    <div>
      {/* <h3>{ basicInfo.ticker }</h3> */}
      <h3>{ ticker }</h3>
      <p>{ basicInfo.name }</p>
      <p>Shares Outstanding: { basicInfo.shareOutstanding }</p>
      <p>Industry: { basicInfo.finnhubIndustry }</p>
      <p>Last Price: ${prices.c}</p>
    </div>
  )
}

export default SecurityProfile;
