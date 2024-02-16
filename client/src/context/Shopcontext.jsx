import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'

const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    
        
    }
    return cart;
    
    }
export const ShopContext=createContext(null);

const ShopContextprovider=(props)=>{
  

    const [cartItems,setCartItems]=useState(getDefaultCart());

   
const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
}
const removeCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const gettotalAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
        totalAmount+=itemInfo.new_price * cartItems[item];
        }
         
    }
    return totalAmount;
   
}
const getTotalitem=()=>{
    let totalitem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalitem+=cartItems[item]
        }
    }
    return totalitem;
}
const contextValue={all_product,cartItems,addToCart,removeCart,gettotalAmount,getTotalitem}


 return (
    <ShopContext.Provider value={contextValue}>
{props.children}
 </ShopContext.Provider >
    
 )

 }
 export default  ShopContextprovider;