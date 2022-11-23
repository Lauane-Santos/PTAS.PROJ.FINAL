'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { titulo: 'banana', preco: 123 , descricao: 'banana prata', imagem: 'https://a-static.mlcdn.com.br/1500x1500/banana-prata-banana-prata/fruitexpress/dec3cf52cafb11eb9fe54201ac18500e/66e5ec47a8f9efa00c78c879ac19b368.jpeg' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

