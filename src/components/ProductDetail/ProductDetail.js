import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        fetch('https://sleepy-atoll-17278.herokuapp.com/product/'+productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productKey])

    // const product = products.find(pd => pd.key === productKey);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;