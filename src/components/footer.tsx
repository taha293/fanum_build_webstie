import Image from "next/image"
const Footer = () => {
    return (
        <footer>
        <div className="footeritem1">
            <Image className="h-full w-auto max-w-[100%]" src="/logo3.png" alt="Logo" width={200} height={56}/>
            <p className="mt-4">Creative. Reliable. Skilled. We turn your ideas into reality with top-tier design, development, and digital services.</p>
            <p className="footerp"><i className="fa-regular fa-copyright" style={{color: "#ffffff"}}></i> FanumBuild
                <span>2025</span>
            </p>
        </div>
        <div className="footeritem1" style={{flex: 1}} id="footerserv">
            <h2>SERVICES</h2>
            <div className="footerservices">
                <a href="/#quote">Web Development</a>
                <a href="/#quote">Shopify Store</a>
                <a href="/#quote">Graphics Designing</a>
                <a href="/#quote">Digitizing</a>
                <a href="/#quote">Vectorization</a>
                <a href="/#quote">SEO</a>
            </div>
        </div>
        <div className="footeritem1" style={{flex: 1}} id="footerusl">
            <h2>USEFUL LINKS</h2>
            <div className="footerservices">
                <a href="https://wa.me/+923142759952?text=Fanum Builds! Can i get more knowledge on this?" target="_blank">Whatsapp</a>
                <a href="#" target="_blank">Facebook</a>
                <a href="#" target="_blank">Instagram</a>
                <a href="#" target="_blank">Mail</a>
                <a href="/#quote">Contact Form</a>
            </div>
        </div>
        <div className="footeritem1">
            <h2>CONTACTS</h2>
            <p className="footercontactp"> <i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i> &ensp;+92(304) 387-2939
            </p>
            <p className="footercontactp"> <i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i> &ensp;+92(304) 387-2939
            </p>
            <p className="footercontactp"> <i className="fa-solid fa-envelope"
                    style={{color: "#ffffff"}}></i>&ensp;info@website.com </p>

            <div className="footercontactdiv">
                <h2>FOLLOW US</h2>
                <div>
                    <a href="https://facebook.com/taha.hero.712" target="_blank">
                        <i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i>
                    </a>
                    <a href="https://www.instagram.com/tahaa_ansari_" target="_blank">
                        <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
                    </a>
                    
                </div>
            </div>
        </div>


    </footer>
    )
}
export default Footer