import React, { Component } from 'react';
import "./loginpage.scss";



class Login extends Component {
    constructor(){
        super()

    }

    render() { 
        return ( 
            <div autocomplete="off" className="base-container">
                <div className="header">
                    <div className="content">
                        <div className="image">
                            <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046" alt=""/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input autocomplete="off" type="text" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="login-button-box">
                        <button type="button" className="btn btn-lg login-btn">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;