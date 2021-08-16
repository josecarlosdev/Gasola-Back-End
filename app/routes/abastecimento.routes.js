module.exports = app => {
  const abastecimento = require("../controllers/abastecimento.controller");

  var router = require("express").Router();

  router.post("/", abastecimento.create);

  router.get("/", abastecimento.findAll);
  app.use('/api/abastecimento', router);
};
