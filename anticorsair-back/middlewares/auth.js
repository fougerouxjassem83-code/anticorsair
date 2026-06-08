const jwt = require('jsonwebtoken'); // Import de JWT
require('dotenv').config(); // Chargement des variables d'environnement

// Vérification du token JWT
const verifierToken = (req, res, next) => {
  const token = req.headers['authorization']; // Récupération du token dans le header

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé, token manquant' });
  }

  try {
    const tokenPropre = token.replace('Bearer ', ''); // Suppression du préfixe Bearer
    const decoded = jwt.verify(tokenPropre, process.env.JWT_SECRET); // Vérification du token
    req.utilisateur = decoded; // Ajout des infos utilisateur dans la requête
    next(); // Passage à la route suivante
  } catch (err) {
    res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = verifierToken; // Export du middleware