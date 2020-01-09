import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

export class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }

    emailInput = (emailText) => {
        this.setState({email: emailText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
        this.setState({email: ''});
        this.setState({password: ''});
    }


    render() {
        if(this.props.isAuthenticated) {
          return <Redirect to="/" />
        }

        let {email, password} = this.state;

        return (
            <Form onSubmit={this.formSubmit} style={this.FormStyle} className="container">
              <Form.Group controlId="formBasicName">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.emailInput} value={email} type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                  We'll never share your name with anyone else.
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
        height: '100vh',
        padding: '30px 0 0 0'
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login)