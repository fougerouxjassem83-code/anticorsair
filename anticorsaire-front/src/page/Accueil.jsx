/**
 *  Ce fichier contient le composant Accueil de notre application. Il représente la page d'accueil de notre site web, où les utilisateurs peuvent effectuer des recherches de vols, s'inscrire ou se connecter. Nous allons également intégrer une modale pour l'inscription et la connexion, ainsi que des formulaires pour la recherche de vols. Ce composant est essentiel pour offrir une expérience utilisateur fluide et intuitive dès le premier contact avec notre site.
 */

// J'importe React pour permettre l'utilisation de JSX et des fonctionnalités React
import React from 'react'

// j'importe les composants nécessaires pour la page d'accueil
import Login from '../composant/Login'

import Register from '../composant/Register'

const Accueil = () => {
  return (
    <>
    
      <h2>Page d'accueil</h2>
        <Login />
        <Register />
    </>
  )
}

export default Accueil;

