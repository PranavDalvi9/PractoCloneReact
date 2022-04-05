import style from "../VideoConsult/Styles/app.module.css"
// import Button from '@mui/material/Button';
export const Appdownload = ()=>{
    return(
<>

<div>
<div className={style.upper}>
<div className={style.leftdiv}>
<h1 className={style.htext}>Still delaying your health concerns ?</h1>
<p>Connect with India's top doctors online</p>
</div>
<div className={style.consultbtn}>
<a href="#"><button className={style.btn}>Consult Now</button></a> 
</div> 
</div>
</div>
<div class={style.download}>
<div>
<img src="https://www.practo.com/consult/static/images/app-download-banner-web.png" alt="practo app download banner" width="350"></img>
<div className={style.content}>
<h2 class={style.heading}>Download the Practo app</h2>
<p class={style.description}>Get ₹200 HealthCash</p>
<div className={style.applinkwrap}>
                      <h4 className={style.heading2}>Get the link to download the app</h4>
                      <form  className={style.form}>
                          <div className={style.inpcontainer}>
                              <div className={style.code} >
                                +91
                              </div>
                              <input type="tel" placeholder="Enter phone number" className={style.inp} />
                          </div>
                          <button className={style.btn2}>Send app link</button>
                      </form>

                      <div class="lg:flex">
                      <a target="blank" href="https://play.google.com/store/apps/details?id=com.practo.fabric&referrer=af_tranid%3DdbOz0M6dAmbSrV7v5m6K_g%26pid%3Dweb%26c%3Dconsult_homepage_v2_app_section">
                      <div class="h-20 w-48 lg:mr-2 mt-4  sm:mt-0 inline-block">
  <img   src="https://www.practo.com/consult/static/images/google-play-badge.png" alt="" />
      </div>
      </a>

      <a href="https://apps.apple.com/IN/app/id953772015?mt=8" target="blank">
      <div class="lg:h-20 w-48 mt-4 sm:mt-0">
      <img src="https://www.practo.com/consult/static/images/app-store-badge.png" alt="" />
      </div>
      </a>
      </div>
     </div>
        </div>
             </div>
              </div>

    {/* <div class={style.consult}>
    </div> */}

    

</>

















    )
}