import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"


function notfound(){
    return(
        <div>
           <Header/>
           <div className=" flex flex-col justify-center items-center h-[60vh] gap-4">
            <h1 className="text-[#6754E9] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-[24px]">404 Page not Found</h1>
            <Link href="/" data-aos="fade-up" data-aos-duration={800}
                className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-md group hover:!bg-black"
                id="btn2"
            >
                <span className="relative z-10 text-white">Go Home</span>
                <span className="absolute inset-0 -translate-x-full bg-[#6754E9] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            </Link>
           </div>
           <Footer/>
        </div>
    )
}
export default notfound