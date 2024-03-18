import React, { useContext, useEffect, useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { MdBarChart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import "../StyleSheet/Header.css";
import CommonContext from './CommonContext';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Header = () => {

    const { heading, 
        setHeading,
        setInputDetails,
        portfolioData,
        getPortFolioToken,
        diveDeepData,
        getDiveDeepToken,
        analysisData,
        getAnalysisToken
      } = useContext(CommonContext);


    const handleLogout = () => {
        localStorage.removeItem('initialToken');
        setInputDetails({
            username: "",
            password: ""
        })
    }   

    const handlePortfolio = (e) => {
        localStorage.setItem('heading',"Portfolio")
        
        getPortFolioToken(portfolioData.group_id,portfolioData.report_id);
        localStorage.removeItem("diveDeepToken");
        localStorage.removeItem("analysisToken");
    }
    const handleDiveDeep = (e) => {
        localStorage.setItem('heading',"Dive deep")

        getDiveDeepToken(diveDeepData.group_id,diveDeepData.report_id);
        localStorage.removeItem("analysisToken");
        localStorage.removeItem("portfolioToken");
    }
    const handleAnalysis = (e) => {
        localStorage.setItem('heading',"Analysis")

        getAnalysisToken(analysisData.group_id,analysisData.report_id);
        localStorage.removeItem("diveDeepToken");
        localStorage.removeItem("portfolioToken");
    }

    return (
        <div className='header-component position-sticky top-0'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav-tag">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{localStorage.getItem('heading')}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    
                <img src={require('../images/cbre_logo.png')} alt='cbre-logo' className='cbre-header-logo me-0 mt-2' />  
                   
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="header-links nav flex-column nav_list px-3">
                            <Link to={"/project/portfolio"} className={localStorage.getItem('heading') === "Portfolio" ? "nav-link rounded active" : "nav-link rounded"} onClick={(e) =>handlePortfolio(e)}>
                                <span className='pe-4 '><RxDashboard className='fs-5' /></span>
                                Portfolio
                            </Link>
                            <Link to={"/project/dive-deep"} className={localStorage.getItem('heading') === "Dive deep" ? "nav-link rounded active" : "nav-link rounded"} onClick={(e) => handleDiveDeep(e)}>
                                <span className='pe-4'><BsBoxSeam className='fs-5' /></span>
                                Dive deep
                            </Link>
                            <Link to={"/project/analysis"} className={localStorage.getItem('heading') === "Analysis" ? "nav-link rounded active" : "nav-link rounded"} onClick={(e) => handleAnalysis(e)}>
                                <span className='pe-4'><MdBarChart className='fs-5' /></span>
                                Analysis
                            </Link>

                        </div>

                    </div>
                </div>
                <div className="offcanvas-footer">
                    <div className="logout-container text-center ">
                        <Link to="/" className="btn btn-danger w-75 mt-3"  onClick={() => handleLogout()}>
                            <span className='pe-4'><RiLogoutBoxLine className='fs-5' /></span>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
