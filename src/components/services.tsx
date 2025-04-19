'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';


function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: true
        });
    }, []);
    const notify = () => toast.info('Fill the form below! Our team will contact you soon.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Slide,
        });
    return (
        <section className="servicescontainer overflow-hidden" id="servicessectioni">
            <div data-aos="fade-down" data-aos-duration={700} className="headingss">
                <h1>OUR <span>SERVICES</span></h1>
                <p>We provide a wide range of digital solutions designed to boost your online presence and streamline your business success.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration={900} className="services">
                <div className="serv">
                    <div>
                        <i className="fa-solid fa-star" style={{ color: "#550cc1" }}></i>
                    </div>
                    <h1>WEB DEVELOPMENT</h1>
                    <span>We build fast, responsive websites and web apps tailored to your goals and business needs.</span>
                    <a href="/#quote" className="!text-[#6754E9]" onClick={notify}>get service</a>
                </div>

                <div className="serv">
                    <div>
                        <i className="fa-solid fa-star" style={{ color: "#550cc1" }}></i>
                    </div>
                    <h1>GRAPHIC DESIGN</h1>
                    <span>We create eye-catching visuals and branding assets that leave a lasting impression.</span>
                    <a href="/#quote" className="!text-[#6754E9]" onClick={notify}>get service</a>
                </div>

                <div className="serv">
                    <div>
                        <i className="fa-solid fa-star" style={{ color: "#550cc1" }}></i>
                    </div>
                    <h1>DIGITIZING</h1>
                    <span>We convert artwork into embroidery-ready files with accuracy, and professional finish.</span>
                    <a href="/#quote" className="!text-[#6754E9]" onClick={notify}>get service</a>
                </div>

                <div className="serv">
                    <div>
                        <i className="fa-solid fa-star" style={{ color: "#550cc1" }}></i>
                    </div>
                    <h1>SEO</h1>
                    <span>We optimize your online content to rank/ quote in search results and attract more traffic.</span>
                    <a href="/#quote" className="!text-[#6754E9]" onClick={notify}>get service</a>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Slide}
            />
        </section>
    )
}
export default Services