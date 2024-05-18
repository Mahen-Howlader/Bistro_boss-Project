import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
function Review() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  return (
    <div className="">
      <Sectiontitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></Sectiontitle>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-32"
        >
          {data.map((val) => {
            return (
              <SwiperSlide
                key={val._id}
                className="px-20 text-center space-y-4 py-5"
              >
                <div className="flex justify-center run dev">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={val?.rating}
                    readOnly
                  />
                </div>
                <h1>{val?.details}</h1>
                <p className="text-2xl font-bold">{val?.name}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
