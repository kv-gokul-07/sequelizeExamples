'use strict';

import { Model, DataTypes } from "sequelize";
import { sequelize } from "src/models/index";

  class productData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }

  productData.init({
    title: DataTypes.STRING,
    isFeatured: DataTypes.BOOLEAN,
    productImage: DataTypes.ARRAY(DataTypes.STRING),
    price: DataTypes.DECIMAL,
    shortDescription: DataTypes.TEXT,
    description: DataTypes.TEXT,
    productUrl: DataTypes.STRING,
    category: DataTypes.ARRAY(DataTypes.STRING),
    tags: DataTypes.ARRAY(DataTypes.STRING),
    createdBy: DataTypes.INTEGER,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'productData',
  });

  export default productData