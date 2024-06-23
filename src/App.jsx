import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InputTodo from './componenets/InputTodo'
import TodoList from './componenets/TodoList'

function App() {

  return (
    <>
      <InputTodo />
      <TodoList />
    </>
  )
}

export default App
