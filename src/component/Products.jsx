import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            if (category === 'allproduct') {
                setProducts(data || []);
            } else {
                const filteredProducts = data?.filter(
                    (product) => product.category === category
                );
                setProducts(filteredProducts || []);
            }
        } else {
            setProducts(data.slice(0, 9) || []);
        }
    }, [category, data]);

    return (
        <div>
            <div className='text-3xl mb-4'>Explore Cutting-Edge Gadgets</div>
            {products.length > 0 ? (
                <div className='grid md:grid-cols-3 ml-2 gap-3'>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className='text-xl text-gray-500'>No products available in this category.</p>
            )}
        </div>
    );
};

export default Products;
