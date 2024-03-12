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
                        <div>
                            <svg viewBox="0 0 4304 1024" width="94" height="25" aria-label="CBRE">
                                <path d="M1784.178 783.855h-355.145v-170.808h363.6c45.661 4.228 79.908 41.011 79.908 84.558 0.423 47.353-38.474 86.249-88.363 86.249zM1429.457 225.348h376.707c41.011 6.342 73.566 41.011 73.566 82.444s-32.555 79.908-75.68 84.558h-370.365l-4.228-167.002zM1957.523 495.934c136.562-43.125 160.238-151.359 160.238-240.145 0-136.562-99.779-253.252-396.155-253.252h-554.279v1017.235h552.165c298.913 0 409.262-147.131 409.262-292.149-0.423-175.458-171.23-231.69-171.23-231.69v0z"></path>
                                <path d="M3368.799 4.651h935.214v220.697h-675.197v164.466h608.396v222.811h-608.396v177.572h675.197v233.803h-935.214v-1019.349z"></path>
                                <path d="M2966.302 320.476c-4.228 32.555-38.897 69.338-84.558 69.338h-365.714v-162.352h365.714c43.125 0 77.794 30.441 84.558 71.452v21.562zM2823.399 4.651h-564.849v1019.772h259.594v-411.376h285.807c82.444 2.114 145.017 65.11 145.017 145.017v266.358h255.366v-328.931c0-151.359-153.896-197.021-153.896-197.021s158.124-45.661 158.124-224.925c-2.114-223.656-199.135-268.895-385.163-268.895z"></path>
                                <path d="M998.633 777.090c-4.228 0-355.145 6.342-476.063-4.228-194.907-17.334-264.244-156.010-264.244-268.472 0-140.789 99.779-244.796 255.366-264.244 73.566-8.456 478.6-4.228 482.827-4.228h8.456v-231.267h-467.607c-52.003 2.114-136.562 8.456-222.811 41.011-79.908 36.783-153.896 93.014-208.013 162.352-67.224 88.786-104.007 192.793-104.007 303.141 0 34.669 2.114 69.338 8.456 101.893 32.555 153.896 138.675 281.579 290.035 350.494 52.003 21.562 129.797 47.775 290.035 56.231l86.672 2.114h328.931v-244.796h-8.033z"></path>
                            </svg>                        
                        </div>
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
