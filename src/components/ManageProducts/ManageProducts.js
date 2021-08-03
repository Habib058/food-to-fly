import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../Admin/Admin';
import ProductsList from '../ProductsList/ProductsList';

const ManageProducts = () => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
            <Admin/>
            <div className="container">
            <h2 className="mb-5">Manage Product</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(prd => <ProductsList key={prd._id} prd={prd} ></ProductsList>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageProducts;