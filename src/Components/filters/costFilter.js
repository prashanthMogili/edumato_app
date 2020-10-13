import React, { Component } from 'react';
import axios from "axios";

const url = "https://edumato-api.herokuapp.com/restaurants";

class CostFilter extends Component {
    constructor(){
        super()

    }

    filterCost = (event) => {
        let mealtype = sessionStorage.getItem("type");
        let cost = (event.target.value).split(",");
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;

        if(event.target.value ==" "||event.target.value == ""){
            costUrl = `${url}/${mealtype}`
        }else {
            costUrl = `${url}/${mealtype}?lcost=${lcost}&hcost=${hcost}`
        }

        console.log(costUrl);

        axios.get(costUrl)
        .then((response) => {
            this.props.datapercost(response.data)
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container filter">
                    <div className="row ml-5 m-auto ">
                        <div className="col-sm-12" onChange={this.filterCost}>
                            <p className="filter-subheading">Cost For Two</p>
                            <input type="radio" id="500" name="price-selection" value="100,500"/>
                            <label for="500">less than &#8377; 500</label><br/>
                            <input type="radio" id="500-1000" name="price-selection" value="500,1000"/>
                            <label for="500-1000">&#8377; 500 to &#8377; 1000</label><br/>
                            <input type="radio" id="1000-1500" name="price-selection" value="1000,1500"/>
                            <label for="1000-1500">&#8377; 500 to &#8377; 1000</label><br/>
                            <input type="radio" id="1500-2000" name="price-selection" value="1500,2000"/>
                            <label for="1500-2000">&#8377; 500 to &#8377; 1000</label><br/>
                            <input type="radio" id="2000+" name="price-selection" value="2000,5000"/>
                            <label for="2000+">&#8377; 2000+</label><br/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CostFilter;