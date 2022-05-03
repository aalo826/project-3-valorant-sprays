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

  // const [singleSpray, setSingleSpray] = useState([spray]);
  // useEffect(() => {
  //   console.log(spray)
  // })

  const handleRandomSpray = () => {
    const index = Math.floor(Math.random() * spray.length +1)
    const randomSprayItem = spray[index]

    setRandomSpray(randomSprayItem);
  }


  return (
    <section id="sprays">
      <button onClick={() => {handleRandomSpray()}}>Test</button>
      {
        randomSpray.id !== undefined ? (
          <div>
            <img src={randomSpray.display} alt={randomSpray.name} />
            <p>{randomSpray.name}</p>
          </div>
        ): null

      }


    </section>
  );
};

export default Sprays;
