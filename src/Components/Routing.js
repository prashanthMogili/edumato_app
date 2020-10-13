import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./homePage/Home";
import ListingApi from "./restaurantsListingPage/listingApi";
import RestaurantDetails from "./restaurantsDetailsPage/details";
import Form from "./orders/forms";
import Order from "./orders/orderApi";
import Login from "./loginPage/loginPage";
import Register from "./loginPage/register";
import Gallery from "./Gallery/gallery";

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component= {Home}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                <Route exact path="/rest/:id" component={RestaurantDetails}/>
                <Route exact path="/order/:id" component={Form}/>
                <Route exact path="/orders" component={Order}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>       
                <Route exact path="/gallery" component={Gallery}/>       
            </div>
        </BrowserRouter>
    )
}

export default Routing;