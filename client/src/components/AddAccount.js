import React, {useState} from 'react';
import Backend from '../apis/Backend';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddAccount = (props) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountType, setAccountType] = useState('checking');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState('');
    const [response, setResponse] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await Backend.post('/accounts/addAccount',{
            username,
            firstName,
            lastName,
            accountType,
            password,
            balance
        }).catch(err =>{
            console.log(err.message);
        });
        setResponse(res);
        console.log(res, res.length);
    }

    return (
        <Form className='add-account w-50 container align-items-center justify-content-center'>
            <h3 className="text-center">Add Account</h3>
            <Form.Group className='add-account-form mb3'>
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required="true"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required="true"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>First name:</Form.Label>
                <Form.Control type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required="true"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last name:</Form.Label>
                <Form.Control type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} required="true"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Account type:</Form.Label>
                <Form.Select type='text' value={accountType} onChange={(e)=>setAccountType(e.target.value)} required="true">
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Balance:</Form.Label>
                <Form.Control type='text' value={balance} onChange={(e)=>setBalance(e.target.value)} required="true"
                />
            </Form.Group>
            <br />
            <Button 
                variant="primary" 
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="w-100"
            >Add Account</Button> 
        </Form>
    );
}

export default AddAccount;