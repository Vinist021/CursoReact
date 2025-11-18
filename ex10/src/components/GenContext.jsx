import React, { useState, createContext} from 'react'
import UserProfile from './UserProfile';
import UserUpdate from './userUpdate';

export const Data = createContext();

const GenContext = () => {
    const [name, setName] = useState("Vinicius");

  return (
    <div>
        <Data.Provider value={{name, setName}}>
          <UserProfile></UserProfile>
          <UserUpdate></UserUpdate>
        </Data.Provider>
    </div>
  )
}

export default GenContext
