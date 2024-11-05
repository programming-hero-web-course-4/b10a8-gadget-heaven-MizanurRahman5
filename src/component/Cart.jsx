import React, { useState, useEffect } from 'react';
import { getAllProducts, removeFromCart } from '../utility';
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
 
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = await getAllProducts();
            setCartProduct(products);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        setLoading(true);
        await removeFromCart(id);
        setCartProduct(prevProducts => prevProducts.filter(product => product.product_id !== id));
        setLoading(false);
    };

    const calculateTotalCost = () => {
        return cartProduct.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        localStorage.removeItem("product");
        setCartProduct([]);
        navigate('/');
    };

    
    const handleSortByPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
        setCartProduct(sortedProducts);
    };

    return (
        <div className='md:w-[1280px] mx-auto mt-3 flex flex-col'>
            <div className='flex items-center justify-between mb-4'>
                <div className='text-2xl font-bold'>Cart</div>
                <div className='flex items-center gap-3'>
                    <h2 className='text-xl font-bold'>Total cost: ${calculateTotalCost()}</h2>
                    <button 
                        onClick={handleSortByPrice}
                        className='btn border-purple-600 hover:bg-purple-700 hover:text-white rounded-3xl'
                    >
                        Sort by Price
                    </button>
                    <button 
                        onClick={handlePurchase}
                        className='btn border-purple-600 hover:bg-purple-700 hover:text-white rounded-3xl'
                        disabled={cartProduct.length === 0}
                    >
                        Purchase
                    </button>
                </div>
            </div>

            {loading ? (
                <p>Loading products...</p>
            ) : cartProduct.length > 0 ? (
                cartProduct.map(product => (
                    <div className='flex gap-3 mb-2 p-3 bg-white rounded-lg items-center justify-between border-b py-4' key={product.product_id}>
                        <div className='flex gap-3'>
                            <div>
                                <img className='w-32 h-28 rounded-lg' src={product.product_image} alt="" />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold'>{product.product_title}</h2>
                                <p>{product.description}</p>
                                <p className='text-md'>{product.price}$</p>
                            </div>
                        </div>
                        <div onClick={() => handleDelete(product.product_id)} className='text-5xl text-red-600 cursor-pointer'>
                            <TiDeleteOutline />
                        </div>
                    </div>
                ))
            ) : (
                <p>No products in cart</p>
            )}

            {/* Modal for Purchase Confirmation */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold">Congratulations!</h2>
                        <p>Your purchase was successful!</p>
                        <h2 className='font-bold'>Total cost: ${calculateTotalCost()}</h2>
                        <div className="flex justify-end mt-4">
                            <button 
                                onClick={handleCloseModal}
                                className="btn bg-purple-600 text-white rounded-lg px-4 py-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
