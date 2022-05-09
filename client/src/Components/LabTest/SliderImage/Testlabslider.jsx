import "./Testlabslider.css";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function Testlabslider() {
  const images = [
    {
      url: "https://prod-dx.s3.amazonaws.com/dx/campaigns/dweb_images/Covidrelaunch.jpg",
    },
    {
      url: "https://prod-dx.s3.amazonaws.com/dx/campaigns/dweb_images/TaxSaverBasicB.jpg",
    },
    {
      url: "https://prod-dx.s3.amazonaws.com:443/dx/campaigns/dweb_images/BackToWorkBangalore.png",
    },
    // {
    //   url: "https://prod-dx.s3.amazonaws.com:443/dx/campaigns/dweb_images/YoungIndianHealthCheckup.png",
    // },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];

  return (
    <div id="mainSlider">
      <div id="SliderImageImg">
        <SimpleImageSlider
          autoPlay={true}
          showBullets={false}
          width={"100%"}
          height={350}
          images={images}
          // showBullets={false}
          bgColor={"transperent"}
        />
      </div>
    </div>
  );
}
