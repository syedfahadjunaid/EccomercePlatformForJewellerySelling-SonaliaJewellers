import React from 'react'
import './BlogCard.css'
import img from '../../Assests/Image/image 18.png'
import { useNavigate } from 'react-router-dom'
function BlogCard({marginRight,image,title,blogId}) {
  const history =useNavigate()
  return (
    <div className="productcard blogcard" style={{marginRight:`${marginRight}`}}>
    <div className="productcard_top blogcard_top">
      <img src={`${process.env.React_App_Base_Image_Url+image}`} alt="product img"/>
    </div>
    <div className="productcard_bottom blogcard_bottom">
      {/* <h3>Faceted crystal bracelet</h3> */}
      <p style={{height:'75px'}}>{title?title:''}</p>
      <button onClick={()=>history(`/singleblogpage/${blogId}`)}>Read More</button>
    </div>
  </div>
  )
}

export default BlogCard