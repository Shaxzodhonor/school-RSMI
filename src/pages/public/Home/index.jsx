import Hero from "./Hero";
import Partners from "./Partners";
import Result from "./Result";
import Year from "./Year";
import News from "./News";
import Announcements from "./Announcements";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {

  return (
    <>
      <Hero />
      <Announcements />
      {/* <Result /> */}
      <News />
      <Partners />
      <Services />
      <Year />
      <Contact />
    </>
  )
}

export default Home;