// import "./MedicineCartNav.css";

// import React from 'react'
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// import { addCart } from "../../Redux/Action";
// import { addItems } from "../../Redux/Action";
// import { store } from "../../Redux/Store";
// import { useDispatch, useSelector } from "react-redux";
// import {Cart} from ".././Cart/Cart"

// import { Link } from "react-router-dom";

// // import MedicinesProduct from "../MedicinesProduct/MedicinesProduct";


// export default function MedicineCartNav() {

//   const dispatch = useDispatch();
//   const count = useSelector((store) => store.cart)
//   const items = useSelector((store) => store.items)

//   return (
//     <div>
//         <div className="MedicineSearch">
//             <div className="MedicineSearchInput">
//             {/* <i class="icon-ic_search_system"></i> */}
//             <input type="text" placeholder="Search for medicines, health products and more" />
//             </div>

//             <div></div>

//             <Link to={"/cart"}>
//             <div className="MedicineSearchCart"><button>             
//               <div>
//                 <Badge color="secondary" badgeContent={items.length}>
// 		          <ShoppingCartIcon />{" "}
// 		          </Badge>
//               </div>
//               <span>VIEW CART</span>
//               </button></div>
//             </Link>

            
//         </div>
//         {/* <MedicinesProduct/> */}
//     </div>
//   )
// }
