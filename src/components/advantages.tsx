'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Advantages(){
     useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: true,
              mirror:true
            });
          }, []);
    return(
        <section className="advcontainer" id="advsectioni">
        <div data-aos="fade-up" data-aos-duration={700} className="headingss">
            <h1>OUR <span>ADVANTAGES</span></h1>
            <p>At Fanum Build, we pride ourselves on delivering excellence through creativity, precision, and dedication. Here&apos;s why our clients love working with us</p>
        </div>
        <div data-aos="fade-right" data-aos-duration={900} className="advs">
            <div className="adv1">
                <div><i className="fa-regular fa-lightbulb fa-lg" style={{color: "#6754E9"}}></i></div>
                <h1>INNOVATION</h1>
                <span>We bring fresh ideas to every project, using the latest technologies and creative approaches</span>
            </div>
            <div className="adv1">
                <div><i className="fa-regular fa-thumbs-up fa-lg" style={{color: "#6754E9"}}></i></div>
                <h1>QUALITY</h1>
                <span>We maintain high standards in every step, using the best tools and proven development practices.</span>
            </div>
            <div className="adv1">
                <div><i className="fa-regular fa-clock fa-lg" style={{color: "#6754E9"}}></i></div>
                <h1>EXPERIENCE</h1>
                <span>We build every project with care, using skills learned through years of client success.</span>
            </div>
            <div className="adv1">
                <div><i className="fa-solid fa-people-group fa-lg" style={{color: "#6754E9"}}></i></div>
                <h1>HAPPY CLIENTS</h1>
                <span>We earn client trust on every job, using honesty, clear goals, honesty and solid communication.</span>
            </div>
            <div className="adv1">
                <div><i className="fa-regular fa-message fa-lg" style={{color: "#6754E9"}}></i></div>
                <h1>SUPPORT</h1>
                <span>We stay available every time, using fast support and with a very helpful team for every need.</span>
            </div>
        </div>
    </section>
    )
}
export default Advantages