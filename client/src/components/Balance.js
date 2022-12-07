import React, {useState} from 'react';
import Backend from '../apis/Backend';

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
        console.log(res.data);
    }

    return(
        <div className='balance'>
            <h3>Check Balance</h3>
            <form className='check-balance-form'>
                <label>Account id:</label>
                <input type='text' value={id} onChange={(e)=>setId(e.target.value)}
                /><br />

                <button 
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Submit</button> 
            </form>
        </div>
    );
}

export default Balance;