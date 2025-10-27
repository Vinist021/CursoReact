import React from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import ShoppingList from './components/ShoppingList'

const App = () => {
  return (
    <div>
      <Counter></Counter>
      <TodoList></TodoList>
      <ShoppingList></ShoppingList>
    </div>
  )
}

export default App