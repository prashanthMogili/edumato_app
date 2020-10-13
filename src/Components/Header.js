import React,{component} from "react";
import {Link} from "react-router-dom";
import "./Header.css";



const Header = () => {  
    return (
            <nav className="navbar1 navbar navbar-expand-lg navbar-light">
                <Link className="logo" to = {`/`}> e! <span className="tooltiptext">Home</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <div className="navbar-links">
                        {/* <a href="#">Login</a> */}
                        <Link to="/login">Login</Link>
                        <Link to="/register">Create an account</Link>
                        {/* <a href="#">Create an account</a> */}
                        <Link to="/orders"><ion-icon name="cart"></ion-icon></Link>
                    </div>
                </div>
            </nav>
    )
}   

export default Header; 