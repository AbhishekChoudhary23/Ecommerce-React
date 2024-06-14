import React, { createContext, useState } from "react";
import all_product from "./../../assets/all_product";

export const ShopContext = createContext();
function getDefaultCart(){
  let cart = {};
  for(let i = 1; i<all_product.length+1; i++){
    cart[i] = 0;
  }
  return cart;
}
function ShopContextProvider(props) {
  const [cartItem, setCartItem] = useState(getDefaultCart())
  
  function addToCart(itemId){
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    console.log(cartItem)
  }
  function removeFromCart(itemId){
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))
  }
  
  function getTotalCartAmount(){
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let itemInfo = all_product.find((product)=>product.id ===Number(item))
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  }

  function getTotalCartItems(){
    let totalItem = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        totalItem += cartItem[item];
      }
    }
    return totalItem
  }
  
  const contextValue = { cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };
  return( 
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>);
}

export default ShopContextProvider;
