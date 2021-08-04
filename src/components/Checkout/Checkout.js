import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const Checkout = () => {
    const {id} = useParams();
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [product, setProduct] = useState({});

    const history = useHistory();

    useEffect(() => {
        fetch(`https://calm-fjord-71174.herokuapp.com/product/${id}`)
        .then(response => response.json())
        .then(data => {setProduct(data)
        console.log(data);
    })
    },[id]);

    const {name, price} = product;

    const orderInfo = {
        email: loggedInUser.email,
        date: new Date(),
        title: name, 
        // quantity: quantity,
        price: price
    }

    const handleCheckOut = () =>{
        fetch(`https://calm-fjord-71174.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thanks! Your order has been placed, Enjoy Shopping');
            history.replace('/')
        })
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-5">Checkout</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        {/* <th scope="col">Quantity</th> */}
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td><b>Total</b></td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleCheckOut} className='btn btn-success'>Place Order</button>
        </div>
    );
};

export default Checkout;