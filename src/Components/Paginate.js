import React from 'react';

const Paginate = ({ itemsPerPage, totalItems, paginate }) => {
  let pageNums = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNums.push(i)
  }

  return (
    <div className='pagination'>
      {
        pageNums.slice(0,10).map(num => (  // hide in-between page #'s later
          <span key={num} onClick={(event) => paginate(event,num)}>{num}</span>
        ))
      }
    </div>
  )
}

export default Paginate;
