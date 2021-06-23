import React from 'react'

import './card.css'

const Card = ({ children, width = '30vw' }) => {
  return (
    <div className='card' style={{ width: width }}>
      {children}
    </div>
  )
}

export default Card
