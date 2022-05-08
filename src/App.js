import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import { BrowseCategoryMedicine } from './Components/Medicines/BrowseCategoryMedicine/BrowseCategoryMedicine';
import { IntroducingBelowCategory } from './Components/Medicines/IntroducingBelowCategory/IntroducingBelowCategory';
import { ComprehensiveInfo } from './Components/Medicines/ComprehensiveInfo/ComprehensiveInfo';
import { WhatUserSays } from './Components/Medicines/WhatUserSays/WhatUserSays';
import { DownloadPracto } from './Components/Medicines/DownloadPracto/DownloadPracto';
import SliderImage from './Components/Medicines/SliderImage/SliderImage';
import MedicinesProduct from './Components/MedicinesProduct/MedicinesProduct';
import MedicineSearch from './Components/MedicineSearch/MedicineSearch';
import Cart from './Components/Cart/Cart';
import { Description } from './Components/Description/Description';
// import {MedicineCartNav} from "./Components/MedicineCartNav/MedicineCartNav"
import ProductsMedicines from './Components/ProductsMedicines/ProductsMedicines';
// import Navbarwrapper from './Components/NavBar/Navbarwrapper';
import Payment from './Components/Payments/payment';
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer"

import {DiagnosticTests} from "./Components/LabTest/DiagnosticTests"
import {MidPart} from "./Components/LabTest/MidPart"
import {Benifit} from "./Components/VideoConsult/Benifit"

import {Finddoctors} from "./Components/Finddoctors/Finddoctors"


// import Homepage from "./Components/Auth/Homepage/homepage"
// import Login from "./Components/Auth/Login/login"
// import Register from "./Components/Auth/Register/register"
//trial

function App() {
  return (
    <div className="">
      <Navbar/>
      {/* <Finddoctors/> */}
      {/* <Benifit/> */}
      
      {/* <Payment/> */}
     {/* <Navbarwrapper/> */}
      {/* <ProductsMedicines/> */}
      {/* <MedicineCartNav/> */}
      
      {/* <Description/> */}
      {/* <h1>Pranav</h1> */}

      {/* Home page Medicines */}
      {/* <SliderImage/>
      <BrowseCategoryMedicine/>
      <IntroducingBelowCategory/>
      <ComprehensiveInfo/>
      <WhatUserSays/>
      <DownloadPracto/> */}
      {/* Home page Medicines */}


      {/* products page */}
      {/* <MedicineSearch/>
      <MedicinesProduct/> */}


      {/* cart */}
      {/* <Cart/> */}
      

      <Routes>
        <Route path='/' element = {<>
        {/* <Navbarwrapper/> */}
          <SliderImage/>
        </>} />

        <Route path='/products' element = {<ProductsMedicines/>} />

        <Route path='/description/:id' element = {<Description/>} />

        <Route path='/cart' element = {<Cart/>} />

        <Route path='/payment' element= {<Payment/>}/>

        <Route path='/labtest' element={<><DiagnosticTests/>
      <MidPart/>
      <DownloadPracto/> </>}/>

      <Route path='/benifit' element={<Benifit/>}/>

      <Route path='/finddoctors' element={<Finddoctors/>}/>

{/* 
      <Route  path="/home">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}


        {/* <Route path='/medicines' element = {<IntroducingBelowCategory/>} />
        <Route path='/medicines' element = {<ComprehensiveInfo/>} />
        <Route path='/medicines' element = {<WhatUserSays/>} />
        <Route path='/medicines' element = {<DownloadPracto/>} /> */}
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
