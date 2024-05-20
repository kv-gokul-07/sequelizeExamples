'use strict';
import { Model, DataTypes } from "sequelize";
import { sequelize } from "src/models/index";

  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  customers.init({
    userType: DataTypes.ENUM('1', '2', '3'),
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'customers',
  });


export default customers