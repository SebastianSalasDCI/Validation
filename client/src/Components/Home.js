import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Home extends Component {
    render() {
        return (

            <>

            <Navbar />

            <div className="cont">


            <div className="home-cont">
                <h1>Welcome!</h1>
                <h2>Please Login or register</h2>
                
            </div>

            </div>
            </>
        )
    }
}
