
import "./SliderImage.css"
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { BrowseCategoryMedicine } from "../BrowseCategoryMedicine/BrowseCategoryMedicine";
import { IntroducingBelowCategory } from "../IntroducingBelowCategory/IntroducingBelowCategory";
import { ComprehensiveInfo } from "../ComprehensiveInfo/ComprehensiveInfo";
import { WhatUserSays } from "../WhatUserSays/WhatUserSays";
import { DownloadPracto } from "../DownloadPracto/DownloadPracto";


export default function SliderImage() {
    const images = [
        { url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png" },
        { url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png" },
        { url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png" },
        { url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png" },
        // { url: "images/5.jpg" },
        // { url: "images/6.jpg" },
        // { url: "images/7.jpg" },
      ];

  return (
    <div id="mainSlider">
         <div id = "SliderImageImg">
      <SimpleImageSlider 
        autoPlay = {true}
        showBullets = {false}
        width={"100%"}
        height={310}
        images={images}
        showBullets={false}
        bgColor = {"transperent"}
      />
    </div>
    <BrowseCategoryMedicine/>
      <IntroducingBelowCategory/>
      <ComprehensiveInfo/>
      <WhatUserSays/>
      <DownloadPracto/>
    </div>
  )
}
