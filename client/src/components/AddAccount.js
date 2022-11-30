import React, {useState} from 'react';

const AddAccount = (props) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountType, setAccountType] = useState('checking');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='add-account'>
            <h3>Add Account</h3>
            <form className='add-account-form'>
                <label>Username:</label>
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}
                /><br />
                <label>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}
                /><br />
                <label>First name:</label>
                <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                /><br />
                <label>Last name:</label>
                <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}
                /><br />
                <label>Account type:</label>
                <select type='text' value={accountType} onChange={(e)=>setAccountType(e.target.value)}>
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                </select><br />
                <label>Balance:</label>
                <input type='text' value={balance} onChange={(e)=>setBalance(e.target.value)}
                /><br />

                <button 
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Add Account</button> 
            </form>
        </div>
    );
}

export default AddAccount;