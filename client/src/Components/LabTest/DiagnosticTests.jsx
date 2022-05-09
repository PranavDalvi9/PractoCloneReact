import React from "react";
import "./DiagnosticTests.css";

export const DiagnosticTests = () => {
  return (
    <div className="Labtests">
      <h2>Top Booked Diagnostic Test</h2>
      <div className="diagnostic">
        <div className="box">
          <div className="head">
            <h4>COVID RT-PCR</h4>
            <p className="day">
              Known as Covid-19 Virus Qualitative Throat Swab
            </p>
            <p>E-sports on next day</p>
            <br />
            <div>₹500</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h4>Fasting Blood Sugar</h4>
            <p className="day">Known as Glucose Fasting Blood</p>
            <p>E-sports on same day</p>
            <br />
            <div>₹199</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h4>Beta HCG</h4>
            <p className="day">Known as Beta Hcg Automated Blood</p>
            <p>E-sports on next day</p>
            <br />
            <div>₹400</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h4>Vitamin B 12</h4>
            <p className="day">Known as Vitamin B12 Conventional Blood</p>
            <p>E-sports on same day</p>
            <br />
            <div>₹490</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h4>HbA1c</h4>
            <p className="day">Known as Glycosylated Haemoglobin Blood</p>
            <p>E-sports on next day</p>
            <br />
            <div>₹300</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h4>Liver Function Test</h4>
            <p>Known as Liver Function Tests Blood</p>
            <p>E-sports on same day</p>
            <br />
            <div>₹673</div>
          </div>
          <div className="bottom">
            <div>ADD</div>
          </div>
        </div>
      </div>
      <br />
      <h2>Find Tests by Health Concern</h2>

      <div className="diagnostic-1">
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559"
            alt="img"
          />
          <div>Fever</div>
        </div>
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559"
            alt="img"
          />
          <div>Fever</div>
        </div>
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559"
            alt="img"
          />
          <div>Skin</div>
        </div>
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559"
            alt="img"
          />
          <div>Kidney</div>
        </div>
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Stomach.svg?v=1569493559"
            alt="img"
          />
          <div>Stomach</div>
        </div>
        <div>
          <img
            src="https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559"
            alt="img"
          />
          <div>Cancer</div>
        </div>
      </div>
      <br />
      <h2>Popular Health Checkup Packages</h2>
      <div className="package">
        <div>
          <div className="image">
            <img
              src="https://images1-fabric.practo.com/dx/labs/PRL-HWP/logo.jpg/360x240"
              alt="img"
            />
          </div>

          <div className="mid">
            <div className="basic">Basic Women's Health Checkup</div>
            <span className="age">Ideal for individuals aged </span>
            <span className="years">15-40 years</span>
            <p className="ak">85 tests included</p>
          </div>
          <hr className="line" />
          <div className="mid-bottom">
            <div>
              <span className="amount">₹1099 </span>
              <span className="saving">₹1400 </span>
              <span className="discount">22% off</span>
            </div>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="image">
            <img
              src="https://images1-fabric.practo.com/dx/labs/PRL-VDHC/logo.jpg/360x240"
              alt="img"
            />
          </div>

          <div className="mid">
            <div className="basic">Vitamin Deficiency Health Checkup</div>
            <span className="age">Ideal for individuals aged </span>
            <span className="years">11-80 years</span>
            <p className="ak">5 tests included</p>
          </div>
          <hr className="line" />
          <div className="mid-bottom">
            <div>
              <span className="amount">₹899 </span>
              <span className="saving">₹1200 </span>
              <span className="discount">25% off</span>
            </div>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="image">
            <img
              src="https://images1-fabric.practo.com/dx/labs/PRL-YIHC/logo_0gMZNaj.jpg/360x240"
              alt="img"
            />
          </div>

          <div className="mid">
            <div className="basic">Young Indian Health Checkup</div>
            <span className="age">Ideal for individuals aged </span>
            <span className="years">14-40 years</span>
            <p className="ak">84 tests included</p>
          </div>
          <hr className="line" />
          <div className="mid-bottom">
            <div>
              <span className="amount">₹899 </span>
              <span className="saving">₹1200 </span>
              <span className="discount">25% off</span>
            </div>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <h2>Top booked Medical tests</h2>
      <span>Get 10% Health Cashback*</span>
      <span>T&C</span>
      <br />
      <div className="medical">
        <div className="boxes">
          <div className="medical-1" id="medical-1">
            <span className="img-left">
              <img
                src="https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png"
                alt=""
              />
            </span>
            <span className="img-right">
              <h4>Lipid Profile</h4>
            </span>
          </div>
          <div className="medical-2">
            <h4>Ldl Cholesterol Test</h4>
            <p className="faint">
              Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood
            </p>
          </div>
          <div className="medical-3">
            <h4>Hdl Cholesterol Test</h4>
            <p className="faint">
              Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood
            </p>
          </div>
          <div className="medical-4">
            <h4>Vldl Cholesterol Test</h4>
            <p className="faint">Also known as Vldl Cholesterol Blood</p>
          </div>

          <div className="medical-5">
            <h4>Total Cholesterol Test</h4>
            <p className="faint">Also known as Cholesterol Test</p>
          </div>

          <div className="medical-6">
            <h4>Triglycerides Blood Test</h4>
            <p className="faint">Also known as Triglycerides Blood</p>
          </div>

          <div className="medical-7">
            <button>Book Now</button>
          </div>
        </div>

        <div className="boxes">
          <div className="medical-1" id="medical-1">
            <span className="img-left">
              <img
                src="https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png"
                alt=""
              />
            </span>
            <span className="img-right">
              <h4>Liver Profile</h4>
            </span>
          </div>

          <div className="medical-2">
            <h4>Gamma Glutamyl Transferase</h4>
            <p className="faint">Also known as GGT</p>
          </div>

          <div className="medical-3">
            <h4>Total Bilirubin</h4>
            <p className="faint">Also known as Bilirubin Total Blood</p>
          </div>

          <div className="medical-4">
            <h4>Ast Test</h4>
            <p className="faint">Also known as SGOT</p>
          </div>

          <div className="medical-5">
            <h4>Alp Test</h4>
            <p className="faint">Also known as Alkaline Phosphatase</p>
          </div>

          <div className="medical-6">
            <h4>Albumin Test Test</h4>
            <p className="faint">Also known as Albumin Blood</p>
          </div>

          <div className="medical-7">
            <button>Book Now</button>
          </div>
        </div>

        <div className="boxes">
          <div className="medical-1" id="medical-1">
            <span className="img-left">
              <img
                src="https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png"
                alt=""
              />
            </span>
            <span className="img-right">
              <h4>Blood Sugar</h4>
            </span>
          </div>

          <div className="medical-2">
            <h4>Hba1C Test</h4>
            <p className="faint">
              Also known as Glycosylated Haemoglobin Blood
            </p>
          </div>

          <div className="medical-3">
            <h4>Fasting Blood Sugar Test</h4>
            <p className="faint">Also known as Glucose Fasting Blood</p>
          </div>

          <div className="medical-4">
            <h4>Random Blood Sugar Test</h4>
            <p className="faint">Also known as RBS</p>
          </div>

          <div className="medical-5">
            <h4>Blood Sugar Levels After Eating</h4>
            <p className="faint">Also known Post Prandial Blood Sugar</p>
          </div>

          <div className="medical-6">
            <h4>Creatinine Test</h4>
            <p className="faint">Also known as Creatinine Conventional Blood</p>
          </div>

          <div className="medical-7">
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
