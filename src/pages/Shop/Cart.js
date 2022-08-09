import React from 'react';

const Cart = (props) =>{
    const {cartItems,onAdd,count} = props
    return(
        // <div>{cartItems.length === 0 && <div>cart is empty</div>}</div>
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>    );
}
export default Cart;