import React from 'react'

const Greeting = () => {

  const currentDate = new Date().toLocaleDateString();
  const name = "Vinicius";

  return (
    <div>
      <h1>Hello {name} </h1>
      <p>{currentDate}</p>
    </div>
  )
}

export default Greeting