import React from 'react';

const SecurityProfile = (props) => {
  // Display candlestick chart and basic info of company, high/low's, etc.

  console.log(props.stock);

  // -------------------------------------
  // REFER TO IndexPage component in Placard repo
  // - two Routes specified (?)
  // -------------------------------------

  return (
    <div>
      <h3>{props.stock}</h3>
    </div>
  )
}

export default SecurityProfile;
