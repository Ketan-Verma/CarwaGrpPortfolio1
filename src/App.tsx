import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
