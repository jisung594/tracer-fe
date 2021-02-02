import React, { useState, useEffect } from 'react';

const Index = () => {
  // Display all items based on selection of Stocks, Crypto, or Forex

  const [stockArr, setStocks] = useState([]);

  useEffect(() => {
    // set env variable for token in backend and pass in other param's ('stock','exchange','limit',etc.)
    fetch('http://127.0.0.1:5000/stocks')
      .then(res => res.json())
      .then(data => {
        setStocks(data.slice(0,10))
      })
  },[])

  // console.log(stockArr);

  let stockList = stockArr.map(obj => {
    return <p key={obj['symbol']}>{obj['symbol']}</p>
  })


  return (
    <div>
      {stockList}
    </div>
  )
}

export default Index;
