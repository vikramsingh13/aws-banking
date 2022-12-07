import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = ({setTab}) => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="">
            <Container>
                <Navbar.Brand href="#">Bezos Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link id='1' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Home</Nav.Link>
                    <Nav.Link id='2' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Add Account</Nav.Link>
                    <Nav.Link id='3' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Transactions</Nav.Link>
                    <Nav.Link id='4' href="#" onClick={(e) => setTab(parseInt(e.target.id))}>Balance</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;