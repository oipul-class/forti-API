'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable("pedidos",{
      //campo ID
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      //campo do nome do cliente
      cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },

      //campo do produto
      produto: {
        type: Sequelize.STRING,
        allowNull: false
      },

      //campo de quantidade
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      //campo para guardar quando os dados foram criados
      created_at: {
        type: Sequelize.DATE ,
        allowNull: false,
      },
      
      //campo para guardar a ultima vez atualizada
      updated_at: {
        type: Sequelize.DATE ,
        allowNull: false,
      
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable("pedidos");
  }
};
