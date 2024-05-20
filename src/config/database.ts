import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV ||'development';
const config = require('./config');

const sequelize = new Sequelize(config[env])

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

 export default sequelize;  