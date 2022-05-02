import './Styles/App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Sprays from './Components/Sprays';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [spray, setSpray] = useState([]);
  useEffect(() => {
    axios({
      url: "https://valorant-api.com/v1/sprays",
      method: 'GET',
      dataRespone: 'json'
    }).then((response) => {
      console.log(response);
    });
  })
  return (
    <div className="App">
      <div>

        <Navbar />
        <Header />
        <Sprays />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>

  );
}

export default App;



