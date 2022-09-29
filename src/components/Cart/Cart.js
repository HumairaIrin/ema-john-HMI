import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>This is the cart component</h1>
            <p>Selected items : {cart.length}</p>
        </div>
    );
};

export default Cart;