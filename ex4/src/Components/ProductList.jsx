import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 699 },
        { id: 3, name: 'Tablet', price: 499 },
    ];
  return (
    <div>
        <h1>Products</h1>
        {products.map((product) => 
        <ul key={product.id}>
            <li>
                {product.name}
            </li>
        </ul>)}
    </div>
  )
}

export default ProductList