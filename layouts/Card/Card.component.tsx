import React from "react";
import Image from "next/image";
import styles from './Card.module.css'


export const Card = (props: any) => {
    if (props.isMainCard){
        return(
            <div className={`${styles["card"]}  ${"text-center"} ${"mx-4"} ${"p-2"}`}>
                <Image className="mx-auto" width={40} height={40} src={props.logo} alt="Domify - wynajem mieszkania"/>
                <p className={ `${styles["card-subtitle"]} ${"mt-2"}`}>{props.header}</p>
                <p className="mt-3">{props.content}</p>
            </div>
        )
    }
    return(
        <div className={`${styles["content"]} ${"text-center"} ${"p-2"}`}>
            <Image
                width={40} 
                height={40} 
                className={`${styles["logo-header"]}`} 
                src={props.logo} 
                alt="Domify - wynajem mieszkania"/>
            <h4 className={`${styles["card-header"]}`}>{props.header}</h4>
            <p className="px-1">{props.content}</p>
            <a className={`${styles["gray-anchor"]}`} href={props.logo === 'tgLogo' ? 'https://telegram.me/DomifyBot' : 'https://www.facebook.com/domifybot/'}>{props.label}</a>
        </div>
    )
}