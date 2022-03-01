import HeroSection from './components/HeroSection';
import Layout from './components/Layout/NavMenu/Layout';
import NavMenu from './components/Layout/NavMenu/NavMenu';
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <div className='hero-section' style={{ 
      backgroundImage: `url("https://github.com/dcartist/FrontEndHackathon/raw/master/MOCKUP/Restaurant/images/unsplash_4xc6i5BKPWs.jpg")` 
    }}>
      <NavMenu />
      <HeroSection />
      </div>
    </div>
  );
}

export default App;
