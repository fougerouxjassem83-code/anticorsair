/**  Dans ce composant je vais créer un formulaire de connexion sous forme de modal.
 * 
 * Le composant affiche un bouton « Se connecter » et ouvre une modal permettant de saisir
 * email + mot de passe.
 */

import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'

import '../style/Accueil.modal.css'

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Accessibilité : indique à ReactModal quel élément est le conteneur principal
    ReactModal.setAppElement('#root')
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (!email.trim() || !password.trim()) return

    console.log('Login submit', { email })
    closeModal()
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        Se connecter
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Connexion"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2>Connexion</h2>
          <button className="modal-close" onClick={closeModal} aria-label="Fermer">
            ✕
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Mot de passe</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="modal-actions">
            <button type="button" onClick={closeModal}>
              Annuler
            </button>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </ReactModal>
    </>
  )
}

export default Login

