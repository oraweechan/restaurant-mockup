import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import NavMenu from "../components/Layout/NavMenu/NavMenu";
import Testimonial from "../components/Testimonial";
import TextContent from "../components/TextContent";
import classes from "./Home.module.css";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.hero_section}>
        <NavMenu />
        <HeroSection />
      </div>
      <div className={classes.textContent}>
        <TextContent>
          {" "}
          Ultricies arcu bibendum bitae congue proin sit aliquam, felis
          venenatis{" "}
        </TextContent>
      </div>

      <div className={classes.photo}>
        <img
          src="https://github.com/dcartist/FrontEndHackathon/raw/02fad8b40205ed2c41c2b7a2e2f6da1a393abd71/MOCKUP/Restaurant/images/unsplash_XoByiBymX20.jpg"
          alt="soup"
        />
      </div>
      <AboutSection />

      <div className={classes.photo}>
        <img
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_P1aohbiT-EY.jpg?raw=true"
          alt="pie"
        />
      </div>
      <Gallery />
      <Testimonial />
      <div className={classes.photo}>
        <img
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_fdlZBWIP0aM.jpg?raw=true"
          alt="egg"
        />
      </div>
      <div className="contact">
        <div className="branches">
          <h3>Our Branches</h3>
          <p> loremipsum loremipsum loremipsumloremipsumloremipsumloremipsum</p>
          <ul>
            <li>address1</li>
            <li>address2</li>
            <li>address3</li>
            <li>address4</li>
            <li>address5</li>
          </ul>
          <div className="contact-photo">
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_IGfIGP5ONV0.jpg?raw=true"
              alt="egg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
