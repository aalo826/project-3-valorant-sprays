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

      const finalData = sprayArray.map((sprayData, index) => {
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

        return {
          name:sprayName,
          display: sprayDisplay,
          id:sprayId,
          key:sprayKey
        }
      });
      console.log(finalData)
      setSpray(finalData);
    });
  }, []);

  return (
    <section id="sprays">

    </section>
  );
};

export default Sprays;
