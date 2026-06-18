const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Pour chiffrer le mot de passe
const jwt = require('jsonwebtoken'); // Pour générer le token
const Utilisateur = require('../models/utilisateur'); // Import du modèle

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { nom, prenom, email, mot_de_passe, telephone } = req.body; // Récupération des données

    // Vérifier si l'email existe déjà
    const utilisateurExistant = await Utilisateur.findOne({ where: { email } });
    if (utilisateurExistant) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Chiffrer le mot de passe
    const motDePasseChiffre = await bcrypt.hash(mot_de_passe, 10);

    // Créer l'utilisateur
    const nouvelUtilisateur = await Utilisateur.create({
      nom,
      prenom,
      email,
      mot_de_passe: motDePasseChiffre,
      telephone,
    });

    res.status(201).json({ message: 'Utilisateur créé avec succès', utilisateur: nouvelUtilisateur });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body; // Récupération des données

    // Vérifier si l'utilisateur existe
    const utilisateur = await Utilisateur.findOne({ where: { email } });
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    // Vérifier le mot de passe
    const motDePasseValide = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
    if (!motDePasseValide) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Générer le token JWT
    const token = jwt.sign(
      { id: utilisateur.id, email: utilisateur.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ message: 'Connexion réussie', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

module.exports = router;