import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";


class Footer extends Component {
    render() { 
        return ( 
            
                <div className="container-expand-lg footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 footer-brand-name">
                            <Link className="footer-brand-name" to = {`/`}> Edumato </Link>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <ul>
                                <Link to={``}> <ion-icon name="logo-facebook"></ion-icon></Link>
                                <Link to={``}> <ion-icon name="logo-instagram"></ion-icon></Link>
                                <Link to={``}> <ion-icon name="logo-twitter"></ion-icon></Link>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 copy-right">
                            &copy; 2020 Edumato
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;