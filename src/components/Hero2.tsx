import React from 'react'
import {Carousel} from "@/components/ui/carousel";

const Hero2 = () => {
    const slideData = [
        {
            title: "Vectorization & Digitizing Services",
            button: "Get Service",
            src: "/Vector_Digitizing.avif",
          },
          {
            title: "Graphics Designing Services",
            button: "Get Service",
            src: "/graphics.jpeg",
          },
        {
          title: "Fanum Builds Freelancing Services",
          button: "View Our Services",
          src: "/herobanner.avif",
          href:"/#servicessectioni"
        },
        {
            title: "Web Development Services",
            button: "Get Service",
            src: "/web.avif",
          },
          {
            title: "SEO Services",
            button: "Get Service",
            src: "/seo.jpg",
          },
          {
            title: "Shopify Store Services",
            button: "Get Service",
            src: "/shopify.avif",
          },
      ];
  return (
    <div className="bg-[#fff] relative overflow-hidden w-full h-full pt-12 pb-20">
      <Carousel slides={slideData} initialSlide={2} />
    </div>
  )
}

export default Hero2