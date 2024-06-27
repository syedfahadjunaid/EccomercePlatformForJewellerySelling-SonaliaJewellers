import React, { useEffect, useState } from 'react'
import AdminHomePage from './AdminHomePage/AdminHomePage'
import AdminLogin from './AdminLogin/AdminLogin'
import { useSelector } from 'react-redux'
function Admin() {
  const {adminLogin}=useSelector((state)=>state.adminLogin)
    const [login,setLogin]=useState(false)
    const [adminId,setAdminId]=useState()
    useEffect(()=>{
      setLogin(adminLogin)
    },[adminLogin])
  return (
    <div>
        {login?<AdminHomePage setLogin={setLogin} adminId={adminId}/>:<AdminLogin setLogin={setLogin} setAdminId={setAdminId}/>}
    </div>
  )
}

export default Admin