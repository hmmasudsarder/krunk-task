// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Tag = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        //    spaceBetween={30}
        centeredSlides={true}
        //    pagination={{
        //      clickable: true,
        //    }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Clutch
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Fabric lining
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Baggit
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            MultiPerpes
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Baggit
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Fabric lining
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-blue-300">
          <div className="border-blue-300 border-2 rounded-xl w-11/12 py-1  px-2 text-center">
            Baggit
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Tag;
