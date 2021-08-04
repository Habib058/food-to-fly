import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductsList = (props) => {
    const {_id,name,price}= props.prd;
    const history = useHistory();
    const handleDelete = (e) => {
        fetch(`https://calm-fjord-71174.herokuapp.com/deleteProduct/${_id}`,{
            method: 'DELETE'
        })
        .then(response => response.json)
        .then(data => {
            // alert('Product deleted successfully');
            history.replace('/manageProducts');
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td> <button onClick={handleDelete} className="btn btn-danger">Delete</button> </td>
        </tr>
    );
};

export default ProductsList;