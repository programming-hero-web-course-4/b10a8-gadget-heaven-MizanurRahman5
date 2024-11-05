import React, { useState, useEffect } from 'react';
import { getAllProducts, removeFromCart } from '../utility';
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = await getAllProducts();
            setCartProduct(products);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const handleDelete = (id) =>{
        removeFromCart(id)
        setCartProduct(prevProducts => prevProducts.filter(product => product.product_id !== id));
    }
    
    return (
        <div className='md:w-[1280px] mx-auto flex flex-col'>
            <div className='flex items-center justify-between mb-4'>
                <div className='text-2xl font-bold'>Cart</div>
                <div className='flex items-center gap-3'>
                    <h2 className='text-xl font-bold'>Total cost :</h2>
                    <button className='btn hover:bg-purple-700 hover:text-white rounded-3xl'>Sort by Price</button>
                    <button className='btn hover:bg-purple-700 hover:text-white rounded-3xl'>Purchase</button>
                </div>
            </div>

            {loading ? (
                <p>Loading products...</p>
            ) : cartProduct.length > 0 ? (
                cartProduct.map(product => (
                    <div className='flex gap-3 mb-2 p-3 bg-white rounded-lg items-center justify-between border-b py-4' key={product.id}>
                        <div className='flex gap-3'>
                        <div>
                            <img className='w-32 rounded-lg' src={product.product_image} alt="" />
                        </div>
                        <div><h2 className='text-lg font-semibold'>{product.product_title}</h2>
                        <p>{product.description}</p>
                        <p className='text-md'>{product.price}$</p></div>
                        </div>
                        <div onClick={() => handleDelete(product.product_id)} className='text-5xl text-red-600 cursor-pointer'><TiDeleteOutline /></div>
                    </div>
                ))
            ) : (
                <p>No products in cart</p>
            )}
        </div>
    );
};

export default Cart;
