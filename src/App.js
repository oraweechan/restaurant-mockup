
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Home from './pages/Home';
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Container>
      <Home />
      <Footer />

      </Container>
      
    </div>
  );
}

export default App;
