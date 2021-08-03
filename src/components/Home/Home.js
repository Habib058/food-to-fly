import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className="container row pb-5 mb-5 mt-5 productContainer">
            {
               products.map(pd=><Products product={pd}></Products>) 
            }
        </div>
    );
};

export default Home;