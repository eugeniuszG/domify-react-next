import Image from "next/image";
import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary.component";
import { Card } from "../Card/Card.component";
import styles from './Section.module.css'

export const Section = (props: any) => {
    return(
        <div className="py-4 d-sm-flex" style={{background: props.isGray ? 'rgb(245, 245, 245)' : 'rgb(230, 230, 230)'}}>
            <section className="container" >
            <div className="row py-5">
                <div className="col-lg-9 d-flex">
                    <div className="ps-5-sm ms-5-sm text-center text-sm-start align-itmes-center">
                        <div>
                            <h1 className={`${styles["h2-baloo2"]}`}>{props.h1}
                                <span>
                                    <Image 
                                        className="p-2 mb-1 "
                                        width={56}
                                        height={56}
                                        src={props.logoFaviconPng}
                                        alt="Domify - wynajem mieszkania"/>
                                </span>
                            </h1>
                        </div>
                        <div>
                            <p className={`${styles["green-subtitle"]}`}>{props.greenSubtitle}</p>
                        </div>
                        <div>
                            <p style={{fontSize: "18px"}}>{props.green}</p>
                        </div>
                        <ButtonPrimary label={props.label}></ButtonPrimary>
                    </div>
                </div>
                <div className="col-lg-3 d-xs-none">
                    <div className="ms-2 mt-4 text-center">
                        <Image 
                            src={props.sectionImg}
                            height={378}
                            width={185}
                            alt="Domify"/>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                    <Card
                        isMainCard = {true} 
                        logo = {props.logo1}
                        header = {props.header1}
                        content = {props.content1}
                    ></Card>
                    <Card
                        isMainCard = {true} 
                        logo = {props.logo2}
                        header = {props.header2}
                        content = {props.content2}
                    ></Card>
                    <Card
                        isMainCard = {true} 
                        logo = {props.logo3}
                        header = {props.header3}
                        content = {props.content3}
                    ></Card>
            </div>
        </section>
        </div>
    )
}