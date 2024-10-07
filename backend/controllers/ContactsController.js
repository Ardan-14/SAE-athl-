const Contacts = require('../models/Contact');

const getContactPage = async (req, res) => {
  const { page } = req.query;
  
  try {
    const contacts = await Contacts.findAll({
      where: { section: page },  // Filtre par la section (page) correspondante
    });
    
    if (contacts.length === 0) {
      return res.status(404).json({ message: 'Aucun contact trouvé pour cette page' });
    }

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getContactPage };
