import React from 'react';

const System = () => {
  return (
    <>
      <div className="container">
        <div className='fs-46 lh-56 pt-96 mt-60 mb-40'>System</div>
        <div className="row">
          <div className="col-4">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Rektorat
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                   <button type='button' className='btn text-text1 border-bottom d-block'>Direktor</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Direktor o'rinbosarlari</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Direktor o'rinbosarlari 2</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Ma'naviy ishlar bo'yicha kimdir</button>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Matbuot
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  <button type='button' className='btn text-text1 border-bottom d-block'>Direktor</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Direktor o'rinbosarlari</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Direktor o'rinbosarlari 2</button>
                   <button type='button' className='btn text-text1 border-bottom d-block'>Ma'naviy ishlar bo'yicha kimdir</button>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="col-8 border-start">
           <div className='border-bottom pb-30 mb-30 ps-30'>
            <div className='fs-30 fw-500 mb-30'>Section name</div>
            <div className='mb-20'><span className='fs-24 fw-500'>Lavozimi: </span> <span className='fs-22'>Ism Familiya Otasining ismi</span></div>
            <div style={{objectFit: "cover", objectPosition: "top", width: "300px", aspectRatio: "3 / 4"}} className='bg-info'>
              <img src="" alt="" />
            </div>
            <div className='my-2'><span className='fs-20 fw-500'>ilmiy darajasi, unvoni: </span> <span className='fs-18'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, error!</span></div>
            <div className='my-2'><span className='fs-20 fw-500'>qabul vaqti: </span> <span className='fs-18'>Lorem ipsum dolor sit amet consectetur.</span></div>
            <div className='my-2'><span className='fs-20 fw-500'>ish vaqti: </span> <span className='fs-18'>9 : 00,  17: 00</span></div>
            <div className='my-2'><span className='fs-20 fw-500'>tel raqam: </span> <span className='fs-18'>+998 90 555 22 44</span></div>
           </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default System;