import React, {useState} from 'react';
import Backend from '../apis/Backend';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Transactions = (props) => {
    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('');
    const [response, setResponse] = useState([])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await Backend.post('/accounts/doTransaction', {
            accountId: id,
            transactionType: type,
            transactionAmount: amount
        }).catch(err => {
            console.log(err.message);
        });
        setResponse(res);
        console.log(res.data);
    }

    return(
        <Form className='transactions w-50 container align-items-center justify-content-center'>
            <h3 className="text-center">Deposit/withdraw</h3>
            <Form.Group className='do-transaction-form'>
                <Form.Label>Account id:</Form.Label>
                <Form.Control type='text' value={id} onChange={(e)=>setId(e.target.value)}
                />
                <Form.Label>Transaction type:</Form.Label>
                <Form.Select type='text' value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </Form.Select>
                <Form.Label>Amount:</Form.Label>
                <Form.Control type='text' value={amount} onChange={(e)=>setAmount(e.target.value)}
                />
            </Form.Group>
            <br />
            <Button 
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="w-100"
            >Confirm</Button> 
            
        </Form>
    );
}

export default Transactions;