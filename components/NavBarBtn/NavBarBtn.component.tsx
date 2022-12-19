import Link from "next/link";
import React from "react";
import styles from  './NavBarBtn.module.css'



export const NavBarBtn = ({ label }: any) => {
    let route;
    switch (label) {
        case 'Najnowsze Oferty':
            route = 'rent-offers'
            break;
        default:
            route = '/';
            break;
    }
    return(
        <div className={`${styles["txt-header"]}`}>
            <div className="me-sm-4 pe-sm-4">
                <Link href={route}><a className={`${styles["contact"]} ${"text-decoration-none nav-item nav-link active"}`}>{ label }</a></Link>
            </div>
        </div>
    )
}

