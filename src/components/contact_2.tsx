'use client'
import Image from "next/image"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact2(){
    useEffect(() => {
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: true
                });
            }, []);
    return(
        <section className="contactscontainer" id="contactsectioni">
        <div data-aos="fade-up" data-aos-duration={700} className="headingss pb-0">
            <h1>OUR <span>CONTACTS</span></h1>
            <p>Have questions or need assistance? Get in touch with us—we&apos;re here to help and always ready to respond.</p>
        </div>
        <div className="contactsitems">
            {/* <div className="contactsitem1">
                <p> <i className="fa-solid fa-location-dot" style={{color: "#6754E9"}}></i>&emsp; Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. A dolor odio libero! </p>
            </div> */}
            <div data-aos="zoom-in" data-aos-duration={900} className="contactsitem2">
                <div className="contactsitem1">
                    <p> <i className="fa-solid fa-phone" style={{color: "#6754E9"}}></i> &emsp;(304) 387-2939 </p>
                </div>
                <div className="contactsitem1">
                    <p> <i className="fa-solid fa-phone" style={{color: "#6754E9"}}></i>&emsp; (312) 345-4112 </p>
                </div>
                <div className="contactsitem1">
                    <p> <i className="fa-solid fa-envelope" style={{color: "#6754E9"}}></i>&emsp;info@website.com </p>
                </div>
            </div>
        </div>
        <Image data-aos="fade" data-aos-duration={900} className="w-auto h-auto" src="/map.svg" alt="Our Location" height={300} width={1000}/>
    </section>
    )
}
export default Contact2