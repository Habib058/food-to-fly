import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [productImage, setProductImage] = useState(null);
    const onSubmit = data => {
        console.log(data);
        const productDetails = {
            name: data.name,
            price: data.price,
            imgUrl: productImage
        };
        const url = 'http://localhost:5000/addProduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => console.log(res))

    };
    const handleChange = event => {
        //console.log(event.target.files[0]);
        const productData = new FormData();
        productData.set('key', '16cf69b83bb1ecc5b8dea23167a2100e');
        productData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', productData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setProductImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <div>
            <Admin />
            {/* <div>
                <h1>Add Products</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name='name' defaultValue="new product" {...register("name")} /> <br />
                    <input name='price' defaultValue="$20" {...register("price")} /> <br />
                    <input type='file' onChange={handleChange} /> <br />
                    <input type="submit" />
                </form>
            </div> */}
             <div className="container col-md-8">
                <h2 className="m-5 text-center">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name='name' defaultValue="new product" {...register("name")} /> <br />
                    <input className='form-control' name='price' defaultValue="$20" {...register("price")} /> <br />
                    <input className='form-control' type='file' onChange={handleChange} /> <br />
                    <input className='form-control button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;