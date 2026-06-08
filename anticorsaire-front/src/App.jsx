import { useState } from 'react'

import './App.css'
import Banniere from './composant/Banniere'
import Formulaire from './composant/Formulaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banniere />
      <Formulaire />

    </>
  )

  
}

export default App
