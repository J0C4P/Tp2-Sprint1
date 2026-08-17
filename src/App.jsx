import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tracking from './components/Tracking'
import Menu from './components/menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Menu></Menu>
    <Tracking></Tracking>
    </>
  )
}

export default App
