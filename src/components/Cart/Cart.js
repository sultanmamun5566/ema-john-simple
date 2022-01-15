import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart}=props;
//    console.log(cart);
   let totalQuantity = 0;
   let total=0;
   for(const product of cart){
      if(!product.quantity){
          product.quantity=1;
      }
       total=total + product.price * product.quantity;
       totalQuantity=totalQuantity + product.quantity;
   }
   const shipping=total > 0 ? 15 : 0 ;
   const tax=(total+shipping)*0.10;
   const grandTotal =total +shipping +tax;
    return (
        <div>
             <h3>order summary</h3>
             <h5>Item ordered:{totalQuantity}</h5>
             <br />
            <p>total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax:{tax}</p>
            <p>grandtotal:{grandTotal.toFixed(3)}</p>

        </div>
    );
};

export default Cart;