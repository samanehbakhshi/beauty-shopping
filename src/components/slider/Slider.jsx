import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderProducts } from "../../data/products";
import "./Slider.css";

function Slider() {
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.details}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>

            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
