const Sequelize = require('sequelize');

const sequelize = require('../db/config');

const Attendance = sequelize.define('attendance', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
//StudentId & ClassId will be updated in future(Foreign Key)

module.exports = Attendance;
