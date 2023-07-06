const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql', // informa qual a biblioteca que o sequelize utiliza para se conectar ao banco de dados
}

module.exports = {
  development: config,
  test: config,
  production: config,
}
