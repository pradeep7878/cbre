import React, { useContext, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdBarChart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import "../StyleSheet/Sidebar.css"
import { Link } from 'react-router-dom';
import CommonContext from './CommonContext';
import { RiLogoutBoxLine } from "react-icons/ri";


const Sidebar = () => {

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
        localStorage.removeItem("portfolioToken")
        localStorage.removeItem("diveDeepToken");
        localStorage.removeItem("analysisToken");
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
        <div className='sidebar-width d-none d-lg-block border-end'>
            <div className="container">
                <div className="row flex-column">
                    <div className='sidebar-top-logo d-flex flex-wrap align-items-center justify-content-center'>
                        <div>
                            <img src={require('../images/cbre_logo.png')} alt='cbre-logo' className='cbre-sidebar-logo' />                       
                        </div>
                    </div>

                    <div className="sidebar-middle-links nav flex-column nav_list">
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
                    <div className="logout-container pt-3">
                        <Link to="/" className="btn btn-danger w-100" onClick={() => handleLogout()}>
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
