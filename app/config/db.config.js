module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "14121993",
  port:3306, 
  DB: "SanchesSolucoes",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
