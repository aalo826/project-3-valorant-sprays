import './Styles/App.css';
import { useEffect, useState } from "react";
import axios from 'axios';

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
      <h1> View sprays</h1>
    </div>
  );
}

export default App;


// Psuedo Code

// Landing page with blank square canvas
// Button under canvas prompting user to click it
// When clicked, displays image from Valorant API

// use method (getSpray) to get the list of sprays
// Since the the sprays have an unreadable ID, .map() to assign each spray an ID starting from 0.

  // let i = 0;
  // spray.map(n => {
  //   n['id'] = i;
  //   i++;
  // })

// Make a random number generator to pick a random spray to display based on the ID number

