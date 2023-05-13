
import React, { useState } from "react";



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade,Autoplay, Pagination } from "swiper";

// images
import imgTest from "../../../../assets/images/main2.jpg"
import imgTest3 from "../../../../assets/images/main3.jpg"

function News () {
  const [initSwiper, setInitSwiper] = useState();
  
  function prevSwiper(){
   return initSwiper?.slidePrev ? initSwiper?.slidePrev() : null
  }
  function nextSwiper(){
    return initSwiper?.slideNext ? initSwiper?.slideNext() : null
  }
  return (
    <>
      <div className="container pt-5">
        <div className="fs-16">
          <i className="fas fa-grip-lines me-2"></i>
          Что нового?
        </div>
        <div className="display-4 mb-4 mb-lg-5">
          Новости
        </div>
        {/* <div className="position-relative p-4" style={{aspectRatio: "3 / 1.2", overflow: "hidden"}}>

          <div className="position-absolute top-0 start-0 w-100 h-100 " style={{objectFit: "cover", zIndex: 0}}>
            <img src="https://monitoring.mc.uz/images/home2/news.png" width={"100%"} alt="news"/>
          </div>

          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-end flex-column px-40 py-32" style={{background: "linear-gradient(83.83deg, rgba(17, 47, 90, 0.81) 2.66%, rgba(9, 42, 91, 0.28) 102.45%)", zIndex: "999"}}>
            <div className="lh-20 mb-2">
              <i className="fas fa-grip-lines me-2"></i>
              Учителям / Ученикам
            </div>
            <div className="lh-20">
              <i className="fas fa-grip-lines me-2"></i>
              05.24.2022
            </div>
            <div className="fs-38 lh-48 fw-600 mb-3" style={{fontFamily: "LagunaC"}}>Дональд Норман</div>
            <div className="fs-20 w-75 truncate-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>

        </div>
        <Swiper 
          spaceBetween={0}
          slidesPerView={3}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="home-news pb-50"
        >
          {
            [...Array(12)].map((_, key) => (
              <SwiperSlide key={key}>                
                <div className={`border-1 border-start px-20`}>
                  <div className="lh-20 mt-96">
                    <i className="fas fa-grip-lines me-2"></i>
                    05.24.2022
                  </div>
                  <div className='fs-32 mb-16'>Гарри Поттер</div>
                  <div className='truncate-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugit totam, enim itaque deleniti reprehenderit quam nihil ducimus ipsum ad amet eum ipsa a sapiente, voluptatibus adipisci architecto beatae facere sint, vel accusamus? Exercitationem reprehenderit aperiam ad aut dolore? Adipisci architecto assumenda officiis error incidunt optio culpa itaque doloremque nobis aliquam possimus eos repudiandae nulla quas dolores deserunt repellat, voluptatum voluptatem quam! Beatae quaerat consequatur dolore, eveniet corrupti ex debitis soluta laudantium nisi itaque! Dignissimos minus aspernatur quos voluptatibus cumque!
                  </div>
                  <div className="lh-20 mt-16">
                    <i className="fas fa-grip-lines me-2"></i>
                    Учителям / Ученикам
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper> */}
      </div>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="newsSwiper bg-main-light text-text1"
      >
        <SwiperSlide className="bg-main-light h-auto">
          <div style={{height: "66vmin"}} className="card-shadow">
            <img src={imgTest} alt="" width={"100%"} height={"100%"} style={{objectFit: "cover",}}/>
          </div>
          <div className="container">
            <div className="p-3 p-lg-5 card-shadow border-top border-start" style={{backgroundColor: "rgba(0, 65, 80, .8)", transform: "translateY(-15vmin)", marginBottom: "-5vmin"}}>
              <div className="news-sub-text fs-16 mb-2 mb-lg-4">
                <i className="fas fa-grip-lines me-2"></i>
                <em>05.24.2022</em>
              </div>
              <div className='news-title display-6 fw-500 mb-2 mb-lg-4 truncate-2' style={{fontFamily: "LagunaC"}}>Знаменитый оркестр для учеников школы исполнитят </div>
              <div className='news-text fs-20 fw-100 truncate-4'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <div className="news-sub-text text-end fs-16 mt-2 mt-lg-4">
                <i className="fas fa-grip-lines me-2"></i>
                <em>Учителям / Ученикам</em>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-main-light h-auto">
          <div style={{height: "66vmin"}} className="card-shadow">
            <img src={imgTest} alt="" width={"100%"} height={"100%"} style={{objectFit: "cover",}}/>
          </div>
          <div className="container">
            <div className="p-3 p-lg-5 card-shadow border-top border-start" style={{backgroundColor: "rgba(0, 65, 80, .8)", transform: "translateY(-15vmin)", marginBottom: "-5vmin"}}>
              <div className="news-sub-text fs-16 mb-2 mb-lg-4">
                <i className="fas fa-grip-lines me-2"></i>
                <em>05.24.2022</em>
              </div>
              <div className='news-title display-6 fw-500 mb-2 mb-lg-4 truncate-2' style={{fontFamily: "LagunaC"}}>Знаменитый оркестр для учеников школы исполнитят </div>
              <div className='news-text fs-20 fw-100 truncate-4'>
                deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <div className="news-sub-text text-end fs-16 mt-2 mt-lg-4">
                <i className="fas fa-grip-lines me-2"></i>
                <em>Учителям / Ученикам</em>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="pb-20"></div>
    </>
  );
}

export default News;