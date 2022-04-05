// export const ADD_CART = "ADD_CART";

// export const addCart = (paylad) => {
    
// }

//action 
export const ADD_CART = "ADD_CART";
export const ADD_ITEMS = "ADD_ITEMS";


//action creators
export const addCart = (payload) => ({type: ADD_CART, payload});

export const addItems = (items) => ({type: ADD_ITEMS, payload:items});