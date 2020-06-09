import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Navbar from './Navbar';

export default class Registration extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             password: '',
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
                        <p className="h5 text-center mb-4">Registration</p>
                        <div className="grey-text">
                        <MDBInput name="name" onChange={this.handleInputs} label="Your name" icon="user" group type="text" validate error="wrong"
                            success="right" />
                        <MDBInput name="email" onChange={this.handleInputs} label="Your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput name="password" onChange={this.handleInputs} label="Your password" icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary">Register</MDBBtn>
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
