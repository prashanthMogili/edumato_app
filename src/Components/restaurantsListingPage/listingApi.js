import React, { Component } from 'react';
import axios from "axios";
// import "./listing.css";
import ListingDisplay from "./listingDisplay"
import CuisineFilter from "../filters/cuisineFilter";
import CostFilter from "../filters/costFilter";

const ListingUrl = "http://localhost:5500/restaurant?mealtype=";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            restListing: ""
        }
    }

    setDataPerFilter(sortedData){
        this.setState({restListing:sortedData})
    }

    render() { 
        // console.log(this.props.match.params.id);
        return (  
            <div>
                <div className="main-heading">
                    Breakfast places in Mumbai
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <CuisineFilter datapercuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter datapercost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>

                    <div className="container col-md-8">
                        <ListingDisplay restData = {this.state.restListing}/>
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount(){
        let mealId = this.props.match.params.id;
        sessionStorage.setItem("type",mealId);
        axios.get(`${ListingUrl}${mealId}`)
        .then((res) => {
            this.setState({restListing:res.data})
        })
    }
}

export default Listing;