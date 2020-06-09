import React, { Component } from 'react'
import Navbar from './Navbar';
import authToken from '../utils/authToken';

export default class Home extends Component {

    componentDidMount = () => {
        
        let token = localStorage.getItem('token')

        if(token){
            authToken(token)
            this.props.history.push('/dashboard')
        }

    }
    


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
