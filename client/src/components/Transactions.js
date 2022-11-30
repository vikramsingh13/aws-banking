import React, {useState} from 'react';

const Transactions = (props) => {
    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await Backend.post('/accounts/doTransaction',{
            accountId: id,
            transactionType: type,
            transactionAmount: amount
        }).catch(err =>{
            console.log(err.message);
        });
        setResponse(res);
        console.log(res);
    }

    return(
        <div className='transactions'>
            <h3>Deposit/withdraw</h3>
            <form className='add-account-form'>
                <label>Account id:</label>
                <input type='text' value={id} onChange={(e)=>setId(e.target.value)}
                /><br />
                <label>Transaction type:</label>
                <select type='text' value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select><br />
                <label>Amount:</label>
                <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)}
                /><br />

                <button 
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Confirm</button> 
            </form>
        </div>
    );
}

export default Transactions;