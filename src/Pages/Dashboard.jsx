import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getAllProducts } from '../utility';
import Cart from '../component/Cart';

const Dashboard = () => {
    const [cartProduct, setCartProduct] = useState([])
    useEffect(()=>{
        const products = getAllProducts()
        setCartProduct(products)
    },[])
    return (
        <div>
            <div className='bg-purple-700 py-2  flex text-white flex-col items-center justify-center gap-2'>
             <h1 className='text-3xl font-bold'>Dashboard</h1>
             <p className='max-w-[750px] text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

             <div className='flex gap-3'>
                <NavLink to='cart'><button className='btn'>Cart</button></NavLink>
                <NavLink to='wishlist'><button className='btn'>Wishlist</button></NavLink>
                
             </div>
        </div>
        <div>
            {
                cartProduct.map(product => <Cart product={product} key={product.product_id}></Cart>)
            }
        </div>
        <Outlet/>
        </div>
    );
};

export default Dashboard;