import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/Shopcontext'


export const Navbar = () => {

  const [menu,setMenu]=useState('shop')
  const {getTotalitem}=useContext(ShopContext);
  return (
    <div className='navbar'
    
    >
<div className="nav-logo">
  
  <img src={logo}/>
<p>
  
  Zara</p>
  


</div>
<ul className="nav-menu">
<li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none',color:'black',fontWeight:'550'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
<li onClick={()=>{setMenu('mens')}}><Link  style={{textDecoration:'none',color:'black',fontWeight:'550'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
<li onClick={()=>{setMenu('womens')}}><Link  style={{textDecoration:'none',color:'black',fontWeight:'550'}} to='/womens'>Womens</Link>{menu==='womens'?<hr/>:<></>}</li>
<li onClick={()=>{setMenu('kids')}}><Link  style={{textDecoration:'none',color:'black',fontWeight:'550'}} to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>

</ul>
<div className="nav-login-cart">
<Link  style={{textDecoration:'none',color:'black',fontWeight:'550'}} to='/login'><button>Login</button></Link>
<Link to='/cart'><img src={cart_icon}/></Link>
<div className="nav-cart-count">{getTotalitem()}</div>


</div>


    </div>
  )
}
