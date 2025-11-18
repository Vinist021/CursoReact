import React, { useState, useContext } from 'react'
import { Data } from './genContext'

const UserUpdate = () => {
    const { name, setName } = useContext(Data);
    const [newName, setNewName] = useState("");
    
    const handleClick = () => {
        setName(newName);
        setNewName("");
    }

    return (
        <div>
            <label>Digite seu nome:
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)} 
                />
                <button onClick={handleClick}>Atualizar</button>
            </label>
        </div>
    )
}

export default UserUpdate