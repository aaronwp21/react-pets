import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PetList from './components/PetList'
import Counter from './components/Counter'

function App() {

  return (
    <div className="App">
      <Header />
      <PetList />
      <Counter />
    </div>
  )
}

export default App
