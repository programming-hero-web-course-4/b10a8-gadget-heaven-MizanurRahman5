import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* dynamic */}
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;