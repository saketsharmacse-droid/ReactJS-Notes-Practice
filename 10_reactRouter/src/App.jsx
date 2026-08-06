import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <Footer/>
    <Home/>
  </>
  )
}

export default App

//hum log yaha pe header footer aur home teeno ko assemble krr sakte hai but hum Layout bna ke krenge.
