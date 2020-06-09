import React, { Component } from 'react'
import authToken from '../utils/authToken'

export default class Logout extends Component {

    componentDidMount = () => {
        
        authToken()
        this.props.history.push('/')

    }
    

    render() {
        return (
            <div className="home-cont">
                <h1>Please wait...</h1>
            </div>
        )
    }
}
