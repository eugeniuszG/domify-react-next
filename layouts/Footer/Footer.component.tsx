import Link from "next/link";
import React from "react";
import styles from './Footer.module.css'

export const Footer = (props: any) => {
    let dateYear = new Date().getFullYear() 
    return(
        <footer className={styles['footer']}>
            <div className="pt-2 mt-auto">
                <ul className={`${"nav"} ${"justify-content-center"}`}>
                    <li className={`${'nav-item'} ${"px-5"}`}>
                        <Link href='/terms' className={`${"mx-3"}`}><a className={styles["nav-link"]}>Terms of Service</a></Link>
                    </li>
                    <li className={`${styles["nav-item"]} ${"px-5"}`}>
                        <Link href='/privacy-policy' className={`${"mx-3"}`}><a className={styles["nav-link"]}>Apllication Privacy Statement</a></Link>
                    </li>
                    <li className={`${styles['nav-item']} ${"px-5"}`}>
                        <Link href='/gdpr' className={`${"mx-3"}`}><a className={styles["nav-link"]}>GDPR</a></Link>
                    </li>
                </ul>
                <div className={`${styles['txt-domify']} ${"text-center"}`}>
                    <span>©Domify {dateYear}</span>
                </div>
            </div>
        </footer>
    )
}