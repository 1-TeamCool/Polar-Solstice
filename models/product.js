const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Product extends Model {}

    Product.init({
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        details: DataTypes.TEXT,
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
        timestamps: false
    });

    return Product;
};
