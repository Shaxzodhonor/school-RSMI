import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';



const Home = lazy(() => import("./pages/public/Home"))
const Sections = lazy(() => import("./pages/public/Sections"))
const News = lazy(() => import("./pages/public/News"))
const System = lazy(() => import("./pages/public/System"))
const Announcements = lazy(() => import("./pages/public/Announcements"))
const Login = lazy(() => import("./pages/public/Login"))
const SelectedAnnouncement = lazy(() => import("./pages/public/Announcements/Item"))
const Footer = lazy(() => import("./components/Footer"))
const Header = lazy(() => import("./components/Header"))


function App() {
  const {theme} = useSelector((state) => state.theme)
  
  return (
    <div className={`App bg-main-light text-darkblue3`}>

      {/* <Header /> */}
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/section' Component={Sections}/>
        <Route path='/news' Component={News}/>
        <Route path='/system' Component={System}/>
        <Route path='/announcements' Component={Announcements}/>
        <Route path='/announcements/:id' Component={SelectedAnnouncement}/>
        <Route path='/login' Component={Login}/>
      </Routes>
      {/* <Home /> */}
      {/* <Sections /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
