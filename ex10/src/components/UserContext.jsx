import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const Data = createContext();

const UserContext = () => {
    const [name, setName] = useState("Vinicius");

  return (
    <div>
        <Data.Provider value={{name, setName}}>
            <UserProfile></UserProfile>
            <UpdateUser></UpdateUser>
        </Data.Provider>    
    </div>
  )
}

export default UserContext