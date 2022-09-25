import React from 'react';
import styles from './ButtonPrimary.module.css'


export const ButtonPrimary = (props: any) => {
    return(
        <div className="pt-4">
            <button className={styles["btn-start-footer"]}>{props.label}</button>
        </div>
    )
}