import React from 'react';

const TotalOrders = (props) => {
    const {title,price,date}= props.order;
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{date}</td>
        </tr>
    );
};

export default TotalOrders;