import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import Login from './Login';
import Register from './Register';

class Home extends Component {
    render(){
        return (      
            <div className="App wrapper FormBackground">
                <div className="App__Aside FormBackground__Aside">
                    <div className="content">
                        <canvas className="scene scene--full" id="scene"></canvas>
                    </div>
                    <p className="Aside_author">Brian Reed</p>
                    <p className="Aside_text-1">Everything is designed</p>
                    <p className="Aside_text-2">Few things are designed well</p>
                </div>
                <div className="App__Form">
                    <div className="FormTitle">
                        <NavLink to="/form/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"><b>Login</b></NavLink> 
                    or <NavLink to="/form/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"><b>Register</b></NavLink>
                    </div>
                    
                    <div className="FormCenter">
                        <Route path="/form/login" component={Login}/>
                        <Route path="/form/register" component={Register}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;