import React from 'react'
import './PromiseCard.css'
import img from '../../Assests/Image/icons/Group 3641.png'
function PromiseCard({image,title,subtitle}) {
  return (
    <span className="allpromises_icons1_span">
    <img src={image?image:img} alt="icon" />
    <p> {title?title:'Internationally'} </p>
    <p>{subtitle?subtitle:'Certified Diamond'}</p>
  </span>
  )
}

export default PromiseCard