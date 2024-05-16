import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";
import Demo from "./demo/Demo";
import DealsForProperties from "./dealsForProperties/DealsForProperties";
import Agents from "./agents/Agents";
import ClientTestominial from "./clientTestimonial/ClientTestominial";
import ContactForm from "./contactForm/ContactForm";
import OurBlogs from "./ourBlogs/OurBlogs";
import Footer from "./footer/Footer";
import LuxuryVilla from "./luxuryVilla/luxuryVilla/LuxuryVilla";

export default function MainPage() {
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
    <>
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
    </>
  );
}
