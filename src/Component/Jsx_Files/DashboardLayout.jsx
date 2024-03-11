import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import "../StyleSheet/DashboardLayout.css";
import toast, { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
  const auth ={token:localStorage.getItem('userCredentials')}

  useEffect(() => {
    toast.success('Login successful');
  },[])

  return (
    <>
      {auth.token==='success' ? 
         <div className='container-fluid'>
            <div className='row'>
                <Sidebar />
                <Toaster />
                <div className='container-fluid col p-0'>
                    <Header/>                    
                    <Outlet/>
                </div>
            </div>
        </div>      

        :
          <Navigate to='/'/>

      }
    </>
  )
}

export default DashboardLayout
