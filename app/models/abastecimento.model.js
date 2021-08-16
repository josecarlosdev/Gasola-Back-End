module.exports = (sequelize, Sequelize) => {
    const Abastecimentos = sequelize.define("add_abastecimento", {
        posto:{
            type : Sequelize.STRING
        },
        tipo:{
            type:Sequelize.STRING
        },
        litros: {
            type : Sequelize.DOUBLE
        },
        placa:{
            type : Sequelize.STRING
        },
        valor:{
            type : Sequelize.DOUBLE
        },
        motorista:{
            type : Sequelize.STRING
        },
        km:{
            type : Sequelize.STRING
        }

    });
  
    return Abastecimentos;
  };