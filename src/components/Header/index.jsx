import { useEffect, useState, memo } from "react"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useSelector, useDispatch } from 'react-redux'
import { dark, light } from "../../redux/theme"

import Logo from "../../assets/images/site-logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch()
  const {theme} = useSelector((state) => state.theme)
  
  // let indicator = 0;
  // let index = 0;
  // useEffect(() => {
  //   const handleScroll = function(){
  //     if (window.scrollY === 0) {
  //       document.getElementById('header').classList.remove("active")
  //       indicator = 0
  //       index = 0
  //     } 
  //     else if(window.scrollY > indicator ) {
  //       document.getElementById('header').classList.add("active")
  //       index = window.scrollY;
  //     } else {
  //       if (index - window.scrollY > 400) {        
  //         document.getElementById('header').classList.remove("active")
  //       }
  //     }
  //     indicator = window.scrollY;
  //   }
    
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // });

  return (
    <header id="header" className={`${!theme ? "dark" : "light"}`}>

      <div className="container d-flex align-items-center justify-content-between position-relative">

        <div className="d-flex">
          <div className="site-logo">
            <div className="logo-wrapper">
              <div className="before"></div>
              <img src={Logo} alt="site logo" width={"100%"}/>
            </div>
          </div>
          <div style={{width: "120px"}}></div>
          <ul className="d-flex align-items-center ms-70 text-white">
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Школа
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/section"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Отделы
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/news"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Новости
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Сотрудничество
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Контакты
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/system"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
                Tizim
              </Link>
            </li>
            <li className="fs-18 fw-500 lh-14 mx-3">
              <Link to={"/announcements"} className={`${theme ? "text-text1" : "text-darkblue"}`}>
              Announcements
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <div className="mx-3" style={{width: "110px"}}>
            <BootstrapSwitchButton
                checked={false}
                onlabel="Qorong'u"
                onstyle='danger'
                offlabel="Yorug'"
                offstyle='success'
                style='w-100 mx-1'
                onChange={(check) => check ? dispatch(light()) : dispatch(dark())}
            />
          </div>
          <div>
            <a href="mailto:mast@gamil.com" className="fs-16 lh-16 mb-1 text-white d-block">mmmmmmm@gmail.com</a>
            <a href="tel:+998916444257" className="fs-16 lh-16 text-white">+998(90)000-00-00</a>
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header;