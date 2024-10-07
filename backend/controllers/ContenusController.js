const Contenus = require('../models/Contenus');

const getContenusByPage = async (req, res) => {
  const { page } = req.query;
  
  try {
    const contenus = await Contenus.findAll({
      where: { page },  // Filtre par la page (accueil, contact, footer, etc.)
      order: [['date_modification', 'DESC']]  // Optionnel : trier par date de modification
    });
    
    if (contenus.length === 0) {
      return res.status(404).json({ message: 'Aucun contenu trouvé pour cette page' });
    }

    res.status(200).json(contenus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getContenusByPage };
