import React from 'react';
import { RxDashboard } from "react-icons/rx";

const Header = () => {
    return (
        <div className='header-component'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Portfolio</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="row flex-column">
                        <div className='sidebar-top-logo d-flex flex-wrap align-items-center justify-content-center'>
                            <h1 className='text-white'>CBRE</h1>
                        </div>

                        <div class="sidebar-middle-links nav flex-column nav-pills me-3 text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-selected="true">
                                <span className='pe-2'><RxDashboard className='fs-5' /></span>
                                Portfolio
                            </a>
                            <a class="nav-link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                                <span className='pe-2'><RxDashboard className='fs-5' /></span>
                                Dive deep
                            </a>
                            <a class="nav-link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                                <span className='pe-2'><RxDashboard className='fs-5' /></span>
                                Analysis
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
