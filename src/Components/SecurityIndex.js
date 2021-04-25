import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import SecurityPreview from './SecurityPreview'
import SecurityProfile from './SecurityProfile'
import '../Styling/SecurityIndex.scss'

const SecurityIndex = () => {
  // Display all items based on selection of Stocks, Crypto, or Forex

  let [searchInput, setInput] = useState('')
  let [searchResults, setResults] = useState([])
  let [securityArr, setSecurities] = useState([])
  let [exchangeArr, setExchanges] = useState([])
  let [securityType, setType] = useState('stocks')
  // const [currentSecurity, selectSecurity] = useState({})
  let [currentPage, setCurrentPage] = useState(1)
  let [itemsPerPage, setItemsPerPage] = useState(50)


  useEffect(() => {
    // set env variable for token in backend and pass in other param's ('stock','exchange','limit',etc.)
    // fetch('https://tracerscfx-server.herokuapp.com/stocks_us')
    fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(stocks => {
        setSecurities(stocks)
      })
  },[])


  let indexOfLastItem = currentPage * itemsPerPage
  let indexOfFirstItem = indexOfLastItem - itemsPerPage
  let currentItems = securityArr.slice(indexOfFirstItem, indexOfLastItem)


  let searchHandler = (e) => {
    let results = securityArr.filter(sec => {
      return sec.description.toLowerCase().includes(e.target.value.toLowerCase())
        || sec.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setInput(e.target.value)
    setResults(results)
  }
  // console.log(searchInput, searchResults)


  let sortAZ = (a,b) => {
    return a.symbol < b.symbol ? -1 : a.symbol > b.symbol ? 1 : 0

    // if (a.symbol < b.symbol) {
    //   return -1;
    // }
    // if (a.symbol > b.symbol) {
    //   return 1;
    // }
    // return 0;
  }


  let stockHandler = (type) => {
    // fetch('https://tracerscfx-server.herokuapp.com/stocks_us')
    fetch('http://127.0.0.1:5000/stocks_us')
      .then(res => res.json())
      .then(stocks => {
        setSecurities(stocks)
      })

    setType(type)
  }

  let exchangeHandler = (type) => {
    // fetch('https://tracerscfx-server.herokuapp.com/' + type + '_exchanges')
    fetch('http://127.0.0.1:5000/' + type + '_exchanges')
      .then(res => res.json())
      .then(exchanges => {
        setExchanges(exchanges)
      })

    setType(type)
  }


  let displayedStocks
  securityArr.length > 1 && searchInput.length < 1
  ? displayedStocks = securityArr.sort(sortAZ).slice(0,100)   // show 50 per page when there's no search input
  : displayedStocks = searchResults

  let stockList = displayedStocks.map((obj, i) => {
    return (
      <Link key={i} to={`/security/${obj['symbol']}`} style={{ textDecoration: 'none' }}>
        <SecurityPreview key={i} security={obj} />
      </Link>
    )
  })

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
          <input value={searchInput} onChange={(event) => searchHandler(event)} id='search' type='text' required/>
          <label htmlFor='search'>Search stocks, crypto, and forex.</label>
        </div>
      </div>
      <div className='pagination'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <div className='list-div'>
        <Switch>
          <Route path='/security/:id' render={
            (routerProps) => {
              let ticker = routerProps.match.params.id
              return <SecurityProfile ticker={ticker}/>
            }
          }/>
          <Route path='/security' render={
            () => {
              return <div className='list'>
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
