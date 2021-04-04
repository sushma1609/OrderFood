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
                {/* <a href="#"><img src="http://passwordchef.co/images/password-chef-logo.png" class="logo"/></a> */}
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
        //     <Navbar bg="dark" expand="lg" variant='dark'>
        //         <h1 className="display-1">
        //             <i class="material-icons brand-icon">
        //                 delivery_dining</i><Navbar.Brand href="#home"><h1>ORDER YOUR FOOD</h1></Navbar.Brand>
        //         </h1>
        //         {/* <Navbar.Brand href="#home"><h1>Hung Out</h1></Navbar.Brand> */}
        //          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        //          <nav>
        //   <a href="#"><img src="http://passwordchef.co/images/password-chef-logo.png" class="logo"></a>
        //     </nav>
        

        
    
    )
}


export default AppNavbar