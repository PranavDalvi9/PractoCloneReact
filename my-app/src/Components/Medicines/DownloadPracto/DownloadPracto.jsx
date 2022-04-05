import "./DownloadPracto.css";

export const DownloadPracto = () => {
    return(
        <div id="DownloadPractoMain">
            <div id="DownloadPracto">
                <div><img src="https://www.practostatic.com/consumer-home/desktop/images/1540464906/app-banner@2x.jpg" alt="" /></div>
            
                <div id="DownloadPractoMainInfo">
                    <div>Download the Practo app</div>
                    <div>Your home for health is one tap away.</div>
                    <div>Book appointments, Order health products, Consult with a doctor online,</div>
                    <div>Book health chekups, store health records & read health tips.</div>
                    <div>Send the link to download the app</div>

                    <div className="DownloadPractoNumberANDEnterNum">
                        <div>+91</div>
                        <input type="text" placeholder="Enter phone number" />
                        <div><button>Send app link</button></div>
                    </div>

                    <div className="DownloadPractoNumberAND">
                        <a href="https://play.google.com/store/apps/details?id=com.practo.fabric&referrer=af_tranid%3D0QegJqmR3qaoVYGqQfapmQ%26pid%3DPracto-order%26c%3Dhomepage" ><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/play-store.3556fc81.png" alt="" /></a>
                        <a href="https://apps.apple.com/IN/app/id953772015?mt=8"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/app-store.e30d53a6.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}