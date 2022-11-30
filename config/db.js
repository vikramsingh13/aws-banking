const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_ENDPOINT || 'banking.cjj6obi0v9gt.us-east-1.rds.amazonaws.com',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'an_admin',
    database: process.env.DB_NAME || 'Banking'
});

/*

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'Banking'
});
*/


const connectDB = async() => {
    await connection.connect((err) => {
        if(err){
            console.log(`Database connection error: ${err.message}`);
        } else {
            console.log(`Database successfully connected.`);
        }
    });

    return connection;
}

/*
const createTable = async() => {
    const sql = 'create table accounts (id int auto_increment primary key, ' +
        'username varchar(255), password varchar(255), account_type varchar(255), ' +
        'first_name varchar(255), last_name varchar(255), balance decimal(10,2))';
    
    const sql2 = 'create table transactions(id int auto_increment primary key,' +
        'account varchar(255), transaction_type varchar(255), transactioin_amount decimal(10,2))';

    await connection.query(sql, (err, result) => {
    if(err){
        console.log(`Table creation error: ${err.message}`);
    } else{
        console.log(`Table creation result: ${result}`);
    }
    });
};
*/

module.exports = {connectDB};