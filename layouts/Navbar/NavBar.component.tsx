import React from 'react';
import styles from './NavBar.module.css'
import { NavBarBtn } from '../../components/NavBarBtn/NavBarBtn.component';
import logo from '../../public/Logo.png'
import Image from 'next/image';

export const NavBar = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row my-1">
                    <div className="col-6">
                        <div className="d-flex py-2 pe-sm-5">
                            <Image src={logo} alt="logo" className="my-auto" height={40} width={40}/>
                            <div className="my-auto">
                                <NavBarBtn label = "Domify"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 my-auto d-flex flex-row-reverse pe-5">
                        <NavBarBtn label = "Kontakt"/>
                        <NavBarBtn label = "Najnowsze Oferty"/>
                        <NavBarBtn label = "Home"/>
                    </div>
                </div>
            </div>
        </div>
    )
}