import React, { useEffect, useState } from 'react'
import {
    Container,
    /*Row*/
    Navbar,
    Offcanvas,
    Nav,
    NavDropdown,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../Header/header.css";

const Header = () => {

    const [open , setOpen] = useState(false);

    const toggleMenu=()=>{
        setOpen(!open)
    
    };
    
    useEffect(()=>{
        window.addEventListener("scroll", isSticky);
        return()=>{
            window.removeEventListener("scroll", isSticky)
        }
    })

    const isSticky=(e)=>{
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 120 ? header.classList.add('is-sticky') :
        header.classList.remove('is-sticky')
    }
    return (
        <header className='header-section'>
            <Container>
                
                    <Navbar expand="lg" className="p-0">
                        { /*logo section */}
                        <Navbar.Brand href="#">
                            <NavLink to='/'>Mimoka Tours & Safaris</NavLink>
                        </Navbar.Brand>
                        { /*End of logo section */}

                       
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="start"
                            show={open}
                        >
                            { /*mobile logo section */}

                            <Offcanvas.Header>
                                { /*end mobile logo section */}
                                <h1 className='logo'>Mimoka Tours & Safaris</h1>
                                <span className='toggler ms-auto onClick={toggleMenu}'>
                                    <i class="bi bi-x-lg"></i>

                                </span>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                    <NavLink className='nav-link' to='/'>ABOUT US</NavLink>
                                    <NavLink className='nav-link' to='/'>TOURS</NavLink>

                                    <NavDropdown
                                        title="DESTINATION"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                    >
                                        <NavDropdown.Item href="#action3">KENYA TOURS</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">TANZANIA TOURS</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">UGANDA TOURS</NavDropdown.Item>


                                </NavDropdown>
                                <NavLink className='nav-link' to='/'>GALLERY</NavLink>
                                <NavLink className='nav-link' to='/'>CONTACT</NavLink>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className='ms-ms-4 ms-2'>
                        <NavLink className='primaryBtn d-none d-sm-inline-block'>
                            Book Now
                        </NavLink>
                        <li className='d-inline-block d-lg-none ms-3 toggle-btn'></li>
                        <i className= {open ? "bi bi-list" : "bi bi-list"} onClick={toggleMenu}></i>
                    </div>

                </Navbar>
        
        </Container>
        </header >
    )
}

export default Header