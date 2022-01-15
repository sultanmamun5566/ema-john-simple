import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const {name,img,price,stock,seller,star}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
           <div>
                <img src={img} alt="" />
           </div>
           <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>{stock} only 35 left in stock - order soon</small></p>
                <Rating
                initialRating={star}
                 emptySymbol=" far fa-star icon"
                 fullSymbol="fas fa-star icon"
                 readonly></Rating>
                <br />
                <button 
                onClick={()=>props.handleAddTocart(props.product)}
                 className='btn-regular' >{element}add to cart</button>
           </div>
        </div>
    );
};

export default Product;