import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainSection from './components/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <Navbar></Navbar>
      <Hero></Hero>
      <MainSection></MainSection>
    </>
  )
}

export default App
