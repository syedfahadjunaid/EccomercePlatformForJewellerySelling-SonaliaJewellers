import React from 'react'
import './GoldCard.css'
function GoldCard({bgcolor}) {
  return (
    <div className='goldcard' style={{background:`${bgcolor}`}}>
        <p>Gold</p>
        <h3>₹500 Plan</h3>
        <p>some text  here</p>
        <p>some text  here</p>
        <p>some text  here</p>
        <p>some text  here</p>
        <p>some text  here</p>
        <p>some text  here</p>
        <p>some text  here</p>
        <button>Explore More</button>
    </div>
  )
}

export default GoldCard