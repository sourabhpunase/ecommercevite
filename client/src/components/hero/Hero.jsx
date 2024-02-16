import React from 'react'
import './hero.css'
import hero_image from '../assets/hero_image.png'
import arrow_icon from '../assets/arrow.png'
import hand_icon from '../assets/hand_icon.png'
export const Hero = () => {
  return (
    <div className='hero'>

<div className="hero-left">
<h2>New Arrivals</h2>
<div>
    <div className="hero-hand-icon">
<p>new</p>
<img src ={hand_icon}/>
</div>
<p>collections</p>
<p>for everyone</p>


    </div>

<div className="hero-latest-btn">
<div>Latest Collection</div>
<img src={arrow_icon} />

</div>


</div>




<div className="hero-right">
<img src={hero_image}/>

</div>




    </div>
  )
}
