/**
 * Dans ce composant je vais créer un formulaire pour s'inscrire sous forme de modal.
 * 
 * Dans le formulaire d'inscription, les utilisateurs pourront saisir leur nom, prénom, adresse e-mail ,téléphone et mot de passe pour créer un compte sur notre site. 
 * Nous allons également inclure des validations pour s'assurer que les informations saisies sont correctes et sécurisées. 
 * Une fois le formulaire soumis, nous pourrons connecter ce composant à notre backend pour enregistrer les nouveaux utilisateurs dans notre base de données.
 */

import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import '../style/Accueil.modal.css'

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        // Accessibilité : indique à ReactModal quel élément est le conteneur principal
        ReactModal.setAppElement('#root')
    }, [])

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !password.trim()) return

        console.log('Register submit', { firstName, lastName, email, phone })
        closeModal()
    }

    return (

        <>
            <button type="button" onClick={openModal}>
                S'inscrire
            </button>   

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Inscription"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>Inscription</h2>    
                    <button className="modal-close" onClick={closeModal} aria-label="Fermer">
                        ✕
                    </button>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="register-firstName">Prénom</label>
                    <input
                        id="register-firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="register-lastName">Nom</label>
                    <input
                        id="register-lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="register-email">Email</label>
                    <input
                        id="register-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="register-phone">Téléphone</label>
                    <input
                        id="register-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="register-password">Mot de passe</label>
                    <input
                        id="register-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="modal-actions">
                        <button type="button" onClick={closeModal}>
                            Annuler
                        </button>
                        <button type="submit">S'inscrire</button>
                    </div>
                </form>
            </ReactModal>
        </>
    )
}

export default Register