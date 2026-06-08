const express = require('express'); // Import d'Express
const cors = require('cors'); // Import de CORS
require('dotenv').config(); // Chargement des variables d'environnement

const sequelize = require('./config/database'); // Import de la connexion BDD

// Import des routes
const authRoutes = require('./routes/auth');
const volsRoutes = require('./routes/vols');
const reservationsRoutes = require('./routes/reservations');

// Import des modèles
const Utilisateur = require('./models/utilisateur');
const Vol = require('./models/vols');
const Reservation = require('./models/reservations');
const Billet = require('./models/billet');

const app = express(); // Création de l'application Express

// Middlewares globaux
app.use(cors()); // Autoriser les requêtes du front React
app.use(express.json()); // Lire le JSON dans les requêtes

// Associations entre les modèles
Utilisateur.hasMany(Reservation, { foreignKey: 'utilisateur_id' }); // Un utilisateur a plusieurs réservations
Reservation.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' }); // Une réservation appartient à un utilisateur

Vol.hasMany(Reservation, { foreignKey: 'vol_id' }); // Un vol a plusieurs réservations
Reservation.belongsTo(Vol, { foreignKey: 'vol_id' }); // Une réservation appartient à un vol

Reservation.hasMany(Billet, { foreignKey: 'reservation_id' }); // Une réservation a plusieurs billets
Billet.belongsTo(Reservation, { foreignKey: 'reservation_id' }); // Un billet appartient à une réservation

// Les routes
app.use('/api/auth', authRoutes);
app.use('/api/vols', volsRoutes);
app.use('/api/reservations', reservationsRoutes);

// Connexion BDD + le démarrage du serveur
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de données connectée');
    app.listen(process.env.PORT, () => {
      console.log(`Serveur lancé sur le port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erreur de connexion :', err);
  });