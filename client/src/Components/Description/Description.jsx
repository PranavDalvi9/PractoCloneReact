import "./Description.css"

import style from "./Description.css"
import axios from "axios"
import React, { useState } from "react"
import { useParams } from "react-router-dom"

// import { addCart } from "../../Redux/Action";
import { addCart } from "../../Redux/Cart/Action"
import { addItems } from "../../Redux/Cart/Action";
// import { store } from "../../Redux/Store";
import { store } from "../../Redux/Store"
import { useDispatch, useSelector } from "react-redux";

import MedicineSearch from "../MedicineSearch/MedicineSearch"

export const Description = ()=>{

  const {id} = useParams();
const [data,setdata] = useState([]);
const [newp,setprice] = useState([])
const [server,setserver] = useState([])
React.useEffect(()=>{
  serverData()
  getdata()
 
},[newp])

const dispatch = useDispatch();
const count = useSelector((store) => store.cart)
const items = useSelector((store) => store.items)

const serverData = ()=>{
  axios.get("https://practocloneapi3.herokuapp.com/products").then(function(res){
  // console.log("api data",res.data.medicine[id])
  setserver(res.data.medicine[id])
})
}

console.log(server)
// server.map((e)=>{
//   console.log(e.tablet)
// })

const getdata = ()=>{
  axios.get("https://practocloneapi3.herokuapp.com/products").then(function(res){
    // setdata(res.data.medicine)
console.log(res.data.price)
      let newp= Math.floor(res.data.medicine[id].price*res.data.medicine[id].discount/100)
      let  updatedprice = res.data.medicine[id].price - newp
       setprice(updatedprice)
       console.log(updatedprice)  
  })
}
console.log(newp)
console.log("Medicine",data)
    return(
        <>
        <MedicineSearch/>
<div id="main">
<div id="left">
<div id="image">
<img src={server.image} alt="" />
</div >
<div class="content">
<h2>₹ {newp} <span className="discount2">₹{server.price}</span> <span class="discount">{server.discount}%off</span></h2>
<button id="addto" onClick={() => {dispatch(addItems(server)) }}>Add to cart</button>
</div>
</div>
<div id="right">
<h2 class="content2">{server.tablet}</h2>
<span>
  Manufactured By <strong>{server.brand}</strong>
</span>
  <div className="highlight">
 <h2 className="content2">Highlights</h2>
<br />
 <ul>
   <li>{server.highlights}</li>
 </ul>
<br />
<div>
 <h2 className="content2">Description</h2>
 <span>{server.Discription}</span>
 </div>
 <div >
 <h2 id="use" className="content2">Use</h2>
<span>{server.uses}</span>
 </div>
 <div>
 <h2 id="benifits" className="content2">Benefits</h2>
<ul>
<li>
{server.benifits}
</li>
</ul>
</div>
</div>
</div>
</div>
        </>
    )


}