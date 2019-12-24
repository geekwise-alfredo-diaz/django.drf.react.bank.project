import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Register extends Component {

    state = {
        email: '',
        password: '',
    }

    emailInput = (emailText) => {
        this.setState({email: emailText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({email: ''});
        this.setState({password: ''});
    }


    render() {

        let {email, password} = this.state;

        return (
            <Form onSubmit={this.formSubmit} style={this.FormStyle} className="container">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.emailInput} value={email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.passwordInput} value={password} type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        )
    }

    FormStyle = {
        marginTop: '30px'
    }
}

export default Register