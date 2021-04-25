import React from 'react'
import '../Styling/SecurityPreview.scss'

const SecurityPreview = (props) => {
  // Display basic info (ticker, full name, etc.)
  let { security } = props

  return (
    <div className='preview'>
      <h3 className='symbol'>{security.symbol}</h3>
      <p className='name'>{security.description}</p>
    </div>
  )
}

export default SecurityPreview;
