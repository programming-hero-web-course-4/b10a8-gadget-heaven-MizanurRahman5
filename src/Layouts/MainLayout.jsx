import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    
    return (
        <div>
            <Toaster />
            {/* navbar */}
            <Navbar></Navbar>
            {/* dynamic */}
            <div className='min-h-[500px]'>
                <Outlet/>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;