'use client'
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror:true
        });
      }, []);
    return (
        <section className="container">
            <h1 data-aos="fade-up" data-aos-duration={700}>WE ARE EXPERTS</h1>
            <p data-aos="fade-up" data-aos-duration={700} className="mb-3 sm:mb-0"><ReactTyped strings={["in Website development, Website designing, Shopify store creation, SEO Service, Graphics Designing, Video editing, Logo design, Banner design, Card design, Vector Redraw, Digitizing, Patches, Video creation, Youtube management"]} typeSpeed={25} /></p>
            <a href="/#quote" data-aos="fade-up" data-aos-duration={800}
                className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-md group hover:!bg-black"
                id="btn2"
            >
                <span className="relative z-10 text-white">Get a Quote</span>
                <span className="absolute inset-0 -translate-x-full bg-[#6754E9] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            </a>
        </section>
    )
}
export default Hero