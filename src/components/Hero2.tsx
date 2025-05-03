import React from 'react'
import {Carousel} from "@/components/ui/carousel";

const Hero2 = () => {
    const slideData = [
        {
            title: "Vectorization & Digitizing Services",
            button: "Get Service",
            src: "https://img.freepik.com/premium-photo/graphic-designer-working-computer-with-design-software_1106493-431711.jpg",
          },
          {
            title: "Graphics Designing Services",
            button: "Get Service",
            src: "https://www.verbolabs.com/wp-content/uploads/2024/06/Professional-Graphic-Designer-Can-Enhance-Your-Business.jpeg",
          },
        {
          title: "Fanum Builds Freelancing Services",
          button: "View Our Services",
          src: "https://img.freepik.com/free-vector/night-home-office-interior-dark-room-freelance_107791-7272.jpg",
          href:"/#servicessectioni"
        },
        {
            title: "Web Development Services",
            button: "Get Service",
            src: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740",
          },
          {
            title: "SEO Services",
            button: "Get Service",
            src: "https://w0.peakpx.com/wallpaper/18/755/HD-wallpaper-landing-page-of-seo-search-engine-optimization-modern-flat-design-isometric-template-conceptual-seo-analysis-and-optimization-seo-strategies-and-marketing-concept-vector-illustration-for-web-site-5579737.jpg",
          },
          {
            title: "Shopify Store Services",
            button: "Get Service",
            src: "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories-vector-isolated-concept-metaphor-illustration_335657-2764.jpg?semt=ais_hybrid&w=740",
          },
      ];
    const slideDadta = [
        {
          title: "Web Development Services",
          button: "Get Service",
          src: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740",
        },
        {
          title: "SEO Services",
          button: "Get Service",
          src: "https://w0.peakpx.com/wallpaper/18/755/HD-wallpaper-landing-page-of-seo-search-engine-optimization-modern-flat-design-isometric-template-conceptual-seo-analysis-and-optimization-seo-strategies-and-marketing-concept-vector-illustration-for-web-site-5579737.jpg",
        },
        {
          title: "Fanum Builds Freelancing Services",
          button: "View Our Services",
          src: "https://img.freepik.com/free-vector/night-home-office-interior-dark-room-freelance_107791-7272.jpg",
          href:"/#servicessectioni"
        },
        {
          title: "Vectorization & Digitizing Services",
          button: "Get Service",
          src: "https://img.freepik.com/premium-photo/graphic-designer-working-computer-with-design-software_1106493-431711.jpg",
        },
        {
          title: "Graphics Designing Services",
          button: "Get Service",
          src: "https://www.verbolabs.com/wp-content/uploads/2024/06/Professional-Graphic-Designer-Can-Enhance-Your-Business.jpeg",
        },
      ];
  return (
    <div className="bg-[#fff] relative overflow-hidden w-full h-full pt-12 pb-20">
      <Carousel slides={slideData} initialSlide={2} />
    </div>
  )
}

export default Hero2