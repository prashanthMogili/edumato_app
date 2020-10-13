import React, { Component } from 'react';
import QuickSearchDisplay from "./quickSearchDisplay";

const mealTypeUrl = "http://localhost:5500/mealtype";

class QuickSearchApi extends Component {
    constructor(){
        super()

        this.state={
            mealType: ""
        }
    }

    render() { 
        return ( 
            <QuickSearchDisplay mealData={this.state.mealType} /> 
        );
    }

    componentDidMount(){
        fetch(mealTypeUrl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearchApi;