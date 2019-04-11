import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div>
                <h2>Home</h2>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <Link to="/form/login">
                    <button>Form</button>
                </Link>
            </div>
        );
    }
}

export default Home;