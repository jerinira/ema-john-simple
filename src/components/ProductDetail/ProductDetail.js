import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
    const {productKey}= useParams();
    const [product,setProduct]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:4200/product/'+productKey)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
        });
    },[productKey]);


    return (
        <div>
            <h1>{productKey}ProductDetail</h1>
            {product && <Product showAddToCart={false} product={product}></Product>}
            
        </div>
    );
};

export default ProductDetail;