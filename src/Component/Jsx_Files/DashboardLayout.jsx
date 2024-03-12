import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import "../StyleSheet/DashboardLayout.css";
import toast, { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
  const [auth, setAuth] = useState(
    {
      token: JSON.parse(localStorage.getItem('tokenDetails')) !== null ? JSON.parse(localStorage.getItem('tokenDetails')).userCredentials : 'failed'
    }
  )

  useEffect(() => {
    var getTokenDetails = JSON.parse(localStorage.getItem('tokenDetails'));
    if (getTokenDetails !== null) {
      if (getTokenDetails.LoggedIn) {
        toast.success('Login successful');
        localStorage.setItem('tokenDetails', JSON.stringify({ userCredentials: 'success', LoggedIn: false }));
      }
    }
  }, [])



  return (
    <>
      {auth.token == "success" ?
        <div className='container-fluid'>
          <div className='row'>
            <Sidebar />
            <Toaster />
            <div className='container-fluid col p-0'>
              <Header />
              <Outlet />
            </div>
          </div>
        </div>
        :
        <Navigate to='/' />

      }
    </>
  )
}

export default DashboardLayout
