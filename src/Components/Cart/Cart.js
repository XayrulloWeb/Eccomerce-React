
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NumericInput from './NumericInput';
import { removeFromCart } from '../../Store/CartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items) || [];

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-start">
                    <div className="roadmap">
                        <Link to="/">Home / </Link>
                        <p>Cart</p>
                    </div>
                    <div className="cart_about">
                        <div className="cart_about-start">
                            <p>Product</p>
                            <p>Price</p>
                            <p>Sale</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                            <p>Delete</p>
                        </div>
                    </div>

                    <div className="cart_content">
                        {cartItems.map(item => (
                            <div className="cart_content-start" key={item.id}>
                                <div className="cart_content-img ">
                                    <img src={item.image} alt={item.name}/>
                                    <span>{item.name}</span>
                                </div>
                                <p className="cart-width">{item.price}</p>
                                <p className="cart-width">{item.sale}</p>
                                <NumericInput value={item.quantity}/>
                                <p className='cart-width'>{item.price * item.quantity}</p>
                                <button className='cart_delete' onClick={() => dispatch(removeFromCart(item.id))}>
                                    <FontAwesomeIcon icon={faTrash} className="icon-delete"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
