import React, {useState} from 'react';
import AddAccount from './components/AddAccount';
import Transactions from './components/Transactions';
import Balance from './components/Balance';

const App = () => {
    let {tab, setTab} = useState('');
    
    return(
        <div className='app'>
            <AddAccount />
            <Transactions />
            <Balance />
        </div>
    );
};


export default App;