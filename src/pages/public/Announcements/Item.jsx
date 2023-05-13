import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SeletedAnnouncement = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <div className="container">
      <div className='fs-46 mt-60 pt-96 mb-30'>SeletedAnnouncement</div>
      <div className="row">
        <div className="col-4">
          <div style={{aspectRatio: "3 /4"}} className="bg-success">            
          </div>
        </div>
        <div className="col-4">
          <div>
            <i className="fas fa-grip-lines text-main2 me-2"></i>
            с 15:00 до 17:00
          </div>
          <div className='fs-28 lh-38 fw-500 mb-30'>Спектакль </div>
          <div className='truncate-4 position-relative opacity-75'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </div>
          <div className='mt-4'>
            <i className="fal fa-map-marker-alt text-main2 me-2"></i>
            Katta zal
          </div>
        </div>
        <div className="col-4">
          <Calendar onChange={onChange} value={value} className="rounded text-success"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default SeletedAnnouncement;