import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>
        <h2>Product name: {name}</h2>
        <p>price: ${price}</p>
    </div>
  )
}

export default Product