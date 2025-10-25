import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
        <h2>name: {name}</h2>
        <p>age: {age}</p>
    </div>
  )
}

export default Person