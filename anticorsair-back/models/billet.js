const { DataTypes } = require('sequelize'); // Import des types Sequelize
const sequelize = require('../config/database'); // Import de la connexion BDD

// Définition du modèle Billet
const Billet = sequelize.define('Billet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reservation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numero_billet: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  classe: {
    type: DataTypes.ENUM('économique', 'business', 'première'),
    defaultValue: 'économique',
  },
  siege: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  statut: {
    type: DataTypes.ENUM('valide', 'annulé', 'utilisé'),
    defaultValue: 'valide',
  },
}, {
  tableName: 'billets', // Nom de la table en BDD
  timestamps: true,     // Ajoute created_at et updated_at automatiquement
});

module.exports = Billet; // Export du modèle