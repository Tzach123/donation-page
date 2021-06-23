import React from 'react'

const Stripe = ({  color = '#e6ebf1', gridRow, gridColumn }) => {
  const style = {
    backgroundColor: color,
    gridRow: gridRow,
    gridColumn: gridColumn,
  }
  return <div style={style}></div>
}

export default Stripe
