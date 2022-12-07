import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Home = ({setTab}) => {
    return (
        <div>
            <Image 
                src={require("../assets/header.jpg")} fluid
                className="rounded mx-auto d-block"

            />
            <br />
            <h3 className="w-50 text-align-center container align-items-center justify-content-center">
                You're Poorer Than You Think!</h3>
            <br />
            <br />
            <div className="ms-auto w-50 container align-items-center justify-content-center">
                <Button id='1' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Home</Button>&nbsp;
                <Button id='2' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Add Account</Button>&nbsp;
                <Button id='3' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Transactions</Button>&nbsp;
                <Button id='4' variant="dark" href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Balance</Button>
            </div>

        </div>
    );
};

export default Home;