import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./listing.css";

const ListingDisplay = (props) => {

    const renderRest = ({restData}) => {
        if(restData){
            if(restData.length > 0){

            return restData.map((item) => {
                return ( 
                    <div>
                        {/* <div className="col-sm-12 col-md-8 col-lg-" id={item._id}> */}
                        <div className="container-fluid col-sm-12 col-lg- rest-display">
                            <div className="container-fluid bg-light">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-5 col-md-6 col-lg-4 p-2">
                                            <div className="image-box">
                                                <img src={item.thumb} alt="some image"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-7 col-md-6 col-lg-8 p-2">
                                            <div className="content-box">
                                                <p className="top-heading">
                                                <Link to={`/rest/${item._id}`}>{item.name}</Link></p>
                                                <p className="top-subheading">FORT</p>
                                                <p className="top-content">{item.city_name}-{item.locality} </p>
                                                {/* <p className="top-content">{item.locality} </p> */}
                                                <p className="top-content">{item.address} </p>
                                                {/* Shop 1,plot D,Samruddhi Complex,Chincholi... */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <hr/>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-5 col-md-6 col-lg-4 p-2">
                                            <div className="property">
                                                <p>Cuisines:</p> 
                                                <p>COST FOR TWO:</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-7 col-md-6 col-lg-8 p-2">
                                            <div className="value">
                                                <p>{item.Cuisine.cuisine}</p>
                                                <p>&#8377; {item.cost}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                )
            })
        }else{
            return(
                <div className="container">
                    <h1 className="d-message1">Sorry!</h1>
                    <h3 className="d-message2">This request cann't be completed</h3>
                </div>
            )
        }
        }else {
            return(
                <div className="loader">
                    <img src="../img/loader.gif" alt="loaderImage"/>
                </div>
            )
        }
    }

    return(
        <div>
            <div className="col-md-9">
                {renderRest(props)}
            </div>
        </div>
        
    )
}

export default ListingDisplay;