import React, { useContext } from 'react'
import './css/shopcategory.css'
import dropdown from '../components/assets/dropdown_icon.png'
import { ShopContext } from '../context/Shopcontext'
import { Items } from '../components/items/Items'

export const ShopCategory = (props) => {

    const {all_product}=useContext(ShopContext);

  return (
    <div className='shop-category'>

        <img className='banner' src={props.banner}/>

<div className="shopcategory-indexsort">
<p>
    <span>Showing 1-12</span>
    Out of 36 products
</p>
<div className="shopcategory-sort">
Sort by <img src={dropdown}/>

</div>

</div>
<div className="shopcategory-products">
{all_product.map((item,i)=>{
    if(props.category===item.category){
return <Items
key={i} id={item.id}
    
    name={item.name}
    image={item.image}
    new_price={item.new_price}
    old_price={item.old_price} />

}
else{
    return null;
}
}
)}

</div>
<div className="shopcategory-loadmore">
Explore More

</div>


    </div>
  )
}
