import React from 'react';

const Cart = ({product}) => {
    console.log(product)
    return (
        <div>
            {product.product_title}
        </div>
    );
};

export default Cart;