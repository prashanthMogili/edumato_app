import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./details.css";

const restaurantDetailsUrl = "http://localhost:5500/restaurant";

class RestaurantDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            rest: {
                "Cuisine":[
                    {
                        "name": ""
                    },
                    {
                        "name": ""
                    }
                ]
            }
        }
    }

    onBack = () => {
        let mealId = sessionStorage.getItem("type")
        this.props.history.push(`/list/${mealId}`)
    }

    render() { 
        // console.log(this.state.rest);
        let {rest} = this.state;
        return (
            <div className="details-box">
                <div className="image-container mt-0 mt-sm-0 ">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner image-container">
                        <div className="carousel-item active">
                        <img className="d-block" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=1200" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block" src="https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    <div className="image-text">
                        <Link to={"/gallery"}>Click to see Image Gallery</Link> 
                    </div>
                </div>
                <br/>
                <div className="container">
                    <p className="container-heading">{rest.name}</p>
                </div>
                
                <div className="conatainer">
                <div className="tab">
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                    
                        <TabPanel>
                        <div id="Overview">
                            <p className="about-heading">About this place</p>
                            <p className="aboutSubHeading">Cuisine</p>
                            <p className="aboutSubHeading-content">{rest.Cuisine[0].name} & {rest.Cuisine[1].name}</p>
                            {/* <p className="aboutSubHeading-content">Breakfast & Lunch</p> */}
                            <p className="aboutSubHeading">Average Cost</p>
                            <p className="aboutSubHeading-content">&#8377; {rest.cost} for two people (approx..)</p>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div id="Contact">
                            <p className="contact-heading">Phone Number</p>
                            <p className="phone-number">{rest.contact_number}</p>
                            <p className="contact-heading">{rest.locality}</p>
                            <p className="address">{rest.address}</p>
                        </div>
                        </TabPanel>
                    </Tabs>
                    <div>
                        <button className="btn btn-lg back-btn" onClick={this.onBack}>Go Back</button>
                        <Link className="btn btn-lg booking-btn" to={`/order/${this.props.match.params.id}`}>Place Order</Link>
                    </div>
                </div>
                </div> 
            </div>
        );
    }

    componentDidMount(){
        let restid = this.props.match.params.id;
        axios.get(`${restaurantDetailsUrl}/${restid}`)
        .then((response) => {this.setState({rest:response.data[0]})})
    }
}

export default RestaurantDetails;