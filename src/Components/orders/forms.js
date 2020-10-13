import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./forms.css";

const restaurantDetailsUrl = "http://localhost:5500/restaurant";
const placeOrderUrl = "http://localhost:5500/placeorder";


class PlaceOrder extends Component{
    constructor(){
        super()

        this.state = {
            order_id: Math.floor(Math.random()*10000),
            rest_name: "",
            user_name: "",
            phone: "",
            address1: "",
            address2: "",
            email: "",
            person: "",
            pincode:""
        }
        
    }

    handleChangeName = (event) => {
        this.setState({user_name:event.target.value})
    }

    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})
    }

    handleChangeAddress1 = (event) => {
        this.setState({address1:event.target.value})
    } 

    handleChangeAddress2 = (event) => {
        this.setState({address2:event.target.value})
    }

    handleChangePerson = (event) => {
        this.setState({person:event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePincode = (event) => {
        this.setState({pincode:event.target.value})
    }

    handleSubmit = () => {
        let data = {
            "_id": this.state.order_id,
            "rest_name": this.state.rest_name,
            "user_name": this.state.user_name,
            "phone": this.state.phone,
            "address1": this.state.address1,
            "address2": this.state.address2,
            "email": this.state.email,
            "person": this.state.person,
            "pincode": this.state.pincode
        }

        fetch(placeOrderUrl,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push("/orders"))
    }

    render() { 
        return ( 
            <div className="container-fluid form-bg content forms">
            <form autocomplete="off" className="container">
                <div className="form-heading">
                    <h3>Place Order</h3>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Order Id:</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Order Id:" value={this.state.order_id}/>
                    </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Restaurant Name</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Restaurant Name" value={this.state.rest_name}/>
                    </div>
                    <div className="form-group col-md-6">
                        {/* <label for="inputEmail4">Order Id:</label> */}
                        <input type="text" className="form-control" id="inputEmail4" placeholder="User Name......" value={this.state.user_name} onChange={this.handleChangeName} required/>
                    </div>
                        <div className="form-group col-md-6">
                        {/* <label for="inputPassword4">Password</label> */}
                        <input type="phone" className="form-control" id="inputPassword4" placeholder="Phone........." value={this.state.phone} onChange={this.handleChangePhone} required/>
                    </div>
                </div>
                <div className="form-group">
                    {/* <label for="inputAddress">Address</label> */}
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address Lane 1........." value={this.state.address1} onChange={this.handleChangeAddress1} required/>
                </div>
                <div className="form-group">
                    {/* <label for="inputAddress2">Address 2</label> */}
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Address lane 2..." value={this.state.address2} onChange={this.handleChangeAddress2} required/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    {/* <label for="inputCity">City</label> */}
                    <input type="email" className="form-control" id="inputCity" placeholder="Email....." value={this.state.email} onChange={this.handleChangeEmail} required/>
                    </div>
                    <div className="form-group col-md-4">
                    {/* <label for="inputState">State</label> */}
                    <select id="inputState" className="form-control" value={this.state.person} onChange={this.handleChangePerson} className="form-control" required>
                        <option selected> Choose Person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    {/* <label for="inputZip">Zip</label> */}
                    <input type="text" className="form-control" placeholder="Pin code" value={this.state.pincode} onChange={this.handleChangePincode}/>
                    </div>
                </div>
                <div className="button">
                <Link to={`/rest/${this.props.match.params.id}`}
                className="btn btn-cancel btn-form-submit">Cancel </Link> &nbsp;
                <button className="btn btn-booking btn-form-submit" onClick={this.handleSubmit}>
                    Submit
                </button>
                </div> 
            </form>
            </div>


            
        );
    }

    componentDidMount(){
        let restid = this.props.match.params.id
        axios.get(`${restaurantDetailsUrl}/${restid}`)
        .then((response) => {
            this.setState({rest_name:response.data[0].name})
        })
    }
}

export default PlaceOrder;