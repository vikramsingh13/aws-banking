import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Home = ({setTab}) => {
    return (
        <div className='container d-flex flex-column gap-3 text-center align-items-center justify-content-center'>
            <Image 
                src={require("../assets/header.jpg")} fluid
                className="rounded mx-auto d-block"

            />
            <br />
            <h3 className="">
                You're Poorer Than You Think!</h3>
            <br />
            <br />
            <br />
            <br />
            <div className="">
                <Button id='1' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Home</Button>&nbsp;
                <Button id='2' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Add Account</Button>&nbsp;
                <Button id='3' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Transactions</Button>&nbsp;
                <Button id='4' variant="dark" href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Balance</Button>
            </div>

        </div>
    );
};

export default Home;