const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');
const Income = require('./db.income.model');
const DirectCost = require('./db.directCost.model');
const AdminExpenses = require('./db.adminexpenses.model');
const Resources =  require('./db.resources.model');

const Period = sequelize.define('period', {
    id_date: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
    },
    date: {
        type: DataTypes.STRING(15),
        allowNull: false
    }, 
    income: {
        type: DataTypes.STRING(15),
        allowNull: false
    }, 
}, {
    timestamps: false
});

Period.hasMany(Resources, {foreignKey: 'id_date',constraints: true});
Period.hasMany(DirectCost, {foreignKey: 'id_date',constraints: true});
Period.hasMany(AdminExpenses, {foreignKey: 'id_date',constraints: true});
Period.hasMany(Income, {foreignKey: 'id_date',constraints: true});


module.exports = Period