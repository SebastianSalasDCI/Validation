import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    handleLinks = () =>{

        let content = null;

        if(this.state.isLoggedIn){

            content = <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">
                                Logout
                            </Link>
                        </li>
                    </ul>

        }else{


            content = <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registration" className="nav-link">
                                Register
                            </Link>
                        </li>
                    </ul>


        }

        return content;
    }


    render() {
        let content = this.handleLinks();
        return (
        <div> 
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to= '/' className="navbar-brand">
                    Home
                </Link>
                <div>
                    {content}
                </div>
            </div>
        </div>
        )
    }
}
