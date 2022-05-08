import { ADD_CART } from "./Action";
import { ADD_ITEMS } from "./Action";

const initState = {
    cart : 0,
    items : [],
} 

export const reducer = (store = initState, {type, payload}) => {
    console.log("store",store)
    // console.log(store.items.length)
     switch(type){
         case ADD_CART:
             return{...store, cart: store.cart+ payload}

        case ADD_ITEMS:
        return{...store, items : [...store.items, payload]}
        default:
            return store;
     }

     
}

