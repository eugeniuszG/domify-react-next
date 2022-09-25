import React from "react";
import style from './Gdpr.module.css'
 
const Gdpr = () => {
    let dateYear = new Date().getFullYear() 
    return(
        <div>
        <section className="start">
            <div className="container">
                <h1 className={`${style["h2-baloo2-28px"]} ${"text-center"}`}>General Data Protection Regulation (GDPR)</h1>
                <div className="body my-md-5 my-3 mx-md-5 mx-1">
                    <div className={`${style["txt-terms"]} ${"mx-md-5"}`}>
                        <p>
                            <div>General Data Protection Regulation (GDPR)</div>
                            <div>We are a Data Controller of your information.</div>
                            <div>Domify legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</div>
                            <div>• Domify needs to perform a contract with you</div>
                            <div>• You have given Domify permission to do so</div>
                            <div>• Processing your personal information is in Domify legitimate interests</div>
                            <div>• Domify needs to comply with the law</div>
                        </p>
                        <p>Domify will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
                        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
                        <p>
                            <div>In certain circumstances, you have the following data protection rights:</div>
                            <div>• The right to access, update or to delete the information we have on you.</div>
                            <div>• The right of rectification.</div>
                            <div>• The right to object.</div>
                            <div>• The right of restriction.</div>
                            <div>• The right to data portability</div>
                            <div>• The right to withdraw consent</div>
                        </p>
                        <p>Log Files<br/>Domify follows a standard procedure of using log files. These files log visitors when they visit websites or use the Domify bot in any messenger app. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, br/owser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.
                        </p>
                        <p>Cookies and Web Beacons<br/>
                            Like any other website, Domify uses cookies. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors br/owser type and/or other information.
                            For more general information on cookies, please read What Are Cookies.
                            </p>
                        <p>Google DoubleClick DART Cookie<br/>
                            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
                            </p>
                        <p>Our Advertising Partners<br/>
                            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.<br/>
                            • Google<br/>
                            https://policies.google.com/technologies/ads</p>
                        <p>Privacy Policies<br/>
                            You may consult this list to find the Privacy Policy for each of the advertising partners of Domify.
                            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Domify, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

                        </p>
                        <p>Note that Domify has no access to or control over these cookies that are used by third-party advertisers.</p>
                        <p>Third Party Privacy Policies<br/>
                            Domifys Privacy Policy does not apply to other advertisers, websites or platforms/applications from which you access our services. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
                            </p>
                        <p>Childrens Information<br/>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            Domify does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                        </p>
                        <p>Online Privacy Policy Only<br/>
                            Our Privacy Policy applies only to our online activities and is valid for visitors to our website and Facebook application @domifybot with regards to the information that they shared and/or collect. This policy is not applicable to any information collected offline.</p>
                        <p>Consent<br/>
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                        <p>Updated: 01.01.{dateYear}</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Gdpr;