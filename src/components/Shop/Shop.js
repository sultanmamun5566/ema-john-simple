import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [displayProducts,setDisplayProducts]=useState([])

    useEffect(()=>{

        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        })
    },[]);
    useEffect(()=>{
      
       if(products.length){
        const savedCart=getStoredCart();
        const storedCart =[];
        for(const key in savedCart){
     
            const addedProduct = products.find(product=>product.key === key);
          
            if(addedProduct){
                const quantity =savedCart[key];
                addedProduct.quantity=quantity;
              
                storedCart.push(addedProduct)
            }
        }
        setCart(storedCart);
        
       }
    },[products])


    const handleAddTocart =(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch=event=>{
      const searchText = event.target.value;
      const matchProducts=products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()));
      setDisplayProducts(matchProducts);
    }
    return (
           <div>
                 <div className='search-container'>
                   <input
                   onChange={handleSearch}
                    type="text" placeholder='search pleace' />
                 </div>
                 <div className='shop-container'>
                    <div className='product-container'>
                     {
                      displayProducts.map(product =><Product
                         product={product} 
                         key={product.key}
                        handleAddTocart={handleAddTocart}
                     ></Product>)
                     }
                    </div>
                     <div className='cart-container'>
                     <Cart cart={cart}></Cart>
                    </div>  
                 </div>
           </div>
    );
};

export default Shop;