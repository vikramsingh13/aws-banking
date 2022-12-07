
const asyncHandler = require('express-async-handler');
const {connectDB} = require('../config/db');

let connection; //connection variable for our db

(async() => {
    connection = await connectDB()
})();

//@path POST /accounts/addAccount
//@description adds an account row to the accounts table in db
//@access public
const addAccount = asyncHandler(async(req, res) => {
    let {
        username,
        firstName,
        lastName,
        accountType,
        password,
        balance
    } = req.body;

    balance = parseFloat(balance);

    if(!username || !firstName || !lastName || !accountType || !password || !balance){
        res.status(400); //bad request
        throw new Error('Please add valid username, firstName, lastName, accountType, password, balance');
    } else if(typeof balance !== 'number'){
        res.status(400);
        throw new Error('Balance must be a number.');
    }

    let post = {
        username,
        firstName,
        lastName,
        accountType,
        password,
        balance,
    }
    let sql = 'insert into accounts set ?';

    await connection.query(sql, post, (err, result) => {
        if(err){
            res.status(500);
            throw new Error(`Couldn't create account: ${err.message}`);
        } else {
            res.status(201);
            res.send({username, accountId: result.insertId});
        }
    });

    
}); //ends addAccount

//@path GET /accounts/getAccount
//@description retrieves account row from accounts table
//@access public
const getAccount = asyncHandler(async(req, res) => {
    console.log(req);
    let accountId = parseInt(req.query.accountId);
    if(!accountId){
        res.status(400);
        throw new Error('Please use a valid accountId.');
    }

    let sql = 'select * from accounts where id=?';

    await connection.query(sql, accountId, (err, result) =>{
        if(err){
            res.status(500);
            throw new Error(err.message);
        } else {
            res.status(200);
            res.send(result);
        }
    });

});//ends getAccount

//@path POST /accounts/doTransaction
//@description adds transaction row to the transaction table
//@access private
const doTransaction = asyncHandler(async(req, res) => {
    let {
        accountId,
        transactionType,
        transactionAmount
    } = req.body;
    let balance = 0;

    transactionAmount = parseFloat(transactionAmount);

    if(!accountId || !transactionType || !transactionAmount){
        res.status(400);
        throw new Error('Please add valid accountId, transactionType, transactionAmount');
    } else if(transactionType.toLowerCase() !== "withdraw" && transactionType.toLowerCase() !== 'deposit'){
        res.status(400);
        throw new Error('Please add valid transactionType: withdraw or deposit');
    }else {
        //check if account exists
        let sql = 'select * from accounts where id=?';
        await connection.query(sql, accountId, (err, result) => {
            result = result[0];
            balance = result.balance;
            if(err){
                res.status(500);
                throw new Error(err.message);
            } else if(result.length == 0) {
                res.status(404);
                res.send({message: `Account ${accountId} not found.`});
            } else if(transactionType.toLowerCase() === 'withdraw' && parseFloat(result.balance) - transactionAmount < 0){
                res.status(403);
                res.send({message: `Account ${accountId} does not have sufficient funds to withdraw.`});
            } else if(transactionType.toLowerCase() === 'deposit' && parseFloat(result.balance) + transactionAmount > ((2**31) - 1 )){
                res.status(403);
                res.send({message: `Cannot deposit over account ${accountId}'s limit.`});
            } else{
                updateBalanceInsertTransaction(balance, accountId, transactionType,transactionAmount);
                res.status(201);
                res.send({message: 'Transaction successful'});
            }
        });//ends connection.query
    }
});//ends doTransaction

//@path GET /accounts/getTransactions
//@description retrieves transaction rows from the transaction table
//@access public
const getTransactions = asyncHandler(async(req, res) => {


    let sql = 'select * from transactions where accountId=?';
    return;
});

//helpers
//updates balance and adds transaction
const updateBalanceInsertTransaction = asyncHandler(async(balance, accountId, transactionType, transactionAmount) =>{
    //update balance
    if(transactionType === 'withdraw'){
        balance = balance - transactionAmount;
    } else if(transactionType === 'deposit'){
        balance = balance + transactionAmount;
    }
    let sql = `update accounts set balance = ${balance} where id = ${accountId}`;
    await connection.query(sql, (err, result) => {
        if(err){
            throw new Error(err.message);
        }
    });
    //insert transaction
    sql = 'Insert into transactions set ?';
    post = {accountId, transactionType, transactionAmount};

    await connection.query(sql, post, (err, result) => {
        if(err){
            throw new Error(err.message);
        } else {
            return balance;
        }
    });
}); //ends helper updateBalanceInsertTransaction


module.exports = { 
    addAccount,
    getAccount,
    doTransaction,
    getTransactions

 };