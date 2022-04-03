import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Benifit} from "./Components/VideoConsult/Benifit"


import {Finddoctors} from "./Components/Finddoctors/Finddoctors"
import {Routes,Route} from "react-router-dom"
import { Description } from './Components/Description/Description'

function App() {
  return (
<div className="App">  
<Routes>
<Route path='/decription' element = {<Description/>}></Route>
<Route path='/find' element= {<Finddoctors/>}></Route>
<Route path='/benifit' element={<Benifit/>}></Route>
</Routes>
</div> 
  )
}
export default App