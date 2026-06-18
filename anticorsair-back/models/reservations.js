const { DataTypes } = require('sequelize'); // Import des types Sequelize
const sequelize = require('../config/database'); // Import de la connexion BDD

// Définition du modèle Reservation
const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  utilisateur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_reservation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Date automatique à la création
  },
  statut: {
    type: DataTypes.ENUM('confirmée', 'annulée', 'en attente'),
    defaultValue: 'en attente',
  },
  prix_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'reservations', // Nom de la table en BDD
  timestamps: true,          // Ajoute created_at et updated_at automatiquement
});

module.exports = Reservation; // Export du modèle