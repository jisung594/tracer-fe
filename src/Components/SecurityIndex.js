import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import SecurityPreview from './SecurityPreview'
import SecurityProfile from './SecurityProfile'
import '../Styling/SecurityIndex.scss'

const SecurityIndex = () => {
  // Display all items based on selection of Stocks, Crypto, or Forex

  const [securityArr, setSecurities] = useState([])
  const [exchangeArr, setExchanges] = useState([])
  const [securityType, setType] = useState('stocks')
  // const [currentSecurity, selectSecurity] = useState({})

  useEffect(() => {
    // set env variable for token in backend and pass in other param's ('stock','exchange','limit',etc.)
    fetch('https://tracerscfx-server.herokuapp.com/stocks_us')
    // fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(stocks => {
        // setSecurities(stocks.slice(0,100))  //-------------------------------
        setSecurities(stocks)
      })
  },[])


  let stockHandler = (type) => {
    fetch('https://tracerscfx-server.herokuapp.com/stocks_us')
    // fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(stocks => {
        // setSecurities(stocks.slice(0,100))  //-------------------------------
        setSecurities(stocks)
      })

    setType(type)
  }

  let exchangeHandler = (type) => {
    fetch('https://tracerscfx-server.herokuapp.com/' + type + '_exchanges')
    // fetch('http://127.0.0.1:5000/' + type + '_exchanges')
      .then(res => res.json())
      .then(exchanges => {
        setExchanges(exchanges)
      })

    setType(type)
  }

  let stockList
  if (securityArr.length > 1) {
    stockList = securityArr.map((obj, i) => {
      return (
        <Link key={i} to={`/security/${obj['symbol']}`}>
          <SecurityPreview key={i} security={obj} />
        </Link>
      )
    })
  }

  let exchangeList
  if (exchangeArr.length > 1) {
    exchangeList = exchangeArr.map((obj,i) => {
      return <p key={i}>{obj}</p>
    })
  }


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

        <Switch>
          <Route path='/security/:id' render={
            (routerProps) => {
              let ticker = routerProps.match.params.id
              return <SecurityProfile ticker={ticker}/>
            }
          }/>

          <Route path='/security' render={
            () => {
              return <div>
                { securityType === 'stocks' ? stockList : exchangeList }
              </div>
            }
          }/>
        </Switch>

      </div>
    </div>
  )
}

export default SecurityIndex;
