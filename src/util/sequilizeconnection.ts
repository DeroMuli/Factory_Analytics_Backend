import {  Sequelize } from 'sequelize';

const host = process.env.DB_HOST
const db_name  = process.env.DB_NAME as string
const user_name = process.env.DB_USERNAME as string
const password = process.env.DB_PASSWORD

const sequelizeconnection = new Sequelize(db_name, user_name , password, {
    host,
    dialect : "postgres"
});

const testconnection = async () => {
    try {
        await sequelizeconnection.authenticate()
        console.log("The connection made succesfully")
    }
    catch{
        console.log("connection not made")
    }
}

export  {sequelizeconnection , testconnection}
