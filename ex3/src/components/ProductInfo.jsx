import React from 'react'

const ProductInfo = () => {

    const product = {
        name: "laptop",
        price: "$1200",
        availability: "In Stock"
    };

  return (
    <div>
        <h2>Product Name: {product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo