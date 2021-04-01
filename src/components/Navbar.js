import React from 'react'
//import { Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
//import { FormControl } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'
//import { Form } from 'react-bootstrap'
//import { NavDropdown } from 'react-bootstrap'

const AppNavbar = () => {
    return (
        <div className="design">
            <Navbar bg="dark" expand="lg" variant='dark'>
                <h1 className="display-1">
                    <i class="material-icons brand-icon">
                        delivery_dining</i><Navbar.Brand href="#home"><h1>ORDER YOUR FOOD</h1></Navbar.Brand>
                </h1>
                {/* <Navbar.Brand href="#home"><h1>Hung Out</h1></Navbar.Brand> */}
                 <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

            </Navbar>
        </div >
    )
}


export default AppNavbar