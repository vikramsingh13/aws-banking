const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_ENDPOINT || 'banking.cjj6obi0v9gt.us-east-1.rds.amazonaws.com',
    port: process.env.DB_PORT || '3001',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'an_admin',
    database: process.env.DB_NAME || 'banking'
});

const connectDB = async() => {
    await connection.connect((err) => {
        if(err){
            console.log(`Database connection error: ${err.message}`);
        } else {
            console.log(`Database successfully connected.`);
        }
    });
}

module.exports = {connectDB};