import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Navbar from './Navbar';
import authToken from '../utils/authToken';
import api from '../utils/api';

export default class Login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    

    componentDidMount = () => {
        
        let token = localStorage.getItem('token')

        if(token){
            authToken(token)
            this.props.history.push('/dashboard')
        }

    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleSubmit = async (e) => {

        e.preventDefault()

        let data = this.state;

        let response = await api.post('/login',data);

        if(response.data.error){

            alert(response.data.msg)

        }else{
            //console.log(response.data)
            authToken(response.data.token)
            this.props.history.push('/dashboard')

        }

    }


    render() {
        return (

            <>

            <Navbar />

            <div className="cont">


            <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                <form onSubmit={this.handleSubmit}>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                    <MDBInput name="email" onChange={this.handleInputs} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput name="password" onChange={this.handleInputs} label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                    <MDBBtn color="primary" type="submit">Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>

            </div>
            </>
        )
    }
}
