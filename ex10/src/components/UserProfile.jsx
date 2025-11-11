import React, { useContext } from 'react'
import UserContext, { Data } from './UserContext'

const UserProfile = () => {

    const { name } = useContext(Data);

  return (
    <div>
        <h1>My name is {name}</h1>        
    </div>
  )
}

export default UserProfile