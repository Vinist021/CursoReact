import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Vinicius" age={22}></Person>
      <Product name="Notebook" price={1200}></Product>
    </div>
  )
}

export default App