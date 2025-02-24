import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/image/news1.jpg";
import img2 from "../../assets/image/news2.jpg";
import img3 from "../../assets/image/news3.jpg";
import img4 from "../../assets/image/news4.jpg";
import img5 from "../../assets/image/news5.jpg";
import img6 from "../../assets/image/news6.jpg";

export default function Carousel() {
  return (
    // <Swiper
    //   modules={[Navigation, Pagination, Autoplay]}
    //   spaceBetween={30}
    //   slidesPerView={1}
    //   pagination={{ clickable: true }}
    //   autoplay={{ delay: 3000 }}
    //   className="max-w-[350px] w-full rounded-lg border border-base-content/10 object-cover"
    // >
    //   <SwiperSlide>
    //     <img src={img1} alt="Slide 1" className="rounded-lg " />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img
    //       src={img2}
    //       alt="Slide 2"
    //       className="object-cover bg-red-300 h-full"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={img3} alt="Slide 3" />
    //   </SwiperSlide>
    // </Swiper>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="max-w-[350px] w-full rounded-lg border border-base-content/10"
    >
      <SwiperSlide className="">
        <img
          src={img1}
          alt="Slide 1"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[200px]">
        <img
          src={img2}
          alt="Slide 2"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[200px]">
        <img
          src={img3}
          alt="Slide 3"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[200px]">
        <img
          src={img4}
          alt="Slide 4"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[200px]">
        <img
          src={img5}
          alt="Slide 5"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[200px]">
        <img
          src={img6}
          alt="Slide 6"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
