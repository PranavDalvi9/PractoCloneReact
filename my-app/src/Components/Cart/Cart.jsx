import "./Cart.css"
// import React from 'react'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from "axios";



import { addCart } from "../../Redux/Action";
import { addItems } from "../../Redux/Action";
import { store } from "../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";



export default function Cart() {
    const [total , setTotal] = useState(0)
    const [ discount, setDiscount] = useState(0)
    const dispatch = useDispatch();

    const items = useSelector((store) => store.items)
    var totalVar = 0
    var discountCar = 0
React.useEffect(()=>{
    setTotal(totalVar)
    setDiscount(newDisPrice)
},[])

    for(var i=0; i<items.length; i++){
          totalVar += items[i].price; 
          discountCar += items[i].discount; 
    }
    var newDisPrice = Math.floor((totalVar)*(discountCar/100))
    console.log(total)
    console.log("dis",newDisPrice)



// payment alok
const initPayment = (data) => {
    const options = {
      key: "rzp_test_xkRX7E1arP0hgl",
      amount: (total - discount)*100,
      currency: "INR",
    //   name: book.name,
      description: "Test Transaction",
    //   image: book.img,
    //   order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:8080/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:8080/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: 400 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
// payment end
    
    

  return (
    <div id="Cart">
        <Link to={"/products"}><div className="CartGoBack"><a href=""><i class="icon-ic_back"></i>Go to previous page</a></div></Link>
        
        
       <div id="MyCart">
         <div className="CartMyCart">My cart: {items.length} item</div>
{/* <hr /> */}
        <div className="HorizontalBreak"><hr /></div>
        <div className="CartProd"></div>

{
    items.map((e) => (
        
        <div className="CartProductsList">
            <div className="CartProductsListImg"><img src={e.image} alt="" /></div>
            
            <div className="CartProductsListName">
                <div>{e.tablet}</div>
                <div>{e.brand}</div>
                {/* <h1>{e.price}</h1> */}
                {/* <div>200ML</div> */}
            </div>

            <div className="CartProductsListPrice">
                <div className="Mrp"><span>₹</span> <span>{((e.price)-((e.price)*((e.discount)/100))).toFixed(2)}</span></div>
                <div> <span className="MrpCut">₹{e.price}</span> <span className="MrpCutGreen">({e.discount}% off)</span> </div>
                <div className="CartButton">
                    <div className="CartAddSubBTN">-</div>
                    <div className="CartCount">1</div>
                    <div className="CartAddSubBTN">+</div>
                </div>
            </div>
        </div>
    ))
}
        {/* <div className="CartProductsList">
            <div className="CartProductsListImg"><img src="https://www.practostatic.com/practopedia-images/v3/res-150/safi-syrup-200ml_0575040a-3c79-48fd-861a-d344615bbedd.JPG" alt="" /></div>
            
            <div className="CartProductsListName">
                <div>SAFI Syrup  200ML</div>
                <div>HAMDARD (WAKF) LABORATORIES</div>
                <div>200ML</div>
            </div>

            <div className="CartProductsListPrice">
                <div className="Mrp"><span>₹</span> <span>95</span></div>
                <div> <span className="MrpCut">₹100</span> <span className="MrpCutGreen">(5% off)</span> </div>
                <div className="CartButton">
                    <div className="CartAddSubBTN">-</div>
                    <div className="CartCount">1</div>
                    <div className="CartAddSubBTN">+</div>
                </div>
            </div>
        </div> */}


        <Link to={"/products"}> <div className="AddMedicines"><button>Add more medicines</button></div></Link>
       

        <div className="HorizontalBreak"><hr /></div>

        <div className="AmountPaySave">
            <div className="AmountPay">Payable Amount: ₹ {total - discount}</div>
            <div className="AmountSave">Save ₹ {discount}</div>
        </div>

        <div className="CheckOut">
            <button onClick={handlePayment} >Checkout</button>
        </div>

      
       </div>
    </div>
  )
}
