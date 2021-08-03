import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../App';
import TotalOrders from '../TotalOrders/TotalOrders';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=`+loggedInUser.email,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
            
        })
    },[loggedInUser.email])

    return (
        <div className="container">
            <h2 className="mb-5">Your Total Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <TotalOrders key={order._id} order={order}></TotalOrders>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;