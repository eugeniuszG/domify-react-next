import { NextPage } from "next";
import React from "react";
import style from './Terms.module.css'
 
 const Terms = () => {
    let dateYear = new Date().getFullYear() 
    return(
        <div>
        <section className="start">
        <div className="container">
            <p className={`${style["h2-baloo2-28px"]} ${"text-center"}`}>Website Terms and Conditions of Use</p>
            <div className="body my-md-5 my-3 mx-md-5 mx-1">
                <div className={`${style["txt-terms"]} ${"mx-md-5"}`}>
                    <p>Domify Website: https://www.domifybot.pl/<br/> owned by ООО «Парасоль». Brest. Belarus</p>
                    <p>Domify Application: any application made and run by Domify unclouding the Facebook messenger bot @domifybot</p>
                    <p>Domify Application notifies users about the new posts on third party platforms and redirects users to those platforms. Domify works as an aggregator service and should not be interpreted as a platform for renting a house or apartment. Domify allows users to see the housing ads and (upon their will) check those ads on the platform of a third-party.</p>
                    <p>Domify is not a broker, agent, or any other intermediary party in any deals arranged between users and/or the third party. Domify does not participate in any user deals.</p>
                    <p>1. Terms<br/>By accessing Domify Website and/or Domify Application, accessible from domifybot.pl or facebook platform, you are agreeing to be bound by these Application and Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. </p>
                    <p>By accessing Domify Application you are agreeing that Domify Application will send you messages with the new housing ads. </p>
                    <p>2. Disclaimer<br/>All the materials on Domify’s Website are provided as is. Domify makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Domify does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or Application or otherwise relating to such materials or any sites linked to this Website.</p>
                    <p>4. Limitations<br/>Domify will not be hold accountable for any damages that will arise with the use or inability to use the materials on Domify’s Website or Application, even if Domify or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Domify is not responsible for correctness and validity of the materials available on Domify’s Website or Application.</p>
                    <p>5. Revisions and Errata<br/>The materials appearing on Domify’s Website may include technical, typographical, or photographic errors. Domify will not promise that any of the materials in this Website are accurate, complete, or current. Domify may change the materials contained on its Website at any time without notice. Domify does not make any commitment to update the materials.</p>
                    <p>6. Links<br/>Domify has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Domify of the site. The use of any linked website is at the user’s own risk.</p>
                    <p>7. Site Terms of Use Modifications<br/>Domify may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                    <p>8. Governing Law<br/>Any claim related to Domify Website shall be governed by the laws of Belarus without regards to its conflict of law provisions.</p>
                    <p>9. Contact information:<br/>You can always contact us via our email: domify.bot@gmail.com.</p>
                    <p>Updated: 01.12.{dateYear}</p>
                </div>
            </div>
        </div>
        </section>
        </div>
    )
}

export default Terms;