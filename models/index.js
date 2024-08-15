const { Sequelize } = require('sequelize');
const path = require('path');
const {promises} = require("node:fs");
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const db = {};

const sequelize = config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, config);

const initModels = async () => {
    try {
        const modelFiles = await promises.readdir(__dirname);

        await Promise.all(
            modelFiles
                .filter(file => file.endsWith('.js') && file !== path.basename(__filename))
                .map(async file => {
                    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
                    db[model.name] = model;
                })
        );

        Object.values(db).forEach(model => {
            if (model.associate) {
                model.associate(db);
            }
        });

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;
    } catch (error) {
        console.error('Error initializing models:', error);
        throw error; // Ensure any errors are propagated up
    }
};

// Return the promise from initModels
const initPromise = initModels();

module.exports = {db, initPromise, sequelize };
