import React from "react";
import styles from './Policy.module.css'
 
const Policy = () => {
    let dateYear = new Date().getFullYear() 
    return(
        <div>
        <section className="start">
            <div className="container">
                <h1 className={`${styles["h2-baloo2-28px"]} ${"text-center"}`}>Application Privacy Statement</h1>
                <div className="body my-md-5 my-3 mx-md-5 mx-1">
                    <div className={`${styles["txt-terms"]} ${"mx-md-5"}`}>
                        <p>This privacy statement (“Privacy Statement”) applies to the treatment of personally identifiable information submitted by, or otherwise obtained from, you in connection with the associated application – Domify Facebook Messenger @domifybot (later referred as “Application” or “DOMIFY”). By using or otherwise accessing the Application, you acknowledge that you accept the practices and policies outlined in this Privacy Statement.</p>
                        <p>WHAT PERSONAL INFORMATION DOES DOMIFY COLLECT?<br/>We collect the following types of information from our users:</p>
                        <p>1.   Personal Information You Provide to us:<br/>We may receive and store any information you submit to the Application (or otherwise authorize us to obtain). The types of personal information collected may include:<br/>- your general profile information (i.e. name and profile picture)<br/>- your primary email address <br/>- application specific data <br/>- Data/preferences that user shared in the application <br/>- IP address and browser information <br/>- demographic information (if applicable)<br/>- other information necessary for us to provide the Application services.</p>
                        <p>2.   Personal Information Collected Automatically:<br/>DOMIFY uses the information described in this Privacy Statement (i) internally, to analyze, develop and improve its products and services, and (ii) as set forth below in the “Will DOMIFY Share any of the personal information it Collects” section below.</p>
                        <p>HOW DOES DOMIFY USE THE INFORMATION IT COLLECTS?<br/>DOMIFY uses the information described in this Privacy Statement (i) internally, to analyze, develop and improve its products and services, and (ii) as set forth below in the “Will DOMIFY Share any of the personal information it Collects” section below.</p>
                        <p>APPLICATION PARTNER TREATMENT OF PERSONAL INFORMATION.<br/>DOMIFY may provide personal information to the applicable Application Partner. The Application Partner’s use of your personal information is subject to the Application Partner’s separate privacy policy – and not this Privacy Statement. The Application Partner’s privacy policy is linked to from within the Partner’s Facebook application.</p>
                        <p>WILL DOMIFY SHARE ANY OF THE PERSONAL INFORMATION IT RECEIVES?<br/>
                            Personal information about our users is an integral part of our business. We neither rent nor sell your personal information to anyone (with the exception of sharing your information with an applicable Application Partner – see the “Application Partner Treatment” section above). We share your personal information only as described below.
                        <br/>
                        Application Partners: We will share your personal information with an applicable Application Partner (see the “Application Partner Treatment” section above).<br/>
                        Business Transfers: In some cases, we may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that are transferred. Moreover, if DOMIFY, or substantially all of its assets were acquired, or in the unlikely event that DOMIFY goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of DOMIFY may continue to use your personal information as set forth in this policy.<br/>
                        Protection of DOMIFY and Others: We may release personal information when we believe in good faith that release is necessary to comply with the law; enforce or apply our conditions of use and other agreements; or protect the rights, property, or safety of DOMIFY, our employees, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.<br/>
                        With Your Consent: Except as set forth above, you will be notified when your personal information may be shared with third parties, and will be able to prevent the sharing of this information.</p>
                        <p>CONDITIONS OF USE.<br/>If you decide to use or otherwise access the Application, your use/access and any possible dispute over privacy is subject to this Privacy Statement and our Terms of Use, including limitations on damages, arbitration of disputes, and application of Polish law.
                        </p>
                        <p>THIRD PARTY APPLICATIONS/WEBSITES.<br/>The Application may permit you to link to other applications or websites. Such third-party applications/websites are not under DOMIFY’s control, and such links do not constitute an endorsement by DOMIFY of those other applications/websites or the services offered through them. The privacy and security practices of such third-party application/websites linked to the Application are not covered by this Privacy Statement, and DOMIFY is not responsible for the privacy or security practices or the content of such websites.</p>
                        <p>WHAT PERSONAL INFORMATION CAN I ACCESS?<br/>Domify will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                            <br/>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
                            <br/>
                            <br/>In certain circumstances, you have the following data protection rights:
                            <br/>• The right to access, update or to delete the information we have on you.
                            <br/>• The right of rectification.
                            <br/>• The right to object.
                            <br/>• The right of restriction.
                            <br/>• The right to data portability
                            <br/>• The right to withdraw consent
                            
                            <br/>
                            <br/>DOMIFY allows you to access the following information about you for the purpose of viewing, and in certain situations, updating that information:
                            <br/>- General user profile information (i.e. name and profile picture)
                            <br/>- User primary email address 
                            <br/>- Application specific data
                            <br/>- Data/preferences that user shared in the application 
                            <br/>- Demographic information (if applicable)
                            
                        </p>
                        <p>CAN CHILDREN USE THE APPLICATION?<br/>
                            Our site and the services available through DOMIFY are not intended for children under the age of 13. DOMIFY does not knowingly or specifically collect information about children under the age of 13 and believes that children of any age should get their parents’ consent before giving out any personal information. We encourage you to participate in your child’s web experience.
                            </p>
                        <p>CHANGES TO THIS PRIVACY STATEMENT.<br/>DOMIFY may amend this Privacy Statement from time to time. Use of information we collect now is subject to the Privacy Statement in effect at the time such information is used. If we make changes in the way we use personal information, we will notify you by posting an announcement on our Site or sending you an email. Users are bound by any changes to the Privacy Statement when he or she uses or otherwise accesses the Application after such changes have been first posted.</p>
                        
                        <p>QUESTIONS OR CONCERNS.<br/>If you have any questions or concerns regarding privacy on our Website, please send us a detailed message at domify.bot@gmail.com. We will make every effort to resolve your concerns.</p>
                        <p>Updated: 21.12.{dateYear}</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Policy;