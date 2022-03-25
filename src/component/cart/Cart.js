import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let quantity=0;
    let name=[]
    for(const property of cart){
        quantity+=property.quantity
        name.push(property.strMeal)
    }
    return (
        <div className='cart-item'>
            <h1>Selected Item : {quantity} </h1>
            <h4>Item Name : <small>{name.join(', ')}</small> </h4>
        </div>
    );
};

export default Cart;