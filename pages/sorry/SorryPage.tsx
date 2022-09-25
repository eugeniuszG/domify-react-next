import { NextPage } from "next";
import React, { Fragment } from "react";
import styles from './SorryPage.module.css'
 
const SorryPage: NextPage = () => {
    return(
        <Fragment>
            <div className={styles.header}>
                <div className={`${styles["inner-header"]} ${styles.flex}`}>
                    <h1>Sooory, this app is not responsive yet! Please, use your browser in desktop mode.</h1>
                </div>

                <div>
                    <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" xlinkHref="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering={'auto'}>
                        <defs>
                        <path id={styles["gentle-wave"]}  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className={styles.parallax} >
                            <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`${styles.content} ${styles.flex}`}>
                <p>Domify team</p>
            </div>
        </Fragment>
    )
}

export default SorryPage;