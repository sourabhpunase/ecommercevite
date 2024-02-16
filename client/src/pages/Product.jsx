import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Breadcum } from '../components/breadcru/Breadcum'
import { Display } from '../components/Display/Display'
import { Desc } from '../components/desc/Desc'
import { Related } from '../components/related/Related'

export const Product = () => {
    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));

  return (
    <div>
<Breadcum product={product}/>
<Display product={product}/>
<Desc/>
<Related/>



    </div>
  )
}
