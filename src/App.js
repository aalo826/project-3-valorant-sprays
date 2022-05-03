import './Styles/App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Sprays from './Components/Sprays';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sprays />
      <About />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;



