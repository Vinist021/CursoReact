import React, { useContext, useState } from 'react'
import { Data } from './UserContext'

const UpdateUser = () => {
    const [newName, setNewName] = useState("");
    const {name, setName} = useContext(Data);

    const handleClick = () => {
        setName(newName);
        setNewName("");
    }

  return (
    <div>
        <label>Digite o seu nome:
            <input
               name='nome' 
               value={newName}
               onChange={(e) => setNewName(e.target.value)}
            ></input>
            <button onClick={handleClick}>Atualizar</button>
        </label>
    </div>
  )
}

export default UpdateUser