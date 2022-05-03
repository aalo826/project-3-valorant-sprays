import { useState } from "react";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const random = () => {
    Math.floor(Math.random() * finalData.length )
  }

    return (
    <>
      <button onclick={random}>Random NUmber</button>
    </>
  )
}

export default RandomNumber;


// Button that generates Random number generator from 0 to array length
// Grab the number that the button generated (105 for example)
//  grab object with the index 105 using the property sprayKey
// Once object 105 is selected, display its info using properties sprayName, sprayDisplay and sprayId