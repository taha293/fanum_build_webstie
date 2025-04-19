'use client'
import Image from "next/image"

function Header(){
    return (
        <header>
            <a href="https://wa.me/+923142759952?text=Fanum Builds! Can i get more knowledge on this?" target="_blank" >
        <div className="flex !justify-center relative bg-black text-white overflow-hidden py-1 group font-[500]">
        <p className="text-white z-10 relative">Let&apos;s Talk &gt;</p>
            <div className="flex !justify-center py-1  absolute inset-0 bg-gradient-to-r from-[#550cc1] via-[white] transform  -translate-x-full group-hover:animate-slide-white z-0"/>
        </div></a>
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <Image className="h-full w-auto max-w-[200px]" src="/logo5.png" alt="" width={300} height={55}/>
                </a>
            </div>
            <div className="navitems" id="navid">
                <ul>
                <a href="#advsectioni" className="ahrefelem">WHY US</a>
                <a href="#aboutsectioni" className="ahrefelem">ABOUT</a>
                <a href="#servicessectioni" className="ahrefelem">SERVICES</a>
                <a href="#portfoliosectioni" className="ahrefelem">PORTFOLIO</a>
                <a href="#reviewssectioni" className="ahrefelem">REVIEWS</a>
                <a href="#contactsectioni" className="ahrefelem">CONTACT US</a>
                </ul>
            </div>
            <div className="menuicon">
                <i className="fa-solid fa-bars !text-[#6754E9]" onClick={()=>
                    {
                        const navId = document.getElementById("navid");
                        navId?.classList.toggle("open");
                    }
                }></i>
            </div>
        </nav>
    </header>
    )
}
export default Header