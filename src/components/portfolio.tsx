'use client'
import Image from "next/image"
import { useEffect,useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: true
        });
    }, []);
    const [usePortfolio,setUsePortfolio] = useState("VECTORIZATION")
    return (
        <section className="portfoliocontainer" id="portfoliosectioni">
        <div data-aos="fade-up" data-aos-duration={700} className="headingss pb-0" id="portheadingss">
            <h1>OUR <span>PORTFOLIO</span></h1>
            <p>Take a look at some of our recent projects, showcasing our skills and more.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration={700} className="ahref">
            <a id="pactive" className="cursor-pointer !text-white hover:!text-[#6754E9]" onClick={()=>{setUsePortfolio("VECTORIZATION")}}>VECTORIZATION</a>
            <a id="pactive" className="cursor-pointer !text-white hover:!text-[#6754E9]" onClick={()=>{setUsePortfolio("WEB DEV")}}>WEB DEV</a>

        </div>
        {usePortfolio == "VECTORIZATION"?
        <div data-aos="fade-right" data-aos-duration={1000} className="portitems">
            <div className="pb">
                <Image className="h-full" src="/port1.jpg" alt="portfolio1" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="/port2.png" alt="portfolio2" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="/port3.jpg" alt="portfolio3" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="/port4.jpg" alt="portfolio4" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="/port5.jpg" alt="portfolio5" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="/port6.jpg" alt="portfolio6" height={500} width={500}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="/port7.jpg" alt="portfolio7" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="/port8.png" alt="portfolio8" height={200} width={200}/>
            </div>
            <div className="pb" id="pbid">
                <Image className="h-full" src="/port9.png" alt="portfolio9" height={200} width={200}/>
            </div>
        </div>:
        <div data-aos="fade-right" data-aos-duration={1000} className="portitems">
            <div className="pb">
                <Image className="h-full" src="" alt="portfolio1" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="" alt="portfolio2" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="" alt="portfolio3" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="" alt="portfolio4" height={200} width={200}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="" alt="portfolio5" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="" alt="portfolio6" height={500} width={500}/>
            </div>
            <div className="pb1">
                <Image className="h-full" src="" alt="portfolio7" height={200} width={200}/>
            </div>
            <div className="pb">
                <Image className="h-full" src="" alt="portfolio8" height={200} width={200}/>
            </div>
            <div className="pb" id="pbid">
                <Image className="h-full" src="" alt="portfolio9" height={200} width={200}/>
            </div>
        </div>}
    </section >
    )
}
export default Portfolio