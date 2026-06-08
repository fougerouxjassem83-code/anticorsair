const { DataTypes } = require('sequelize'); // Import des types Sequelize
const sequelize = require('../config/database'); // Import de la connexion BDD

// Définition du modèle Utilisateur
const Utilisateur = sequelize.define('Utilisateur', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'utilisateurs', // Nom de la table en BDD
  timestamps: true,          // Ajoute created_at et updated_at automatiquement
});

module.exports = Utilisateur; // Export du modèle