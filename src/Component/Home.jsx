import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import "./Home.css";

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Sidebar />

                <div className='container-fluid col p-0'>
                    <Header/>

                    <div className='col iframe-component'>
                        <iframe title="Sample Matsuri" src="https://app.powerbi.com/reportEmbed?reportId=4fb31fdb-a3c0-40d1-8952-f1ba487ba6d2&autoAuth=true&ctid=9d40006c-a7f3-4ad4-b348-5bb7214d9354" frameborder="0" allowFullScreen="true" width="100%" height="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
