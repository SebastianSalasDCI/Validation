import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Name'
        }
    }
    


    render() {
        return (

            <>

            <Navbar />

            <div className="cont">

            <div className="home-cont">
                <h1>Hi {this.state.name}</h1>
            </div>

            </div>
            </>
        )
    }
}
