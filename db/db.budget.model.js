const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');
const Period = require('../db/db.period.model');

const Budgets = sequelize.define('budgets', {
    id_budget: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
    },
    proyect: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    version: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    }
},{
    timestamps: true //date
});

Budgets.hasMany(Period, { foreignKey: 'id_budget', constraints: true })
module.exports = Budgets