import React from 'react';
// images
import Logo from "../../assets/images/site-logo.png"
const Footer = () => {
  return (
    <footer className='bg-footer py-40 text-text1'>
      <div className="container">
        <div className='w-90 mb-3'>
          <img src={Logo} alt="" width={"100%"}/>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="tel:+998900000001">+9989000000001</a><br />
            <a href="mailto:gggg@gmail.com">gggg@gmail.com</a>
          </div>
          <div className="col-5">
            <div>Разделы:</div>
            <div className="row">
              <div className="col-6">Школа</div>
              <div className="col-6">Отделы</div>
              <div className="col-6">Новости</div>
              <div className="col-6">Контакты</div>
              <div className="col-6">Новости</div>
              <div className="col-6">Портал</div>
              <div className="col-6">Сотрудничество</div>
            </div>
          </div>
          <div className='col-4'>
            <div className='text-end'>Соц. сети </div>
            <div className='d-flex align-items-center justify-content-end'>
              <div>aaa</div>
              <div>aaa</div>
              <div>aaa</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;