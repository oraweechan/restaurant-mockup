import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import NavMenu from "../components/Layout/NavMenu/NavMenu";
import Testimonial from "../components/Testimonial";
import TextContent from "../components/TextContent";

function Home() {
  return (
    <div className="Home">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url("https://github.com/dcartist/FrontEndHackathon/raw/master/MOCKUP/Restaurant/images/unsplash_4xc6i5BKPWs.jpg")`,
        }}
      >
        <NavMenu />
        <HeroSection />
      </div>
      <TextContent>
        {" "}
        Ultricies arcu bibendum bitae congue proin sit aliquam, felis venenatis{" "}
      </TextContent>
      <div className="photo">
        <img
          src="https://github.com/dcartist/FrontEndHackathon/raw/02fad8b40205ed2c41c2b7a2e2f6da1a393abd71/MOCKUP/Restaurant/images/unsplash_XoByiBymX20.jpg"
          alt="soup"
        />
      </div>

      <div className="about">
        <div className="about-items">
          <TextContent>
            {" "}
            Ultricies arcu bibendum bitae congue proin sit aliquam, felis
            venenatis{" "}
          </TextContent>
          <TextContent>
            {" "}
            Ultricies arcu bibendum bitae congue proin sit aliquam, felis
            venenatis{" "}
          </TextContent>
        </div>
      </div>
      <div className="photo">
        <img
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_P1aohbiT-EY.jpg?raw=true"
          alt="pie"
        />
      </div>
      <Gallery />
      <Testimonial />
      <div className="photo">
        <img
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_fdlZBWIP0aM.jpg?raw=true"
          alt="egg"
        />
      </div>
    </div>
  );
}

export default Home;
