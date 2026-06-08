const express = require('express');
const router = express.Router();
const Vol = require('../models/vols'); // Import du modèle
const verifierToken = require('../middlewares/auth'); // Import du middleware

// Récupérer tous les vols (accessible sans connexion)
router.get('/', async (req, res) => {
  try {
    const vols = await Vol.findAll(); // Récupération de tous les vols
    res.status(200).json(vols);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Récupérer un vol par son id (accessible sans connexion)
router.get('/:id', async (req, res) => {
  try {
    const vol = await Vol.findByPk(req.params.id); // Recherche par clé primaire
    if (!vol) {
      return res.status(404).json({ message: 'Vol introuvable' });
    }
    res.status(200).json(vol);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Créer un vol (route protégée)
router.post('/', verifierToken, async (req, res) => {
  try {
    const { compagnie, ville_depart, ville_arrivee, date_depart, date_arrivee, prix, places_disponibles } = req.body;
    const nouveauVol = await Vol.create({
      compagnie,
      ville_depart,
      ville_arrivee,
      date_depart,
      date_arrivee,
      prix,
      places_disponibles,
    });
    res.status(201).json({ message: 'Vol créé avec succès', vol: nouveauVol });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Modifier un vol (route protégée)
router.put('/:id', verifierToken, async (req, res) => {
  try {
    const vol = await Vol.findByPk(req.params.id);
    if (!vol) {
      return res.status(404).json({ message: 'Vol introuvable' });
    }
    await vol.update(req.body); // Mise à jour avec les données envoyées
    res.status(200).json({ message: 'Vol modifié avec succès', vol });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Supprimer un vol (route protégée)
router.delete('/:id', verifierToken, async (req, res) => {
  try {
    const vol = await Vol.findByPk(req.params.id);
    if (!vol) {
      return res.status(404).json({ message: 'Vol introuvable' });
    }
    await vol.destroy(); // Suppression du vol
    res.status(200).json({ message: 'Vol supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

module.exports = router;