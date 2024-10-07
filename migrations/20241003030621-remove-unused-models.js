'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrientationSportives');
    await queryInterface.dropTable('Parties');
    await queryInterface.dropTable('Profils');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrientationSportives', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: Sequelize.TEXT,
      competence_principale: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    await queryInterface.createTable('Parties', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      joueur_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Joueurs',
          key: 'id'
        }
      },
      jeu_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jeux',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    await queryInterface.createTable('Profils', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      joueur_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Joueurs',
          key: 'id'
        }
      },
      score_endurance: Sequelize.FLOAT,
      score_force: Sequelize.FLOAT,
      score_agilite: Sequelize.FLOAT,
      score_final: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  }
};
