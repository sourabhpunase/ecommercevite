import './breadcum.css'
import React from 'react'
import arrow from '../assets/breadcrum_arrow.png'
export const Breadcum = (props) => {
  const {product}=props;
console.log(product)
  
    return (
    <div className='breadcum'>
Home<img src={arrow} />
SHOP
<img src= {arrow}
/>
{product.category}
<img src={arrow}/>

{product.name}

    </div>
  )
}
