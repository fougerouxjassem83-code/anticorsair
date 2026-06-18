const { DataTypes } = require('sequelize'); // Import des types Sequelize
const sequelize = require('../config/database'); // Import de la connexion BDD

// Définition du modèle Vol
const Vol = sequelize.define('Vol', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  compagnie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ville_depart: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ville_arrivee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_depart: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_arrivee: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  places_disponibles: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('prévu', 'annulé', 'terminé'),
    defaultValue: 'prévu',
  },
}, {
  tableName: 'vols', // Nom de la table en BDD
  timestamps: true,  // Ajoute created_at et updated_at automatiquement
});

module.exports = Vol; // Export du modèle