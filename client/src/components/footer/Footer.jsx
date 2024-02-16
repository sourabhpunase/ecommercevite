import React from 'react'
import './footer.css'
import instagram_icon from '../assets/instagram_icon.png'
import footer_logo from '../assets/logo_big.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
<img src={footer_logo}/>
<p>Shopper</p>


</div>
<ul className='footer-links'>
    <li>Company</li>
    <li>Product</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>



</ul>
<div className="footer-social-icon">
<div className="footer-icon-container">
<img src={instagram_icon}/>
</div>
<div className="footer-icon-container">
<img src={pintrest_icon}/>
</div>
<div className="footer-icon-container">
<img src={whatsapp}/>
</div>


</div>
<div className="footer-copyright">
<hr/>
<p>Copyright @ 2023 -All Rights-Reserved</p>

</div>

    </div>
  )
}
