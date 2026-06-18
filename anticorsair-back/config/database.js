const { Sequelize } = require('sequelize'); // Import de Sequelize
require('dotenv').config(); // Chargement des variables d'environnement

// Connexion à la base de données avec les infos du .env
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nom de la BDD : airkoissa
  process.env.DB_USER,     // Utilisateur : root
  process.env.DB_PASSWORD, // Mot de passe
  {
    host: process.env.DB_HOST,       // Hôte : localhost
    dialect: process.env.DB_DIALECT, // Type de BDD : mysql
  }
);

module.exports = sequelize; // Export de la connexion