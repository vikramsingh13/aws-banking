import React, {useState} from 'react';

const Balance = (props) => {
    const [id, setId] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div className='balance'>
            <h3>Check Balance</h3>
            <form className='add-account-form'>
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