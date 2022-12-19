import React from 'react';
import styles from './NavBar.module.css'
import { NavBarBtn } from '../../components/NavBarBtn/NavBarBtn.component';
import logo from '../../public/Logo.png'
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <div className="d-flex py-2 pe-sm-5">
                        <Image src={logo} alt="logo" className="my-auto" height={40} width={40}/>
                        <div className="my-auto">
                            <NavBarBtn label = "Domify"/>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                        <NavBarBtn label = "Home"/>
                        <NavBarBtn label = "Najnowsze Oferty"/>
                        <NavBarBtn label = "Kontakt"/>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}