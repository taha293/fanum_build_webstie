'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: true
        });
    }, [])
    return(
         <section className="projectcontainer overflow-hidden" id="quote">
        <div className="projectitems">
            <h1 data-aos="fade-up" data-aos-duration={700}>START YOUR NEW PROJECT</h1>
            <div data-aos="fade-right" data-aos-duration={900} className="projectform">
                <form target="_blank" action="https://formsubmit.co/9eec06a24c7966d34b48f1229007e6a2" method="post">
                    <input type="text" name="name" placeholder="YOUR NAME"/>
                    <input type="email" name="email" placeholder="YOUR EMAIL"/>
                    <input type="text" name="number" placeholder="YOUR PHONE"/>
                    <button type="submit"
                className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-md group hover:!bg-black"
                id="btn2"
            >
                <span className="relative z-10 text-white">Send Request</span>
                <span className="absolute inset-0 -translate-x-full bg-[#6754E9] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            </button>
                </form>
            </div>
            <p data-aos="fade-down" data-aos-duration={900}>Ready to bring your ideas to life? Fill in your details and let&apos;s get started on something amazing together. We will turn your projecy into reality with creativity, skill, and dedication.</p>
        </div>
    </section>
    )
}
export default Contact