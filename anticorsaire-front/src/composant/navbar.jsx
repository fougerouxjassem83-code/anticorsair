/**
 *  Dans ce fichier nous allons créer la barre de navigation de notre site web. La barre de navigation permettra aux utilisateurs de naviguer facilement entre les différentes sections de notre site, telles que l'accueil, les destinations, les offres spéciales et les contacts. Nous allons utiliser React pour créer cette barre de navigation et la styliser pour qu'elle soit attrayante et facile à utiliser.
 * La barre de navigation comprendra les éléments suivants :
 * - Un logo de la compagnie de voyage
 * - Des liens de navigation vers les différentes sections du site
 */

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Air Koissa</h1>
            <nav>
                <ul>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#offres">Offres spéciales</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar