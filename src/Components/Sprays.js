import { useEffect, useState } from "react";
import axios from "axios";

const Sprays = () => {
  const [spray, setSpray] = useState([]);
  const [randomSpray, setRandomSpray] = useState({});

  useEffect(() => {
    axios({
      url: "https://valorant-api.com/v1/sprays",
      method: "GET",
      dataRespone: "json",
    }).then((response) => {
      const sprayArray = response.data.data;

      const finalData = sprayArray.map((sprayData, index) => {
        const sprayName = sprayData.displayName;
        const sprayImg = sprayData.fullTransparentIcon;
        const sprayGif = sprayData.animationPng;
        const sprayId = sprayData.uuid;
        const sprayKey = {index};
        let sprayDisplay = "";

        if (sprayGif === null) {
          sprayDisplay = sprayImg;
        } else {
          sprayDisplay = sprayGif;
        }

        if (sprayGif && sprayImg === null){

        }

        return {
          name:sprayName,
          display: sprayDisplay,
          id:sprayId,
          key:sprayKey
        }
      });
      setSpray(finalData);
      // console.log(finalData)
    });
  }, []);


  const handleRandomSpray = () => {
    const index = Math.floor(Math.random() * spray.length +1)
    const randomSprayItem = spray[index]

    setRandomSpray(randomSprayItem);
  }


  return (
    <section id="sprays">
      <div id="spray-container">
        <div className="spray-content">
        {
          randomSpray.id !== undefined ? (
              <>
                <img src={randomSpray.display} alt={randomSpray.name}/>
                <h3>{randomSpray.name}</h3>
              </>
          ): null
        }

            </div>
      </div>

        <button className='spray-button' onClick=
        {
          () => {handleRandomSpray()}
        }

        >Spray</button>


    </section>
  );
};

export default Sprays;
