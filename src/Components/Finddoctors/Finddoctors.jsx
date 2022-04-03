 import {Link } from "react-router-dom"
import React from 'react'
import style from "./Find.module.css"
import { Appdownload } from "../VideoConsult/Appdownload"
// const search = ()=>{
//   let s = document.getElementById("searchbox").value

// console.log("search data",s)
// }
// search()
  export const Finddoctors=()=> {
    return (     
      <>
     
  <div className={style.main}>
   <h1>Your home for health</h1>
   <div>
<h4>Find and book</h4>

<input id='searchbox' type="text" placeholder='Search/doctors/hospitals etc.'/>

    </div>

 <div className={style.down}>

 </div>
     </div>
     <div>
     <div className= {style.another}>
      <div className={style.left}>
      <h2 class={style.safe}>Safety of your data is our</h2>
      <h2 class={style.toppri}>top priority</h2>
      <div class="c-list-item"><div><span>Multi-level security checks</span></div></div>
      <div class="c-list-item"><div><i class="fa-regular fa-circle-check"></i><span>Multiple data backups</span></div></div>
      <div class="c-list-item"><div><i class="c-list-item__icon icon-ic_done_open_system"></i><span>Stringent data privacy policies</span></div></div>
      </div>
      <div className={style.right}>
        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" />
      </div>
     </div>
     <div className={style.certi}>

       {/* <div className={style.inside}> */}
     <div class="c-certificate"><div className={style.image}><img src="//www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"/></div>
     <p class="u-t-large">256-bit</p>
     <p class="u-t-small">encryption</p>
     </div>
<div class="c-certificate"><div className={style.image}><img src="//www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"/></div><div class="c-certificate__info"><p class="u-t-large">ISO 27001</p><p class="u-t-small">certified</p></div></div>
<div class="c-certificate"><div className={style.image}><img src="//www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"/></div><div class="c-certificate__info"><p class="u-t-large">HIPAA</p><p class="u-t-small">compliant data centers</p></div></div>
<div class="c-certificate"><div className={style.image}><img src="//www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"/></div><div class="c-certificate__info"><p class="u-t-large">DSCI</p><p class="u-t-small">member</p></div></div>
     
     </div>
     </div>
     <div class={style.consult}>
         <div class={style.left2}>
         <video class="rh5v-DefaultPlayer_video" poster="//www.practostatic.com/web-assets/home/assets/images/consult.15f1b416f3f4c9383b780757d7293d00.png" width="250" height="480" loading="false" autoplay="true" loop="2"><source src="//www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm" type="video/webm"/></video>
         </div>
         <div className={style.right2}>
         <h2 class={style.safe}>Skip the waiting room.</h2>
      <h2 class={style.toppri}>Consult with a doctor</h2>
      <div class="c-list-item"><div><span>Fees starting at <strong>₹99</strong></span></div></div>
      <div class="c-list-item"><div><i class="fa-regular fa-circle-check"></i><span>Verified doctors respond in <strong>5 minutes</strong></span></div></div>
      <div class="c-list-item"><div><i class="c-list-item__icon icon-ic_done_open_system"></i><span>100% Private and confidential</span></div></div>
    <Link to={"/benifit"}><button className={style.consultnow}>Consult Now</button> </Link> 
         </div>
         <div>
         </div>
     </div>
     </>
    )
  }
  