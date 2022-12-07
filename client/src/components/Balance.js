import React, {useState} from 'react';
import Backend from '../apis/Backend';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
=======
>>>>>>> 71399c0e3ee593f8e5b54a82b0e7f32fc7121ea0

const Balance = (props) => {
    const [id, setId] = useState('');
    const [response, setResponse] = useState([]);
<<<<<<< HEAD
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await Backend.get('/accounts/getAccount', {
            params: {
                accountId: id
            }
        }).catch(err => {
            console.log(err.message);
            setMessage('Account does not exist.');
            setResponse([]);
        });

        if(res.data.length === 0){
            setMessage('Account does not exist.');
            setResponse([]);
        } else{
            setMessage('We found following account details:')
            setResponse(res.data[0]);
        }
=======

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await Backend.get('/accounts/getAccount',{
            accountId: id
        }).catch(err =>{
            console.log(err.message);
        });
        setResponse(res);
        console.log(res);
>>>>>>> 71399c0e3ee593f8e5b54a82b0e7f32fc7121ea0
    }

    return(
        <div className="balance ">
            <Form className='balance-form w-50 container align-items-center justify-content-center'>
                <h3 className="text-center">Check Balance</h3>
                <Form.Group className='check-balance-form mb-3' controlId='formBasicEmail'>
                    <Form.Label>Account id:</Form.Label>
                    <Form.Control 
                        title="Enter Account Id" 
                        type='number' 
                        value={id} 
                        onChange={(e)=>setId(e.target.value)}
                        required={true}
                        min='1'
                    />
                </Form.Group>
                <br />
                <Button 
                    type="submit"
                    className="w-100"
                    onClick={(e) => handleSubmit(e)}
                    variant="primary"
                >Submit</Button> 
                
            </Form>
            <h4 className="w-50 container align-items-center justify-content-center">{message}</h4>
            {response.length !== 0 ? 
            <ListGroup className="align-items-center justify-content-center">
                <ListGroup.Item>Account Id : {response.id}</ListGroup.Item>
                <ListGroup.Item>Username : {response.username}</ListGroup.Item>
                <ListGroup.Item>Name : {response.firstName? response.firstName : "" + " " + response.lastName? response.lastName : ""}</ListGroup.Item>
                <ListGroup.Item>Account Type : {response.accountType}</ListGroup.Item>
                <ListGroup.Item>Balance : {response.balance}</ListGroup.Item>
            </ListGroup>
            : "" }
        </div>
    );
}

export default Balance;