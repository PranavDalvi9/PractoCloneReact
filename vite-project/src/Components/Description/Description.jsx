import style from "../Description/Decription.css"
import axios from "axios"
import React, { useState } from "react"

export const Description = ()=>{
const [data,setdata] = useState([]);
const [newp,setprice] = useState([])
const [server,setserver] = useState([])
React.useEffect(()=>{
  serverData()
  getdata()
 
},[newp])


const serverData = ()=>{
  axios.get("https://practocloneapi3.herokuapp.com/products").then(function(res){
  // console.log("api data",res.data.medicine[0])
  setserver(res.data.medicine[0])
})
}

// server.map((e)=>{
//   console.log(e)
// })

console.log("Server data",server.price)



const getdata = ()=>{
  axios.get("http://localhost:8080/medicine").then(function(res){
    setdata(res.data)
console.log(res.data.price);
      let newp= Math.floor(res.data.price*res.data.discount/100);
      let  updatedprice = res.data.price - newp;
       setprice(updatedprice)
       console.log(updatedprice)  
  })

}
console.log(newp)
console.log("Medicine",data)
    return(
        <>
<div id="main">
<div id="left">
<div id="image">
<img src={data.image} alt="" />
</div >
<div class="content">
<h2>₹ {newp} <span className="discount2">₹{data.price}</span> <span class="discount">{data.discount}%off</span></h2>
<button id="addto">Add to cart</button>
</div>
</div>
<div id="right">
<h2 class="content2">{data.tablet}</h2>
<span>
  Manufactured By <strong>{data.brand}</strong>
</span>
  <div className="highlight">
 <h2 className="content2">Highlights</h2>
<br />
 <ul>
   <li>{data.highlights}</li>
 </ul>
<br />
<div>
 <h2 className="content2">Description</h2>
 <span>{data.Discription}</span>
 </div>
 <div >
 <h2 id="use" className="content2">Use</h2>
<span>{data.uses}</span>
 </div>
 <div>
 <h2 id="benifits" className="content2">Benefits</h2>
<ul>
<li>
{data.benefits}
</li>
</ul>
</div>
</div>
</div>
</div>
        </>
    )


}