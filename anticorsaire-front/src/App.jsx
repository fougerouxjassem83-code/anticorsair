// Importer le hook useState de React pour gérer l'état local
import { useState } from 'react'
// Importer la bibliothèque ReactModal pour afficher des modales
import ReactModal from "react-modal"

import { Routes, Route, Link } from "react-router-dom";


// Importer le composant Banniere qui affiche la bannière du site
import Banniere from './composant/Banniere'
// Importer le composant Accueil qui affiche la page d'accueil
import Accueil from './page/Accueil'
// Importer le composant Footer qui affiche le pied de page

import Reservation from './page/Reservation'

import Footer from './composant/Footer'
// Importer le composant Navbar qui affiche la barre de navigation
import Navbar from './composant/Navbar'

// Déclarer le composant principal App
const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Reservation">Réservation</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>

      <Footer />
    </>
  );
}

      

export default App
