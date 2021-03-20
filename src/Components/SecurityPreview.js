import React from 'react'

const SecurityPreview = (props) => {
  // Display basic info (ticker, full name, etc.)

  const { security } = props
  
  return (
    <div>
      <h3>{security.symbol}</h3>
      <p>{security.description}</p>
    </div>
  )
}

export default SecurityPreview;
