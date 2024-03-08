import React from 'react'
import { RxDashboard } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className='vh-100 d-none d-lg-block sidebar-width'>
            <div className="container">
                <div className="row flex-column">
                    <div className='sidebar-top-logo d-flex flex-wrap align-items-center justify-content-center'>
                        <h1 className='text-dark'>CBRE</h1>
                    </div>

                    <div class="sidebar-middle-links nav flex-column nav-pills me-3 text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-selected="true">
                            <span className='pe-2'><RxDashboard className='fs-5' /></span>
                            Portfolio
                        </a>
                        <a class="nav-link" data-bs-toggle="pill"  type="button" role="tab" aria-selected="false">
                            <span className='pe-2'><RxDashboard className='fs-5' /></span>
                            Dive deep
                        </a>
                        <a class="nav-link" data-bs-toggle="pill"  type="button" role="tab" aria-selected="false">
                            <span className='pe-2'><RxDashboard className='fs-5' /></span>
                            Analysis
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
