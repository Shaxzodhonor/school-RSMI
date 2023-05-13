
import news from "../../../../assets/images/news.jpg"
const Announcements = () => {

  return (
    <>
      <div className="bg-light py-96">
        <div className="container">
          <div className="">
            <div className="fs-18 lh-20">
              <i className="fas fa-grip-lines text-main2 me-2"></i>
                Что же нас ждёт ?
              </div>
              <div className="section-title display-6 lh-56 mb-2">
                Предстоящие события
              </div>
          </div>

          <div className="announcements row">

          <div className="col-12 py-3 hide">
            <div className="row align-items-center">

              <div className="col-7 col-md-6 offset-xl-1">
                <div className="mb-3 text-end position-relative">
                  yanvar
                  <i className="fas fa-grip-lines text-main2 ms-2"></i>
                  <div className="data-day">12</div>
                </div>
                <div className='fs-22 lh-28 fw-500 mb-1 mb-lg-3 truncate-1'>Спектакль sadas asda sad</div>
                <div className='truncate-3 fs-12'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
                <div className="">
                  <i className="fas fa-grip-lines text-main2 me-2"></i>
                  с 15:00 до 17:00
                </div>
              </div>
              <div className="col-5 col-sm-4 offset-md-1 col-xl-3">
                <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(7deg) translate(-3%, 0px)"}}/>
              </div>

            </div>
          </div>

          <div className="col-12 py-2 hide">
            <div className="row align-items-center">

              <div className="col-5 offset-sm-1 col-sm-4 col-xl-3">
                <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(-7deg) translate(3%, 0px)"}}/>
              </div>

              <div className="col-7 col-md-6 offset-md-1">

                <div className="mb-3 text-end position-relative">
                  yanvar
                  <i className="fas fa-grip-lines text-main2 ms-2"></i>
                  <div className="data-day">12</div>
                </div>

                <div className='fs-22 lh-28 fw-500 mb-1 mb-lg-3 truncate-1'>Спектакль sadas asda sad</div>

                <div className='truncate-3 fs-12'>
                  Ameddcd dsdsds t minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>

                <div className="">
                  <i className="fas fa-grip-lines text-main2 me-2"></i>
                  с 15:00 до 17:00
                </div>

              </div>

            </div>
          </div>

          <div className="col-12 py-3 hide">
            <div className="row align-items-center">

              <div className="col-7 col-md-6 offset-xl-1">
                <div className="mb-3 text-end position-relative">
                  yanvar
                  <i className="fas fa-grip-lines text-main2 ms-2"></i>
                  <div className="data-day">12</div>
                </div>
                <div className='fs-22 lh-28 fw-500 mb-1 mb-lg-3 truncate-1'>Спектакль sadas asda sad</div>
                <div className='truncate-3 fs-12'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
                <div className="">
                  <i className="fas fa-grip-lines text-main2 me-2"></i>
                  с 15:00 до 17:00
                </div>
              </div>
              <div className="col-5 col-sm-4 offset-md-1 col-xl-3">
                <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(7deg) translate(-3%, 0px)"}}/>
              </div>

            </div>
          </div>

     

            {/* <div className="col-12" style={{marginTop:"-140px"}}>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-5 position-relative">
                  <div className="position-absolute d-flex" style={{zIndex: 0, top: 20, right: "10%", color: "#fff5"}}>
                    <div  style={{fontSize: "160px", lineHeight: "100px", fontWeight: "700"}}>15</div>
                    <div className="fs-30 lh-12">-yanvar</div>
                  </div>
                  <div className="">
                    <i className="fas fa-grip-lines text-main2 me-2"></i>
                    с 15:00 до 17:00
                  </div>
                  <div className='fs-28 lh-38 fw-500 mb-30'>Спектакль </div>
                  <div className='truncate-4 position-relative opacity-75'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </div>
                </div>
                <div className="col-3">
                  <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(12deg) translate(-10px, -90px)"}}/>
                </div>
              </div>
            </div>
            <div className="col-12" style={{marginTop:"-140px"}}>
              <div className="row">
                <div className="col-3">
                  <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(-12deg) translate(-10px, -90px)"}}/>
                </div>
                <div className="col-5 position-relative">
                  <div className="position-absolute d-flex" style={{zIndex: 0, top: 20, left: "10%", color: "#fff5"}}>
                    <div  style={{fontSize: "160px", lineHeight: "100px", fontWeight: "700"}}>15</div>
                    <div className="fs-30 lh-12">-yanvar</div>
                  </div>
                  <div className="text-end">
                    <i className="fas fa-grip-lines text-main2 me-2"></i>
                    с 15:00 до 17:00
                  </div>
                  <div className='fs-28 lh-38 fw-500 mb-30 text-end'>Спектакль </div>
                  <div className='truncate-4 position-relative opacity-75'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" style={{marginTop:"-140px"}}>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-5 position-relative">
                <div className="position-absolute d-flex" style={{zIndex: 0, top: 20, right: "10%", color: "#fff5"}}>
                  <div  style={{fontSize: "160px", lineHeight: "100px", fontWeight: "700"}}>15</div>
                  <div className="fs-30 lh-12">-yanvar</div>
                </div>
                <div className="">
                  <i className="fas fa-grip-lines text-main2 me-2"></i>
                  с 15:00 до 17:00
                </div>
                <div className='fs-28 lh-38 fw-500 mb-30'>Спектакль </div>
                <div className='truncate-4 position-relative opacity-75'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
              </div>
              <div className="col-3">
                <img src={news} alt="" width={"100%"} className="card-shadow d-block" style={{transform: "rotate(12deg) translate(-10px, -90px)"}}/>
              </div>
            </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;