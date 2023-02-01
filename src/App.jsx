import React from 'react'
import { useState } from 'react'
import Home from "./components/Home"

const App = () => {
  const [nav, setNav] = useState(false)
  return (
    <div><Home setNav = {setNav} nav = {nav}/></div>
  )
}

export default App