const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations'); // Import du modèle
const Vol = require('../models/vols'); // Import du modèle Vol
const verifierToken = require('../middlewares/auth'); // Import du middleware

// Récupérer toutes les réservations de l'utilisateur connecté (route protégée)
router.get('/', verifierToken, async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: { utilisateur_id: req.utilisateur.id }, // Filtre par utilisateur connecté
      include: [{ model: Vol }], // Inclure les infos du vol
    });
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Récupérer une réservation par son id (route protégée)
router.get('/:id', verifierToken, async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id, {
      include: [{ model: Vol }], // Inclure les infos du vol
    });
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation introuvable' });
    }
    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Créer une réservation (route protégée)
router.post('/', verifierToken, async (req, res) => {
  try {
    const { vol_id, prix_total } = req.body;

    // Vérifier si le vol existe
    const vol = await Vol.findByPk(vol_id);
    if (!vol) {
      return res.status(404).json({ message: 'Vol introuvable' });
    }

    // Vérifier s'il reste des places
    if (vol.places_disponibles <= 0) {
      return res.status(400).json({ message: 'Plus de places disponibles' });
    }

    // Créer la réservation
    const nouvelleReservation = await Reservation.create({
      utilisateur_id: req.utilisateur.id, // Récupéré depuis le token
      vol_id,
      prix_total,
    });

    // Décrémenter les places disponibles
    await vol.update({ places_disponibles: vol.places_disponibles - 1 });

    res.status(201).json({ message: 'Réservation créée avec succès', reservation: nouvelleReservation });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Annuler une réservation (route protégée)
router.put('/:id/annuler', verifierToken, async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation introuvable' });
    }

    // Vérifier que la réservation appartient à l'utilisateur connecté
    if (reservation.utilisateur_id !== req.utilisateur.id) {
      return res.status(403).json({ message: 'Action non autorisée' });
    }

    await reservation.update({ statut: 'annulée' }); // Mise à jour du statut
    res.status(200).json({ message: 'Réservation annulée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

module.exports = router;