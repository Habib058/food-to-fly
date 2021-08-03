import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const {_id,name, price, imgUrl } = props.product;
    console.log(_id);
    return (
        <div className="col-lg-4 col-md-6 mb-5 pb-5 mb-lg-0 ">
            <div className="card rounded shadow-sm border-0 cardDesign h-100">
                <img src={imgUrl} className="card-img-top cardImage" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    {/* //<p>{quantity}</p> */}
                    <h5>{price}</h5>
                    <Link to = {`/checkout/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;