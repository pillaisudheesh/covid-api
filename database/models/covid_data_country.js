'use strict';
module.exports = (sequelize, DataTypes) => {
  const covid_data_country = sequelize.define('covid_data_country', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    confirmed: DataTypes.INTEGER,
    recovered: DataTypes.INTEGER,
    deceased : DataTypes.INTEGER,
    reported_date: DataTypes.DATE
  }, {});
  covid_data_country.associate = function(models) {
    // associations can be defined here
  };
  return covid_data_country;
};