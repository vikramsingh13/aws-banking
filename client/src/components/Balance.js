import React, {useState} from 'react';
import Backend from '../apis/Backend';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Balance = (props) => {
    const [id, setId] = useState('');
    const [response, setResponse] = useState([]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await Backend.get('/accounts/getAccount', {
            params: {
                accountId: id
            }
        }).catch(err => {
            console.log(err.message);
        });
        setResponse(res);
        console.log(res.data.length);
    }

    return(
        <Form className='balance w-50 container align-items-center justify-content-center'>
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
    );
}

export default Balance;