import React from 'react'
import './popular.css'

import data_product from '../assets/data'
import { Items } from '../items/Items'
export const Popular = () => {
  return (
    <div className='popular'>
<h1>Popular In Women</h1>
<hr/>
<div className="popular-item">
{data_product.map((item,i)=>{

    return <Items key={i} id={item.id}
    
    name={item.name}
    image={item.image}
    new_price={item.new_price}
    old_price={item.old_price}
    />
})}

</div>



    </div>
  )
}
