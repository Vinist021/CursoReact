import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [newName, setNewName] = useState("");
    const [newQuantity, setNewQuantity] = useState("");

    const addItem = (event) => {
      event.preventDefault();

      if(!newName || !newQuantity) return;

      const newItem = {
          name: newName,
          quantity: parseInt(newQuantity)
      };

      setItems([...items, newItem]);
      setNewName("");
      setNewQuantity("");
    }
    
  return (
    <div>
      <h1>Shopping List</h1>
        <form onSubmit={addItem}>
            <input 
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder='Digite o nome:'/>
            <input
             type="number" 
             value={newQuantity}
             onChange={(e) => setNewQuantity(e.target.value)}
             placeholder='Digite a quantidade:'/>
            <button type='submit'>Adicionar</button>
        </form>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} — {item.quantity}</li>
          ))}
        </ul>
    </div>
  )
}

export default ShoppingList