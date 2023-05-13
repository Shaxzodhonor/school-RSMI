import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// images 
import partner from "../../../../assets/images/partners.jpg"
function Partners () {
  return (
    <div className="bg-main-light py-5">
      <div className="container">

        <div className='text-end'>
          <div>
            <i className="fs-18 lh-20 fas fa-grip-lines text-main2 me-2"></i>
            Сотрудничество
          </div>
          <div className="display-6 lh-46 mb-2">
            Партнёры
          </div>
        </div>

      </div>
      <div className='w-50 border-2 border border-main2 ms-auto mb-5' style={{height: "1px"}}></div>
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          {
            [...Array(12)].map((_, key) => (
              <SwiperSlide key={key} style={{width: "220px"}}>
                <div className='card-shadow' style={{height: "170px"}}>
                  <img src={partner} alt="" width={"100%"} height="100%"/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='w-75 border border-2 border-main2 mt-5' style={{height: "1px"}}></div>
    </div>
  );
}

export default Partners ;