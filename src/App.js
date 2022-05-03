import './Styles/App.css';
import DesktopNav from "./Components/DesktopNav";
import Header from './Components/Header';
import Sprays from './Components/Sprays';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <DesktopNav />
      <Header />
      <About />
      <Sprays />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;



