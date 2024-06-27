import React from 'react'
import './ViewerAlsoLike.css'
import img  from '../../Assests/Image/image 31.png'
import { FavoriteBorder, LocalMall, Share } from '@mui/icons-material'
function ViewerAlsoLike({marginRight}) {
  return (
    <div className='vieweralsolike' style={{marginRight:`${marginRight}`}}>
      <div className="vieweralsolike_img">
        <img src={img} alt="model with jewellery" />
      </div>
      <div className="vieweralsolike_details">
        <button><p>Add To Cart</p> <LocalMall/></button>
        <p>₹ 15,000 to 16,000</p>
      </div>
      <div className="vieweralsolike_icons">
        <span><Share style={{width:'14px',height:'14px'}}/></span>
        <span><FavoriteBorder style={{width:'14px',height:'14px'}}/></span>
      </div>
    </div>
  )
}

export default ViewerAlsoLike