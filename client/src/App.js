import React, {useState} from 'react';
import AddAccount from './components/AddAccount';
import Transactions from './components/Transactions';
import Balance from './components/Balance';

const App = () => {
    let {tab, setTab} = useState('');
    
    return(
        <div className='app'>
            <div className='app-title'>Bezos Bank</div>
            <AddAccount />
            <Transactions />
            <Balance />
        </div>
    );
};


export default App;