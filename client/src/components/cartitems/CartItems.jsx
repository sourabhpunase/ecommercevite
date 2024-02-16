import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/Shopcontext'
import removeicon from '../assets/cart_cross_icon.png'

export const CartItems = () => {

    const {all_product,cartItems,removeCart,gettotalAmount}=useContext(ShopContext)
  return (
    <div className='cartitems'>
<div className="cartitem-main">
<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr/>
{all_product.map((e)=>{
if(cartItems[e.id]>0){
    return (
    <div>
<div className="cartitem-format cartitem-main">
<img src={e.image}className='carticon-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='carticon-quantity'>{cartItems[e.id]}</button>
<p>${e.new_price*cartItems[e.id]}</p>
<img className='carticon-remove' src={removeicon} onClick={()=>{removeCart(e.id)}} />

</div>
<hr/>

</div>)
}
return null;
})}
<div className="cartitems-down">
<div className="cartitems-total">
    <h1>Cart Total</h1>
    <div>
<div className="cartitem-total-item">
<p>Subtotal</p>
<p>${gettotalAmount()}</p>

</div>
<hr/>
<div className="cartitem-total-item">
    <p>Shipping Fee</p>
    <p>free</p>
</div>
<hr/>
<div className="cartitem-total-item">
    <p>Total</p>
    <p>${gettotalAmount()}</p>
</div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
</div>
<div className="promocode">
    <p>If you have promocode ,Enter it here</p>
    <div className="promobox">
        <input type='text' placeholder='appply here'/>
        <button>Submit</button>
    </div>
</div>

</div>

    </div>
  )
}
