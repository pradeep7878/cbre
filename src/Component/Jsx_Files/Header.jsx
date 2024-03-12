import React, { useContext, useEffect, useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { MdBarChart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import "../StyleSheet/Header.css";
import CommonContext from './CommonContext';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Header = () => {

    const { heading, setHeading } = useContext(CommonContext)

    return (
        <div className='header-component position-sticky top-0'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav-tag">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{heading}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">CBRE</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="header-links nav flex-column nav_list px-3">
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

                    </div>
                </div>
                <div className="offcanvas-footer">
                    <div className="logout-container text-center ">
                        <Link to="/" className="btn btn-danger w-75 mt-3" onClick={() => localStorage.removeItem('userCredentials')}>
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
