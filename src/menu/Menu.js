import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import CreateTraining from './CreateTraining';
import ListTraining from './ListTraining';
import Profile from './Profile';


class Menu extends Component {
    logout(){
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    };  

    render(){
        return (
            <div className="bodyMenu">
                <nav className="menu">
                    <div className="menu-trigger"></div>
                    <header className="avatar">
                        <img src='/img/simple.jpg' />
                        <h2>Budiman</h2>
                    </header>
                    <ul>
                    <Link to="/menu/create"><li className="menu_create"><span>Request Training</span></li></Link>
                    <Link to="/menu/list"><li className="menu_list"><span>List Training</span></li></Link>
                    <Link to="/menu/profile"><li className="menu_profile"><span>Profile</span></li></Link>
                    <Link to="/">
                    <li className="menu_logout" onClick={() => { if (window.confirm('Are you sure you wish to logout ?')) this.logout() } }>
                        <span>Logout</span>
                    </li>
                    </Link>
                    </ul>
                </nav>

                <main>
                    <div >
                        <Route path="/menu/create" component={CreateTraining}/>
                        <Route path="/menu/list" component={ListTraining}/>
                        <Route path="/menu/profile" component={Profile}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default Menu;