import React, {useState} from 'react';
import AddAccount from './components/AddAccount';
import Transactions from './components/Transactions';
import Balance from './components/Balance';
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    let [tab, setTab] = useState(1);

    return(
        <div className='app'>
            <NavBar setTab={setTab} />
            {
                tab === 1 ? <Home setTab={setTab}/> : tab === 2 ? <AddAccount /> : 
                tab === 3 ? <Transactions /> : tab === 4 ? <Balance /> : <Home setTab={setTab}/>
            }
        </div>
    );
};


export default App;