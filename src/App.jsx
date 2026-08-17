import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tracking from './components/Tracking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <p className="bg-primary">Hola mundo</p>
    <Tracking></Tracking>
    </>
  )
}

export default App
