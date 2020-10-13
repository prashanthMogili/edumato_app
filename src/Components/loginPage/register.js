import React, { Component } from 'react';
import "./register.css";



class Register extends Component {
    constructor(){
        super()

    }

    render() { 
        return ( 
            <form autocomplete="off" className="register">
                <div className="img-box">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtYoytSExwEik39w6FzStTymw8UKe7rSmIBw&usqp=CAU" alt=""/>
                </div>
                <div className="form-row">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name" required/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                    <input type="email" className="form-control" placeholder="Email..." required/>
                    </div>
                    <div className="col">
                    <input type="phone" className="form-control" placeholder="Phone" required/>
                    </div>
                </div>
                <div className="form-row">
                <div className="col">
                    <input type="password" className="form-control" placeholder="Password" required/>
                    </div>
                    <div className="col">
                    <input type="password" className="form-control" placeholder="Confirm Password" required/>
                    </div>
                </div>
                <div className="login-button-box">
                    <button type="button" className="btn login-btn">
                        Register
                    </button>
                </div>
            </form>
        );
    }
}

export default Register;