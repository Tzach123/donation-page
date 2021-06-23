import React from 'react'

import './gridContainer.css'

const GridContainer = ({ children, direction = 'rtl', marginB }) => {

 
  const style = { direction: direction, marginTop: `${marginB}px` }

  return (
    <div className='grid-container'>
      <div className='grid' style={style}>
        {children}
      </div>
    </div>
  )
}

export default GridContainer
