import React from 'react'

function Stats( props ) {
  return (
    <div className='status'>
        <h1>Total Number : {props.stats} </h1>
    </div>
  )
}

export default Stats