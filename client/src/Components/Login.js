import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Navbar from './Navbar';

export default class Login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    

    handleInputs = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    render() {
        return (

            <>

            <Navbar />

            <div className="cont">


            <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                <form>
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
