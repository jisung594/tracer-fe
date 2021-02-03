import React, { useState, useEffect } from 'react';
import '../Styling/Index.scss'

const Index = () => {
  // Display all items based on selection of Stocks, Crypto, or Forex

  const [securityArr, setSecurities] = useState([])
  const [exchangeArr, setExchanges] = useState([])
  const [securityType, setType] = useState('stocks')

  useEffect(() => {
    // // set env variable for token in backend and pass in other param's ('stock','exchange','limit',etc.)
    fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(data => {
        setSecurities(data.slice(0,10))
      })
  },[])


  let stockHandler = (type) => {
    fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(stocks => {
        setSecurities(stocks.slice(0,10))
      })

    setType(type)
  }

  let exchangeHandler = (type) => {
    fetch('http://127.0.0.1:5000/' + type + '_exchanges')
      .then(res => res.json())
      .then(exchanges => {
        setExchanges(exchanges)
      })

    setType(type)
  }


  let stockList
  if (securityArr.length > 1) {
    stockList = securityArr.map((obj,i) => {
      return <p key={i}>{obj['symbol']}</p>
      // return <p key={i}>{obj}</p>
    })
  }

  let exchangeList
  if (exchangeArr.length > 1) {
    exchangeList = exchangeArr.map((obj,i) => {
      return <p key={i}>{obj}</p>
    })
  }

  console.log(securityArr);

  return (
    <div className='index'>
      <div className='search-div'>
        <div className='sec-type'>
          <span onClick={() => stockHandler('stocks')}>STOCKS</span>
          <span onClick={() => exchangeHandler('crypto')}>CRYPTO</span>
          <span onClick={() => exchangeHandler('fx')}>FOREX</span>
        </div>
        <div className='search-bar'>
          <input id='search' type='text' required/>
          <label htmlFor='search'>Search stocks, crypto, and forex.</label>
        </div>
      </div>
      <div className='list'>
        {
          securityType === 'stocks'
          ? stockList
          : exchangeList
        }
      </div>
    </div>
  )
}

export default Index;
