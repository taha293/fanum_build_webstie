'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: true
        });
    }, []);
    return (
        <section className="aboutcontainer overflow-hidden" id="aboutsectioni">
            <div data-aos="fade-up" data-aos-duration={700} className="headingss">
                <h1>ABOUT <span>US</span></h1>
            </div>
            <div data-aos="fade-left" data-aos-duration={900} className="about lg:!pl-[40px] xl:!pl-[70px]">
                <p className="mb-9">At Fanum Build, we&apos;re passionate about helping businesses and individuals bring their ideas to life. We specialize in providing top-notch freelancing services, including graphic design, web development, SEO, and more. <br /> <br />With a commitment to quality and creativity, our team works closely with clients to deliver solutions that not only meet but exceed expectations. <br /> <br />Every project is a collaboration—crafted with care, precision, and innovative thinking.We believe in clear communication, timely delivery, and long-term partnerships. Whether you&apos;re launching a new brand or improving an existing one, Fanum Build is your go-to partner for reliable, results-driven services.

                </p>
                <a href="/#quote">
                <button
                    className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-md group hover:!bg-black"
                    id="btn2">
                    <span className="relative z-10 text-white">Know More</span>
                    <span className="absolute inset-0 -translate-x-full bg-[#6754E9] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                </button></a>
            </div>
        </section>
    )
}
export default About