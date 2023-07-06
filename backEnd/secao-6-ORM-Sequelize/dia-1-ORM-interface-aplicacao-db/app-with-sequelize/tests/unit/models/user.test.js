const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/user.model');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('Possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('Possui as propriedades "fullname" e "email"', () => {
    ['fullname', 'email'].forEach(checkPropertyExists(user));
  });
});