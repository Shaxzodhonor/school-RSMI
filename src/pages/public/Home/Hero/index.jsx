import { NavLink, useNavigate } from "react-router-dom";
import "./style.scss";

// img 
import Testimg from "../../../../assets/images/main9.jpg"
import Testimg2 from "../../../../assets/images/man.jpg"
import Testimg1 from "../../../../assets/images/main.jpg"
import Testimg3 from "../../../../assets/images/main1.jpg"
import { useState } from "react";
const Hero = () => {
  const [activeLink, setActiveLink] = useState(0)
  const history = useNavigate();

  function onAnimation (id) {
    const Images = document.querySelectorAll(".hero-background");
    const Nav = document.querySelectorAll(".hero-nav");

    Images.forEach((img)=> {
      if(img?.classList.contains("enter")) {
        img?.classList.remove("enter");
      }
    })
    Nav.forEach((nav)=> {
      if(nav?.classList.contains("act")) {
        nav?.classList.remove("act");
      }
    })
    Images[id]?.classList.add("enter")
    Nav[id]?.classList.add("act")
    setTimeout(() => {
      setActiveLink(id)      
    }, 300);
  };

  function Navigate(id) {
    const Nav = document.querySelectorAll(".hero-nav");
    if(activeLink === id) {
      history("/news")
    } else {
      Nav[id]?.classList.add("act")
      setActiveLink(id)
    }
  }
  return (
    <div style={{height: "100vh"}} className="Home-hero">
      <picture className="hero-background enter">
        <source media="(min-width:565px)" srcSet={Testimg} />
        <img src={Testimg2} alt="Flowers" />
      </picture>
      <picture className="hero-background">
        <source media="(min-width:565px)" srcSet={Testimg2} />
        <img src={Testimg1} alt="Flowers" />
      </picture>
      <picture className="hero-background">
        <source media="(min-width:565px)" srcSet={Testimg3} />
        <img src={Testimg1} alt="Flowers" />
      </picture>
      <picture className="hero-background">
        <source media="(min-width:565px)" srcSet={Testimg1} />
        <img src={Testimg3} alt="Flowers" />
      </picture>
      <div className="hero-content container">
        <div className="row g-5 align-items-center">
          <div className="col d-flex justify-content-center">
            <div style={{width: "max-content", fontFamily: "LagunaC"}} className="text-center">
              <span className="fs-20">
                Республиканская школа
              </span>
              <div className="display-1">Музыки</div>
              <div className="row gx-0 align-items-center">
                <div className="col-5">
                  <div className="double-line"></div>
                  <div className="double-line"></div>
                </div>
                <span className="col-2 display-5 text-center d-block">и</span>
                <div className="col-5">
                  <div className="double-line"></div>
                  <div className="double-line"></div>
                </div>
              </div>              
              <div className="display-1">Искусства</div>              
              <div className="fs-20">
                Школа-интернат
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <div className="hero-nav act" onClick={Navigate.bind(null,0)} onMouseEnter={onAnimation.bind(null,0)}>Academic</div>
              <div className="hero-nav" onClick={Navigate.bind(null,1)} onMouseEnter={onAnimation.bind(null,1)}>Варианты обучения</div>
              <div className="hero-nav" onClick={Navigate.bind(null,2)} onMouseEnter={onAnimation.bind(null,2)}>Искусство</div>
              <div className="hero-nav" onClick={Navigate.bind(null,3)} onMouseEnter={onAnimation.bind(null,3)}>Музыка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;