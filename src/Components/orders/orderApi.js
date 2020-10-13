import React, { Component } from 'react';
import axios from "axios";
import OrderView from "./orderDisplay";

const OrderUrl = "http://localhost:6800/orders"

class Booking extends Component {
    constructor(){
        super()

        this.state = {
            booking: ""
        }
    }
    render() { 
        return (  
            <div className="container">
                <OrderView orderdata={this.state.booking}/>
            </div>
        );
    }

    async componentDidMount(){
        const response = await axios.get(`${OrderUrl}`)
        this.setState({booking:response.data})
    
    }
}

export default Booking;