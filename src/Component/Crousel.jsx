import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image:
        "https://i.pinimg.com/1200x/34/eb/75/34eb75d5d66fc39656f322ac93bc2206.jpg",
    },
    {
      image:
        "https://i.pinimg.com/736x/65/3c/24/653c24878fc90171f02029138207dd50.jpg",
    },
    {
      image:
        "https://i.pinimg.com/1200x/53/4e/12/534e125e5a0f94ba2ea3bf7716985d38.jpg",
    },
    {
      image:
        "https://i.pinimg.com/1200x/5f/39/f2/5f39f213a8e28cd93cc2e9891fe5346c.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="relative w-screen h-[500px]">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
        {/* Overlay Text ON image */}
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div className="absolute bottom-8 md:left-12 text-amber-300 font-semibold px-6 py-50 rounded-md text-7xl max-sm:text-[40px] max-sm:justify-start max-sm:bottom-35 max:sm-font-bold">
            Fake<h2 className="relative left-5">Resturant</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
