/**
 * Dans ce fichier, nous allons créer un formulaire pour une compagnie de voyage .
 * Le formulaire permettra aux utilisateurs de saisir des informations telles que leur nom, leur adresse e-mail, leur destination de voyage préférée et leurs dates de voyage. Nous allons utiliser React pour créer ce formulaire et gérer l'état des champs de saisie.
 * Le formulaire comprendra les éléments suivants :
 * - Un champ de saisie pour le nom de l'utilisateur
 * - Un champ de saisie pour l'adresse e-mail de l'utilisateur
 * - Un champ de sélection pour la destination de voyage préférée de l'utilisateur
 * - Un champ de saisie pour les dates de voyage de l'utilisateur
 * - Un bouton de soumission pour envoyer les informations du formulaire
 * Nous allons également ajouter une validation de base pour nous assurer que les champs obligatoires sont remplis avant de permettre la soumission du formulaire. Lorsque le formulaire est soumis, nous afficherons les informations saisies par l'utilisateur dans la console.
 */

const Accueil = () => {
    return (
        <div className="formulaire">
            <h2>Réservation de votre billet </h2>

            <form>
                <input type="radio" id="aller" name="voyage" value="aller" required />
                <label htmlFor="aller">Aller</label>
                <input type="radio" id="retour" name="voyage" value="retour" required />
                <label htmlFor="retour">Aller-Retour</label>
                <br />
                
                <label htmlFor="depart">Départ  :</label>
                <select id="depart" name="depart" required>
                    <option value="">Sélectionnez un lieu de départ</option>
                    <option value="paris">Paris</option>
                    <option value="new-york">New York</option>
                    <option value="tokyo">Tokyo</option>
                </select>
                <br />

                <label htmlFor="destination">Destination  :</label>
                <select id="destination" name="destination" required>
                    <option value="">Sélectionnez une destination</option>
                    <option value="paris">Paris</option>
                    <option value="new-york">New York</option>
                    <option value="tokyo">Tokyo</option>
                </select>
                <br />

                <label htmlFor="nombre">Nombre de personnes :</label>
                <input type="number" id="nombre" name="nombre" min="1" required />
                <br />

                <label htmlFor="dates">Date de départ :</label>
                <input type="date" id="dates" name="dates" required />
                <br />

                <label htmlFor="dates-retour">Date de retour :</label>
                <input type="date" id="dates-retour" name="dates-retour" required />
                <br />

                <button type="submit">Chercher</button>
            </form>
        </div>
)
}

export default Accueil

