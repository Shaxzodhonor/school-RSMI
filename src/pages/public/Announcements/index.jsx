import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
const Announcements = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <div className="container">
      <div className='fs-46 mt-60 pt-96 mb-30'>Announcements</div>
      <div className="row">
        <div className="col-8">
          <div className="row g-3">
            {
              [...Array(10)].map((_, key)=> (
                <div key={key} className="col-4">
                  <Link to="/announcements/1" className='text-darkblue'>
                    <div className="bg-white d-flex flex-column h-100">
                      {
                        <div style={{aspectRatio: "3.4 / 4"}} className={`bg-success ${key % 2 === 0 ? "d-none" : ""}`}>
                        <img src="" alt="" />
                        </div>
                      }
                      <div className="p-3">
                        <div className='fs-24 lh-28 fw-500 mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, iure.</div>
                        <p className='truncate-2 m-0'>Lorem ipsum dolor d sit, amet consectetur adipisicing elit. Corrupti aliquam swqanid dwqq wqami dolorem repudiandae dicta, voluptatibus magnam quam, fuga beatae, eligendi quo eius ipsum amet numquam nam soluta! Optio quia magnam soluta porro est dicta non quos, voluptate rem distinctio unde tempore laboriosam reprehenderit? Quaerat aut quasi voluptatum tempore, saepe iusto. Facilis atque, voluptatibus vel similique officia nobis minus eveniet, laudantium laboriosam voluptatum illum perspiciatis. Repudiandae culpa cumque sunt quaerat accusamus alias natus voluptatum, voluptatibus omnis facere veritatis molestias doloremque quas similique! Explicabo, labore? Autem in quidem rem minima, suscipit maxime.</p>
                      </div>
                      <div className="mt-auto p-3 pt-0">
                        <div>
                          <i className="fal fa-map-marker-alt text-main2 me-2"></i>
                          Katta zal
                        </div>
                        <div>
                          <i className="fal fa-clock text-main2 me-2"></i>
                          с 15:00 до 17:00
                        </div>
                        <div>
                          <i className="far fa-calendar-alt text-main2 me-2"></i>
                          16-yanvar
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4">
          <div className="fs-30 bg-white rounded text-center mb-3 py-3">Calendar</div>
          <p className='bg-white rounded p-4 text-center'>taqvimdan kerakli sanani tanlang va yangiliklarni oling</p>
          <Calendar onChange={onChange} value={value} className="rounded text-success mx-auto"/>
          <button className='btn w-100 btn-primary my-5 py-3'>Izlash</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Announcements;