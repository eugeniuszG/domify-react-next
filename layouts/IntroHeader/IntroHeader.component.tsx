import React from "react";
import { Card } from "../Card/Card.component";
import messengerLogo from '../../public/msg_logo.png'
import telegramLogo from '../../public/tg-logo.png'
import introMain from '../../public/intro_main.svg'
import styles from './IntroHeader.module.css'
import Image from "next/image";

export const IntroHeader = () => {
    return(
    <div>
        <section>
            <div className="py-3">
                <div className={`${styles["bg-green-gradient"]} ${"d-block"} ${"mx-auto"}`}>
                    <div className="text-center">
                        <Image className="mt-5" width={445} height={218}  src={introMain} alt="Wynajem mieszkania Warszwa"/>
                        <span className={`${styles["h1-intro"]}`}>
                            <h1 className="mt-4">Szukaj mieszkania w nowy sposób</h1>
                        </span>
                    </div>
                </div>
            </div>

            <div className="d-block mt-5 text-center">
                <h2 className={`${styles["h2-intro"]}`}>Domify to rozwiązania upraszczające proces przeszukiwania i<br/>podejmowania decyzji w wyborze nowego mieszkania</h2>
            </div>

            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-4 ">
                      <div className={`${styles["content"]} ${"justify-contetn-center"}`}>
                            <Card 
                                logo = {messengerLogo} 
                                header = 'DomifyBot. Messenger'
                                content = 'monitoruje ogłoszenia i wysyła je w Messenger'
                                label = 'start'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles["content"]}>
                            <Card
                                logo = {telegramLogo} 
                                header = 'DomifyBot. Telegram'
                                content = 'monitoruje ogłoszenia i wysyła je w Telegram'
                                label = 'start'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles["content"]}>
                            <Card 
                                logo = {introMain} 
                                header = 'Domify. Oferty'
                                content = 'najnowsze ogłoszenia w jednym miejscu'
                                label = 'coming soon 2022'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}