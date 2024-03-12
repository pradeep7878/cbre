import React, { useContext, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdBarChart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import "../StyleSheet/Sidebar.css"
import { Link } from 'react-router-dom';
import CommonContext from './CommonContext';
import { RiLogoutBoxLine } from "react-icons/ri";


const Sidebar = () => {

    const { heading, setHeading } = useContext(CommonContext);

    useEffect(() => {
        let URL = window.location.href;
        let splitURL = URL.split('/');
    
        let sidebarHeading = splitURL[splitURL.length-1];
        
        
      },[heading])

    return (
        <div className='sidebar-width d-none d-lg-block border-end'>
            <div className="container">
                <div className="row flex-column">
                    <div className='sidebar-top-logo d-flex flex-wrap align-items-center justify-content-center'>
                        <h1 className='text-dark'>CBRE</h1>
                    </div>

                    <div className="sidebar-middle-links nav flex-column nav_list">
                        <Link to={"/project/portfolio"} className={heading === "Portfolio" ? "nav-link rounded active" : "nav-link rounded"} onClick={() => setHeading("Portfolio")}>
                            <span className='pe-4 '><RxDashboard className='fs-5' /></span>
                            Portfolio
                        </Link>
                        <Link to={"/project/dive-deep"} className={heading === "Dive deep" ? "nav-link rounded active" : "nav-link rounded"} onClick={() => setHeading("Dive deep")}>
                            <span className='pe-4'><BsBoxSeam className='fs-5' /></span>
                            Dive deep
                        </Link>
                        <Link to={"/project/analysis"} className={heading === "Analysis" ? "nav-link rounded active" : "nav-link rounded"} onClick={() => setHeading("Analysis")}>
                            <span className='pe-4'><MdBarChart className='fs-5' /></span>
                            Analysis
                        </Link>
                       
                    </div>
                    <div className="logout-container pt-3">
                        <Link to="/" className="btn btn-danger w-100" onClick={() => localStorage.setItem('tokenDetails', JSON.stringify({userCredentials:'failed',LoggedIn:false} ))}>
                            <span className='pe-4'><RiLogoutBoxLine className='fs-5' /></span>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
