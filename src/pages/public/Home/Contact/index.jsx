import React from 'react';

const Contact = () => {
  return (
  <div className="bg-white">
    <div className='container py-90'>
      <div className="mb-2 mb-md-4">
        <div>
          <i className="fs-18 lh-20 fas fa-grip-lines text-main2 me-2"></i>
          Как с нами связаться?
        </div>
        <div className="display-6 lh-46">
          Контакты
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
        <div className="text-muted fs-14 lh-24 fw-600 mb-md-3">Kontakt</div>
          <div className="text-darkblue fs-18 lh-27 fw-500">+998 71 210-11-04</div>
          <div className="text-darkblue fs-14 lh-27">Yagon aloqa raqami</div>
          <div className="text-muted fs-14 lh-24 fw-600 mt-3">Ichki raqamlar</div>
          <div className="text-darkblue fs-18 lh-27 fw-500">1281, 1282</div>
          <div className="text-darkblue fs-14 lh-27 mb-3">Texnik masalalari bo’yicha</div>
          <div className="text-darkblue fs-18 lh-27 fw-500">support@it.mc.uz</div>
          <div className="text-darkblue fs-14 lh-24">O’zbekiston, Toshkent shahri, <br/>Shayhontohur, Abay ko’chasi, 6a</div>
          <div className="text-primary4 fs-26 mt-44">
            <span><i className="fab fa-facebook-f"></i></span>
            <span className="mx-4"><i className="fab fa-instagram"></i></span>
            <span><i className="fab fa-youtube"></i></span>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="bg-success rounded" style={{height: "25vmax", boxShadow: "0px 12px 22px rgba(149, 156, 182, 0.5)"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.9986090825876!2d69.16591213913058!3d41.287165008272964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae890ac1b2b739%3A0x82c168168b980607!2zNzVQOCtXVjUsINGD0LvQuNGG0LAg0KTQvtC30LjQu9GC0LXQv9CwLCDQotCw0YjQutC10L3RgiAxMDAxNTIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1682519539199!5m2!1sru!2s" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="my-5 p-3 p-lg-5" style={{background: "linear-gradient(89.08deg, #EBEBFF -0.04%, rgba(188, 207, 243, 0.43) 49.81%, #FFE6E6 101.25%)"}}>
        <div className="row align-items-center g-0">
          <div className="col-12 col-sm-6">
            <div className="text-darkblue fw-500 fs-20 lh-24 mb-1">Biz ijtimoiy tarmoqlarda</div>
            <div className="text-darkblue fs-14 lh-23">
              Bizning ijtimoiy tarmoqlardagi sahifalarimizda elektron ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus itaque sit animi amet laudantium explicabo eaque atque omnis vel?
            </div>
            <div className="d-flex align-items-center fs-24 mt-1 mt-md-3">
                <a href="#" target="_blank" className="text-darkblue">
                    <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="#" target="_blank" className="text-darkblue">
                    <i className="fab fa-facebook-f mx-4"></i>
                </a>
                <a href="#" target="_blank" className="text-darkblue">
                    <i className="fab fa-youtube me-4"></i>
                </a>
                <a href="#" target="_blank" className="text-darkblue">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
          </div>

          <div className="d-none d-sm-block col-sm-5 offset-md-1 col-lg-4 offset-lg-2 d-flex align-items-center justify-content-center">
              <img src="https://monitoring.mc.uz/images/home2/social.png"  alt="social"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;