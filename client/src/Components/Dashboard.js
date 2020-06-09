import React, { Component } from 'react'
import Navbar from './Navbar';
import api from '../utils/api';
// import authToken from '../utils/authToken'
import axios from 'axios'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Name'
        }
    }
    

    componentDidMount = async () => {
        let token = localStorage.getItem('token');
        
        if(!token){
            this.props.history.push('/');
        }

        console.log(axios.defaults.headers.common)

        console.log(api.defaults.headers.common)

        let response = await api.get('/info');

        if(response.data.error){

            alert(response.data.msg)

        }else{

            this.setState({
                name: response.data.name
            })

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
