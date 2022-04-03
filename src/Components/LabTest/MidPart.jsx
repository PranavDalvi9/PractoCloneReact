import React from "react";
import "./MidPart.css";
import { DownloadPracto } from "../Medicines/DownloadPracto/DownloadPracto";

export const MidPart = () => {
  return (
    <div className="midpart">
      <h1>Why book with us?</h1>
      <div className="free">
        <div className="free-1">
          <div className="free-left">
            <img
              src="https://www.practo.com/tests/public/icons/home_sample_pickup.png"
              alt="Image"
            />
          </div>
          <div className="free-right">
            <div className="right-top">Home sample collection for FREE</div>
            <div className="right-bottom">
              A certified professional will collect your sample from your
              preferred location
            </div>
          </div>
        </div>
        <div className="free-1">
          <div className="free-left">
            <img
              src="https://www.practo.com/tests/public/icons/e_reports_on_next_day.png"
              alt="Image"
            />
          </div>
          <div className="free-right">
            <div className="right-top">Get digital report within a day</div>
            <div className="right-bottom">
              Our labs ensure turn-around-time of 24 hours from specimen pickup
            </div>
          </div>
        </div>
        <div className="free-1">
          <div className="free-left">
            <img
              src="https://www.practo.com/tests/public/icons/offers.png"
              alt="Image"
            />
          </div>
          <div className="free-right">
            <div className="right-top">Offers and affordable prices</div>
            <div className="right-bottom">
              Get great discounts and offers on tests and packages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
