import React, { Component } from 'react';
import "./gallery.css";
import {Link} from "react-router-dom";


const Gallery = () => {
    return(
        <div className="container-expand-lg gallery">
            <div className="gallery-heading">
                <h2>Amazing Food Gallery</h2>
            </div>
            <div className="gallery-section">
            <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">Black Frying Pan With Spaghetti Sauce Near Brown Wooden Ladle and Ripe Tomatoes</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">sandwich and slice of lemons</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">brown wooden tray</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">Round White and Blue Ceramic Bowl With Cooked Ball Soup and Brown Wooden Chopsticks</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">cooked ramen</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/1070891/pexels-photo-1070891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">cupcakes on chopping board</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">brown soup</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">noodles</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/5619/plate-white-fish-chilli.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">fried fish with chili pepper and mint</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className=" col gallery-box">
                        <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">sliced bread</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">slice cake</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">colorful doughnuts</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/3730922/pexels-photo-3730922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/3872263/pexels-photo-3872263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/209449/pexels-photo-209449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">apple</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/2228566/pexels-photo-2228566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery-box">
                        <img src=" https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <span className="on-image-text">delicious food</span>
                    </div>
                    <div className="col gallery-box">
                        <img src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt=""/>
                        <span className="on-image-text">strawberries</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Gallery;