import Image from 'next/image'
import coupleImage from '../../public/1.jpg'
import logoFaviconPng from '../../public/logo_favicon.png'
import iphoneImg from '../../public/iphone.png'
import msgImg from '../../public/msg_logo.png'
import polandMap from '../../public//poland_map.jpg'
import glassImg from '../../public/magnifying-glass-tilted-left_1f50d.png'
import bellImg from '../../public/bell_1f514.png'
import { IntroHeader } from '../IntroHeader/IntroHeader.component'
import { Section } from '../Section/Section.component'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
    <IntroHeader/>
    <div>
        <section id="title" className="container-fluid">
            <div className= {`${styles['bg-green']} ${"row"}`}>
                <div className="col-8 mt-2" style={{paddingLeft: "0"}}>
                    <Image
                        className={styles["inspiration"]} 
                        src={coupleImage} 
                        alt="Wynajem mieszkania"/>
                </div>
                <div className="col-4 d-block my-auto">
                    <h3 className={`${styles['txt-green-baloo-28px']} ${"text-center"}`}  style={{color: "white"}}>Wynajęcie nowego mieszkania to początek czegoś wspaniałego!</h3>
                </div>
            </div>
        </section>
    </div>
    <Section
        h1 = 'Domify. Bot'
        logoFaviconPng = {logoFaviconPng}
        greenSubtitle = 'Wszystkie oferty w jednym miejscu - w twoim messengerze'
        green = 'Domify automatycznie monitoruje wszystkie ogłoszenia na olx, otodom, gumtree itd. i wysyła je do ciebie. A po określeniu kryteriów wyszukiwania, będziesz otrzymywać tylko odpowiednie dla Ciebie opcje 🎯'
        label = 'Przejdź do Domify. Bot'
        sectionImg = {iphoneImg}
        logo1 = {msgImg}
        header1 = 'Nie musisz nic instalować'
        content1 = 'Domify jest dostępny bezpośrednio w twoim Facebook Messengerze'
        logo2 = {glassImg}
        header2 = 'Automatyczne wyszukiwanie'
        content2 = 'Domfy wyszuka dla Ciebie najlepsze oferty.'
        logo3 = {bellImg}
        header3 = 'Bądź Informowany'
        content3 = 'Bądź pierwszym, który zostanie powiadomiony o atrakcyjnych ofertach'
    ></Section>
    <section id="map">
        <div className="text-center">
            <h2 className={`${styles["h2-baloo2-28px"]} ${"mt-5"}`}>Rozpoczynamy testy naszej aplikacji w Warszawie</h2>
            <p className={`${styles["green-subtitle"]}`}>nowe lokalizacje będą dodawane krok po kroku </p>
            <div className="d-flex justify-content-center">
                <Image src={polandMap} alt="Poland map"/>
                <span className={styles.warszawa}>
                    <h3 className="my-auto pt-4">Warszawa</h3>
                </span>
            </div>               
        </div>
    </section>


    <section className={`${styles["bg-green"]}`} id="kontakt-form">
        <div className="container" style={{paddingTop: '50px', paddingBottom: '50px'}}>
            <div className="row">
                <div className="col-12 pt-5">
                    <h2 className={`${styles["txt-green-baloo-28px"]} ${"text-center"}`}style={{color: 'white'}}>Zachęcamy do kontaktu z nami</h2>
                </div>
            </div>
            
            <div className="flex-column pb-5 mt-2">
                <div className="d-flex justify-content-center ms-md-5 ">
                    <div className="mx-3">
                        <button style={{width: "180px"}} className={`${styles["btn-start-custom"]}`}>facebook</button>
                    </div>
                    <div className="mx-3">
                        <button style={{width: "180px"}} className={`${styles["btn-start-custom"]}`}>instagram</button>
                    </div>
                    <div className="mx-3">
                        <button style={{width: "180px"}} className={`${styles["btn-start-custom"]}`}>email</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Home;
