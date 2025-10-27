import React, { useState } from 'react'

const TodoList = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  const addItem = (event) => {
    event.preventDefault();

    if (newItem.trim() === '') return; 

    setItems((oldItems) => [...oldItems, newItem])
    setNewItem(''); 
  }

  return (
    <div>
      <h1>Todo List:</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
