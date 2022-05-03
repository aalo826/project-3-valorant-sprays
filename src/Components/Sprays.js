import { useEffect, useState } from "react";
import axios from "axios";

const Sprays = () => {
  const [spray, setSpray] = useState([]);

  useEffect(() => {
    axios({
      url: "https://valorant-api.com/v1/sprays",
      method: "GET",
      dataRespone: "json",
    }).then((response) => {
      // console.log(response)
      const sprayArray = response.data.data;
      setSpray(sprayArray);

      sprayArray.map((sprayData, index) => {
        const sprayName = sprayData.displayName;
        const sprayImg = sprayData.fullTransparentIcon;
        const sprayGif = sprayData.animationPng;
        const sprayId = {index};
        const sprayKey = sprayData.uuid;
        let sprayDisplay = "";

        if (sprayGif === null) {
          sprayDisplay = sprayImg;
        } else {
          sprayDisplay = sprayGif;
        }


      });
    });
  }, []);

  return (
    <div id="sprays">

{/*
      {spray.map((spray) => (
        <li key={spray.uuid}>
          <img src={spray.fullTransparentIcon} alt={spray.displayName} />
          <p>{spray.displayName}</p>
        </li>
      ))} */}
    </div>
  );
};

export default Sprays;
