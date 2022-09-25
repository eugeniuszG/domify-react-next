import React, { Fragment } from 'react'
import styles from './Loader.module.css'

export const LoaderSimple = () => (
    <Fragment>
        <div className={styles['ytp-spinner']} data-layer="4">
            <div>
                <div className={styles["ytp-spinner-container"]}>
                    <div className={styles["ytp-spinner-rotator"]}>
                        <div className={styles["ytp-spinner-left"]}>
                            <div className={styles["ytp-spinner-circle"]}></div>
                        </div>
                        <div className={styles["ytp-spinner-right"]}>
                            <div className={styles["ytp-spinner-circle"]}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)