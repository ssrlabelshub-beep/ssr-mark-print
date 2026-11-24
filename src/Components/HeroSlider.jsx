
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroSlider.css";

import slide1 from "../assets/images/banners/slide1.png";
import slide2 from "../assets/images/banners/slide2.png";
import slide3 from "../assets/images/banners/slide3.png";
import slide4 from "../assets/images/banners/slide4.png";

const slides = [
  {
    image: slide1,
    title: "Thermal Paper Rolls",
  },
  {
    image: slide2,
    title: "Barcode Labels",
  },
  {
    image: slide3,
    title: "Barcode and Thermal Printers",
  },
  {
    image: slide4,
    title: "Ribbons and Barcode Labels",
  },
];

function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-slider-section">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="main-hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* CUSTOM PREVIOUS BUTTON */}
        <button
          ref={prevRef}
          className="hero-arrow hero-prev"
          aria-label="Previous slide"
          type="button"
        >
          &#10094;
        </button>

        {/* CUSTOM NEXT BUTTON */}
        <button
          ref={nextRef}
          className="hero-arrow hero-next"
          aria-label="Next slide"
          type="button"
        >
          &#10095;
        </button>

      </Swiper>

    </section>
  );
}

export default HeroSlider;
