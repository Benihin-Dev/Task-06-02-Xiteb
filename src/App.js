import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import LuxuryVilla from "./components/luxuryVilla/LuxuryVilla";
import Demo from "./components/demo/Demo";
import DealsForProperties from "./components/dealsForProperties/DealsForProperties";
import Agents from "./components/agents/Agents";
import ClientTestominial from "./components/clientTestimonial/ClientTestominial";
import ContactForm from "./components/contactForm/ContactForm";
import OurBlogs from "./components/ourBlogs/OurBlogs";
import Footer from "./components/footer/Footer";
import { Element } from "react-scroll";

function App() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className=" font-poppins">
      <NavBar scrollDirection={scrollDirection} />
      <Element name="home-section">
        <Home />
      </Element>
      <Element name="lVilla-section">
        <LuxuryVilla />
        <Demo />
      </Element>
      <Element name="properties-section">
        <DealsForProperties />
      </Element>
      <Element name="about-section">
        <Agents />
        <ClientTestominial />
      </Element>
      <Element name="contact-section">
        <ContactForm />
      </Element>
      <Element name="blog-section">
        <OurBlogs />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
