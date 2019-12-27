import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    static propTypes = {
      register: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }

    nameInput = (nameText) => {
        this.setState({username: nameText.target.value});
    }

    emailInput = (emailText) => {
        this.setState({email: emailText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    formSubmit = (e) => {
        e.preventDefault();
        const {email, password, username} = this.state
        const newUser = {username, email, password};
        this.props.register(newUser);
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({username: ''});
    }


    render() {
        console.log('Auth: ' + this.props.isAuthenticated);
        if(this.props.isAuthenticated) {
          return <Redirect to="/"/>
        }

        const {username, email, password} = this.state;

        return (
            <Form onSubmit={this.formSubmit} style={this.FormStyle} className="container">
              <Form.Group controlId="formBasicName">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.nameInput} value={username} type="username" placeholder="Enter name" />
              </Form.Group>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register})(Register)