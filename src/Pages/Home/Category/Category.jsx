// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";

function Category() {
  return (
    <div>
      <Sectiontitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Sectiontitle>
      <div
        className="h-[400px] my-10
        "
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
