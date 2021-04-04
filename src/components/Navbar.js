import React from 'react'
//import { Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
//import { FormControl } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'
//import { Form } from 'react-bootstrap'
//import { NavDropdown } from 'react-bootstrap'

const AppNavbar = () => {
    return (

        <div className="wrapper nav-flex">
            <nav>

                <i class="material-icons brand-icon">fastfood</i>
            </nav>
            <nav class="navigation">
                <ul>
                    <li><a href="#">RECIPES</a></li>
                    <li><a href="#">CATEGORIES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                </ul>
            </nav>
            <nav class="login-area">
                <button class="login"><a href="#">LOGIN</a></button>
                <button class="register"><a href="#">REGISTER</a></button>
            </nav>
        </div>





    )
}


export default AppNavbar