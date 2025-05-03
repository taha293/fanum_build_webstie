'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Review(){
     useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: true
            });
        }, []);
    return(
        <section className="reviewscontainer overflow-hidden" id="reviewssectioni">
        <div data-aos="fade-up" data-aos-duration={700} className="headingss pb-0 ">
            <h1>PEOPLES <span>ABOUT US</span></h1>
            <p>Here&apos;s what our valued clients say about working with Fanum Builds. We take pride in delivering high-quality work, and their words speak for our dedication and service.</p>
        </div>
        <div className="reviews">
            <div data-aos="fade-right" data-aos-duration={900} className="reviewsitems" id="rev1">
                <div className="reviewsitem1">
                    <i className="fa-solid fa-person-rays" style={{color: "#e1e2e3"}}></i>
                </div>
                <div className="reviewsitem2">
                    <h1>USMAN RAZA</h1>
                    <span>I needed a custom Shopify store, and they delivered exactly what I wanted. Smooth process and amazing support!</span>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration={900} className="reviewsitems" id="rev2">
                <div className="reviewsitem1">
                    <i className="fa-solid fa-person-rays" style={{color: "#e1e2e3"}}></i>
                </div>
                <div className="reviewsitem2">
                    <h1>FATIMA NOOR</h1>
                    <span>They turned my logo into a high-quality vector file in no time. Super professional and fast delivery!</span>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration={900} className="reviewsitems" id="rev3">
                <div className="reviewsitem1">
                    <i className="fa-solid fa-person-rays" style={{color: "#e1e2e3"}}></i>
                </div>
                <div className="reviewsitem2">
                    <h1>ALI HAMZA</h1>
                    <span>Fanum Builds developed my website perfectly! The design is clean and works great on all devices. Highly recommended!</span>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration={900} className="reviewsitems" id="rev4">
                <div className="reviewsitem1">
                    <i className="fa-solid fa-person-rays" style={{color: "#e1e2e3"}}></i>
                </div>
                <div className="reviewsitem2">
                    <h1>SMITH HENRY</h1>
                    <span>Incredible service! The team was patient, skilled, and turned my ideas into a beautiful, functional website.</span>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Review