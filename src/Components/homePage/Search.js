import React, { Component } from 'react';
import "./Search.css";

const locationUrl = "http://localhost:5500/location"
const restaurantUrl = "http://localhost:5500/restaurant?city="

class Search extends Component {
    constructor(){
        super()

        this.state = { 
            title: "Find the best restaurants, cafe's and bars.",
            location: "",
            restaurants: ""
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} - {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        // console.log(event.target.value)
        fetch(`${restaurantUrl}${event.target.value}`,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    handleRestaurant = (event) => {
        this.props.restId(event.target.value)
    }   

    render() {  

        return ( 
            <div className="header-area">
                <div className="container">
                    <div className="jumbotron text-center "> 
                        <div id="logo" className="mb-sm-5">
                            <b><u>e!</u></b>
                        </div>
                            <h1 className="mb-sm-5">
                                {this.state.title}
                            </h1>
                            
                            <div className="row">
                                <div className="col-sm-2 ml-sm-5"></div>
                                <div className="col-sm-3">
                                    <select className="locationDropDown form-control col-12" onChange={this.handleCity}>
                                        <option>Select your location</option>
                                        {this.renderCity(this.state.location)}
                                    </select>
                                </div>
                                <div className="col-sm-3">
                                    <select className="locationDropDown form-control col-12" onChange={this.handleRestaurant}>
                                        <option>Select your restaurant</option>
                                        {this.renderRestaurants(this.state.restaurants)}
                                    </select>
                                </div>                                  
                                </div>  
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </div>
                // </div>
            
        );
    }

    componentDidMount(){
        fetch(locationUrl, {method:"GET"})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
    }
}


export default Search;