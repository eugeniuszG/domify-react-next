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
                <div className="col-9" style={{position: "relative", paddingLeft: "130px"}}>
                    <div className="pe-5 me-5" style={{position: "absolute", bottom: "0px"}}>
                        <div className="d-sm-flex flex">
                            <h1 className={`${styles["h2-baloo2"]}`}>{props.h1}</h1>
                            <Image 
                                className="p-2 mb-1"
                                width={56}
                                height={56}
                                src={props.logoFaviconPng}
                                alt="Domify - wynajem mieszkania"/>
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
                <div className="col-3">
                    <div className="ms-2">
                        <Image 
                            src={props.sectionImg}
                            height={378}
                            width={185}
                            alt="Domify"/>
                    </div>
                </div>
            </div>
            <div className="flex-column mb-4">
                <div className="d-flex justify-content-center ms-md-5">
                    <div className="mx-auto">
                        <Card
                            isMainCard = {true} 
                            logo = {props.logo1}
                            header = {props.header1}
                            content = {props.content1}
                        ></Card>
                    </div>

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
            </div>
        </section>
        </div>
    )
}