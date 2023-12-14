const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Stockage temporaire des informations de connexion (à des fins de démonstration)
let users = [];

// Endpoint pour enregistrer un utilisateur
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
  }

  users.push({ username, password });
  res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
});

// Endpoint pour la connexion
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Connexion réussie.' });
  } else {
    res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
