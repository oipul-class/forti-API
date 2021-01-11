//importando 
const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {

    static init(sequelize){
        super.init(

            {
                cliente: DataTypes.STRING,
                produto: DataTypes.STRING,
                quantidade: DataTypes.INTEGER
            },

            {
                sequelize,
            }

        )
    }

}

module.exports = Pedido;