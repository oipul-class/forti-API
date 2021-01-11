const Pedido = require("../models/Pedido");
const { Op } = require("sequelize");

module.exports = {

    //função de listar todos os pedidos feitos ou listar pedidos de um cliente especifico
    async listarPedidos(req, res) {
        try {

            const Cliente = req.query.nome;

            if (Cliente) {

                const pedidos = await  Pedido.findAll({
                    where: { cliente: { [Op.like] : `%${Cliente}%`} } //LIKE igual do MYSQL
                });

               

                res.send(pedidos);
            } else {

                const pedidos = await Pedido.findAll();
                res.send(pedidos)
                
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    },

    //função de inserção de pedido
    async inserirPedido(req, res) {
        try {
            const { cliente, produto, quantidade} = req.body;

            const pedido = await Pedido.create({ cliente, produto, quantidade });   

            res.status(201).send(pedido);

        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    }

}