import React from 'react'
import './display.css'
import star from '../assets/star_icon.png'
import stardull from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
export const Display = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='display'>
<div className="display-left">
<div className="display-imglist">
<img src={product.image}/>
<img src={product.image}/>
<img src={product.image}/>
<img src={product.image}/>
</div>
<div className="diplay-img">
<img src={product.image} alt="" className="main-img" />


</div>

</div>
<div className="display-right">
<h1>{product.name}</h1>
<div className="star">
<img src={star}/>
<img src={star}/>
<img src={star}/>
<img src={star}/>
<img src={stardull}/>
<p>122</p>

</div>
<div className="display-right-price">
<div className="oldprice">${product.old_price}</div>
<div className="newprice">${product.new_price}</div>

</div>
<div className="descp">
A lighweight ,usually knitted ,pullover,shirt,close fitthing and eith a round neckline and short sleeve

</div>
<div className="right-size">
<h1>Select Size</h1>
<div className="sizes">
<div className='size'>S</div>
<div className='size'>M</div>
<div className='size'>L</div>
<div className='size'>XL</div>
<div className='size'>XXL</div>

</div>
</div>

<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className="display-right-category">
<span>Category:</span>
Women,T-shirt ,crop-top
</p>
<p className="display-right-category">
<span>Tags:</span>
modern ,latest,
</p>

</div>


    </div>
  )
}
