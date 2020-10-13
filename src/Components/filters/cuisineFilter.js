import React, { Component } from 'react';
import axios from "axios";

const url = "https://edumato-api.herokuapp.com/restaurants";

class CuisineFilter extends Component {
    cuisineLogic = (event) => {
        let mealtype = sessionStorage.getItem("type");
        let cuisineType = event.target.value;
        let cuisineUrl;
        if(cuisineType == ""){
            cuisineUrl = `${url}/${mealtype}`
        }else {
            cuisineUrl = `${url}/${mealtype}?cuisine=${event.target.value}`
        }

        axios.get(cuisineUrl)
        .then((response)=> {
            this.props.datapercuisine(response.data)
        })
        // console.log(cuisineUrl);
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container filter">
                    <div className="row ml-5 m-auto ">
                        <div className="col-sm-12">
                            <p className="filter-heading">Filters</p>
                            <p className="filter-subheading">Select Location</p>
                            <select className="select" name="city" id="Select Location">
                                <option>Select Location</option>
                                <option value="city">Delhi</option>
                                <option value="city">Mumbai</option>
                                <option value="city">Agra</option>
                                <option value="city">Jaipur</option>
                                <option value="city">pune</option>
                            </select>
                        </div>
                    </div>
                    <div className="row ml-5 m-auto">
                        <div className="col-sm-12" onChange={this.cuisineLogic}>
                            <p className="filter-subheading">Cuisine</p>
                            <input type="radio" id="food" name="cuisine" value=""/>
                            <label for="food" className="label"> All </label><br/>
                            <input type="radio" id="food1" name="cuisine" value="1"/>
                            <label for="food1" className="label"> North Indian </label><br/>
                            <input type="radio" id="food2" name="cuisine" value="2"/>
                            <label for="food2"> South Indian </label><br/>
                            <input type="radio" id="food3" name="cuisine" value="3"/>
                            <label for="food3"> Chinese </label><br/>
                            <input type="radio" id="food4" name="cuisine" value="4"/>
                            <label for="food4"> Fast Food </label><br/>
                            <input type="radio" id="food5" name="cuisine" value="5"/>
                            <label for="food5"> Street Food </label><br/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CuisineFilter;