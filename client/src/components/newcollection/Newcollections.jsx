import React from 'react'
import './newcollections.css'
import new_collection from '../assets/new_collections'
import { Items } from '../items/Items'
export const Newcollections = () => {
  return (
    <div className='new-collection'>
<h1>New Collections</h1>
<hr/>

<div className="collections">

{new_collection.map((item,i)=>{
return <Items
key={i} id={item.id}
    
    name={item.name}
    image={item.image}
    new_price={item.new_price}
    old_price={item.old_price} />

})}

</div>

    </div>
  )
}
