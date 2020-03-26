import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
const Review = () => {
    
    const [cart,setCart]= useState([]);
    const [placeOrder, setPlaceOrder]=useState(false);
    const auth= useAuth();

    const handlePlaceOrder=()=>{
        setCart([]);
        setPlaceOrder(true);
        processOrder();
    }



    const removeProduct=(productKey)=>{
        const newCart= cart.filter(pd=>pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    
    useEffect(()=>{
        const savedCart= getDatabaseCart();
        const productsKey= Object.keys(savedCart);

        const cartProducts= productsKey.map(key=>{
            const product=fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setCart(cartProducts);
        // console.log(cartProducts);
    },[]);

    let thankYou;
    if(placeOrder){ 
    thankYou= <img src={happyImage} alt=""/>
}

    return (
        <div className="twin-container">
           <div className="product-container">
                
            {
                cart.map(pd=><ReviewItem 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewItem>)
            }

            {thankYou}
            {
                !cart.length && <h1>You have added Nothing</h1>
            }
            
           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to='shipment'>
                { auth.user?
                    <button className="main-button">Proceed Shipment </button>
                :
                <button className="main-button">Log Proceed</button> }
                </Link>
           </div>
        </div>
    );
};

export default Review;