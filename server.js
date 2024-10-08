const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const initializeDatabase = require('./dbInit');

const JoueurRoutes = require('./backend/routes/JoueurRoutes');
const CompetenceRoutes = require('./backend/routes/CompetenceRoutes');
const JeuxRoutes = require('./backend/routes/JeuxRoutes');
const PartieRoutes = require('./backend/routes/PartieRoutes');
const ScoreRoutes = require('./backend/routes/ScoreRoutes');
const ProfilRoutes = require('./backend/routes/ProfilRoutes');
const ResultatRoutes = require('./backend/routes/ResultatRoutes');
const AdhesionRoutes = require('./backend/routes/AdhesionRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors()); // Utiliser le middleware CORS

// Utiliser les routes
app.use('/api', JoueurRoutes);
app.use('/api', CompetenceRoutes);
app.use('/api', JeuxRoutes);
app.use('/api', PartieRoutes);
app.use('/api', ScoreRoutes);
app.use('/api', ProfilRoutes);
app.use('/api', ResultatRoutes);
app.use('/api', AdhesionRoutes);

// Initialiser la base de données avant de démarrer le serveur
initializeDatabase().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
}).catch(error => {
  console.error('Erreur lors de l initialisation de l application:', error);
});
