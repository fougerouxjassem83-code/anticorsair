/**
 *  Ce composant représente la section de pied de page de notre application. Il contient des informations de contact, des liens vers les réseaux sociaux et d'autres éléments pertinents pour les utilisateurs. Nous allons styliser ce composant pour qu'il soit visuellement attrayant et cohérent avec le reste de l'application.
 */

// Déclarer le composant fonctionnel Footer
const Footer = () =>{
    // Retourner le JSX à afficher pour le pied de page
    return (
        // Conteneur principal du pied de page avec la classe CSS "footer"
        <div className="footer">
            // Paragraphe contenant les informations de contact de la compagnie
            <p>Contactez-nous : info@compagnie-voyage.com</p>
        </div>
    )
}

// Exporter le composant Footer pour l'utiliser dans d'autres fichiers
export default Footer;