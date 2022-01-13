import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart}=props;
   let total=0;
   for(const product of cart){
       total=total + product.price;
   }
   const shipping=15;
   const tax=(total+shipping)*10;
   const grandTotal =total +shipping +tax;
    return (
        <div>
             <h3>order summary</h3>
             <h5>Item ordered: {props.cart.length}</h5>
             <br />
            <p>total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax:{tax}</p>
            <p>grandtotal:{grandTotal.toFixed(3)}</p>

        </div>
    );
};

export default Cart;