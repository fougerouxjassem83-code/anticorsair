import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Banniere from './composant/Banniere'
import Accueil from './composant/Accueil'
import Footer from './composant/Footer'
import Navbar from './composant/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banniere />
      <Navbar />
      <Accueil />
      <Footer />

    </>
  )

  
}

export default App
