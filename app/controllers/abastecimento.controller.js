const db = require("../models");
const Abast = db.Abastecimento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const abastecimento = {
    posto: req.body.posto,
    tipo: req.body.tipo,
    litros: req.body.litros,
    placa: req.body.placa,
    valor: req.body.valor,
    motorista: req.body.motorista,
    km: req.body.km
  };
  console.log(abastecimento)

  Abast.create(abastecimento)
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao tentar salvar Abastecimento."
      });
    });
};

exports.findAll = (req, res) => {
  Abast.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao buscar histórico de combustivel."
      });
    });
};



