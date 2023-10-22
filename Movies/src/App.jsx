import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <h2>Movies</h2>
      <Outlet />
    </div>
  )
}

export default App
