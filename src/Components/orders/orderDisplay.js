import React, { Component } from 'react';
import "./orderDisplay.css";

const OrderView = (props) => {
    
    const renderTable = ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.user_name}</td>
                        <td>{item.phone}</td>
                        <td>{item.address1}</td>
                        <td>{item.address2}</td>
                        <td>{item.email}</td>
                        <td>{item.person}</td>
                        <td>{item.pincode}</td>
                        <td>Placed</td>                
                    </tr>
                )
            })
        }
    }

    return (

        <div className="order-list">
            <center><h3>My Order's</h3></center>
            <table className="table .table-responsive{-sm|-md|-lg|-xl}">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Restaurant Name</th>
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>Email</th>
                            <th>Person</th>
                            <th>Pincode</th>
                            <th>Status</th>
                        </tr>
                    </thead>      
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                    </table>
            </table>
        </div>
    )
}

export default OrderView;