import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop, faPhoneAlt, faSurprise } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import Partners from '../Partners/Partners';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

const aboutUs = [
     
]
const explore = [
    {name: "Gallery" , link: "/gallery"},
    {name: "Testimonials" , link: "/testimonials"},
    {name: "Services" , link: "/services"},
    {name: "Shortcodes" , link: "/shortcodes"}
]
const exploreMore = [
    {name: "Contacts" , link: "/contacts"},
    {name: "Blogs" , link: "/blogs"},
    {name: "Get Taxi" , link: "/gettaxi"}
]
const contactUs = [

]


const Footer = () => {
    return (
        <section style={{backgroundColor: '#161616'}} className="footer-container">
            <Partners></Partners>
            <div className="">
                <div className="container">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="ABOUT US" menuItems={aboutUs}> 
                    <br/>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum est natus quos delectus! Quos, voluptatum.</p>
                    <br/>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FacebookIcon className="icon"></FacebookIcon></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><InstagramIcon className="icon"></InstagramIcon></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><TwitterIcon className="icon"></TwitterIcon></a></li>
                            <li className="list-inline-item"><a href="//pinterest.com"><PinterestIcon className="icon"></PinterestIcon></a></li>
                        </ul>
                        
                    </FooterCol>
                    <FooterCol key={4} menuTitle={"EXPLORE"} menuItems={explore}/>
                    <FooterCol key={2} menuTitle="." menuItems={exploreMore}/>
                    <FooterCol key={3} menuTitle="CONTACT US" menuItems={contactUs}>
                    <h6 className="text-white">Address: <span className="text-secondary">43 2-nd Avenue, New York, NY 29004-7153</span></h6>
                    <br/>
                        <div className="contact-list">
                            <li><FontAwesomeIcon style={{color: '#ffc61a'}}  icon={faPhoneAlt} /> 800-5-800</li>
                            <li><FontAwesomeIcon  style={{color: '#ffc61a'}}   icon={faEnvelope} /> webpage.service@info.bd</li>
                            <li><FontAwesomeIcon   style={{color: '#ffc61a'}}  icon={faSurprise} /> getwebpageservice</li>
                        </div>
                        <br/>
                        
                    </FooterCol>
                   
                </div>
                </div>
            </div>
            <div className="copyRight text-center">
                    <p style={{color: '#868686'}}><span>Webpage Service</span> {(new Date()).getFullYear()} - All Rights Reserved <span>Terms of use</span></p>
                    
                </div>
        </section>
    );
};

export default Footer;