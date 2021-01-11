const sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Pedido = require("../models/Pedido");

const conexao = new sequelize(dbConfig);

Pedido.init(conexao);
