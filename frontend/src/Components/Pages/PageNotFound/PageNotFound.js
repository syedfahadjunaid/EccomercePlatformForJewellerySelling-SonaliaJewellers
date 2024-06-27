import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const history=useNavigate()
  return (
    <div className='pagenotfound'>
        <p>Page Not Found</p>
        <button onClick={()=>history('/')}>Home</button>
    </div>
  )
}

export default PageNotFound