import "./MedicinesProduct.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { addCart } from "../../Redux/Cart/Action";
import { addItems } from "../../Redux/Cart/Action";
// import { store } from "../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

export default function MedicinesProduct() {


    const [prodname, setProdName] = useState("Family Care")

    const [data, setData] = useState([]);

    const [filterdata, setFilterdata] = useState([])


    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("https://practocloneapi3.herokuapp.com/products").then(res => setData(res.data.medicine))

    }, [])

    useEffect(() => {
        const disp = data.filter((e) => {

            var skye = e.category

            if (skye.startsWith(`${prodname}`) || skye.endsWith(`${prodname}`)) return e;
        })

        var res = disp.slice(0, 11)
        setFilterdata(res)

    }, [data, prodname])


    return (
        <div className='MedicinesProduct MedicinesProductFlex'>

            <div id="MedicinesProductCategory">

                <div className="MedicinesProductCategoryTitle1"><Link to={"/medicines"} className="backColor">Home></Link><b>{prodname}</b></div>
                <div className="MedicinesProductCategoryHead">CATEGORIES</div>
                <div className=' MedicinesProductCategoryInfo'>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Family Care")
                        console.log(prodname)

                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Family Care</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Fitness Wellness")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Fitness & Wellness</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Skin care")
                        console.log(prodname)
                    }} >
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Skin care</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Hair care")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Hair care</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Lip Care")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Lip Care</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Sexual wellness")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Sexual wellness</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Women's Care")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Women's Care</div>
                    </div>
                    <div className="MedicinesProductFlex MedicineCatDrop" onClick={() => {
                        // console.log("here")
                        setProdName("Baby care")
                        console.log(prodname)
                    }}>
                        <i class="icon-ic_next_cheveron"></i>
                        <div>Baby care</div>
                    </div>
                </div>
            </div>


            <div className="MedicinesProductProduct">
                <div className="MedicinesProductProdCate MedicinesProductFlex">
                    <div><h1 className="headName">{prodname}</h1></div>
                    <div><p>11 products</p></div>
                </div>
                <div className="MedicinesProductProductProdList">

                    {
                        filterdata.map((e) => (

                            
                                <div className="trial" >
                                    <Link to={`/description/${e.id}`}>
                                    <>
                                    <div className="MedicinesProductProductProdListImg">
                                        <img src={e.image} alt="" />
                                    </div>

                                    <div className="MedicinesProductProductProdListNameANDPrice">
                                        <div className="MedicinesProductProductProdListName">{e.tablet}</div>
                                        <div className="MedicinesProductPriceAND">
                                            {/* var disPrice = ({e.price} * ({e.discount}/100)) */}
                                            {/* console.log(disPrice); */}
                                            <div className="MedicinesProductPrice" ><span>₹</span> <span>{((e.price) - ((e.price) * ((e.discount) / 100))).toFixed(2)}</span></div>
                                            <div className="MedicinesProductOffer"> <span>₹</span><span>{e.price}</span> </div>
                                            <span className="MedicinesProductOfferPrice">{e.discount}% off</span>
                                        </div>
                                    </div>
                                    </>
                                    </Link>

                                    <div className="MedicinesProductAddTo MedicinesProductFlex">
                                        <div className="MedicinesProductAddToQuantity">200ML SYRUP</div>
                                        <div className="MedicinesProductAddToButton"><button onClick={() => { dispatch(addItems(e)) }}>ADD</button></div>
                                    </div>

                                </div>
                        



                        ))
                    }
                </div>


            </div>



        </div>
    )
}
