import React from 'react'
import './SimilarProductCard.css'
import img from '../../Assests/Image/Rectangle 146.png'
function SimilarProductCard() {
  return (
    <div className='similarproductcard'>
        <div className="similarproductcard_img">
            <img src={img} alt="product banner" />
        </div>
        <div className="similarproductcard_details">
            <p>₹ 15,000 to 16,000</p>
        </div>
    </div>
  )
}

export default SimilarProductCard