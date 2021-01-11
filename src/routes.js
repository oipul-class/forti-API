const express = require("express");

const pedidoController = require("./controllers/pedido");

const routes = express.Router();

routes.get("/pedidos", pedidoController.listarPedidos);

routes.post("/pedidos", pedidoController.inserirPedido)

module.exports = routes;