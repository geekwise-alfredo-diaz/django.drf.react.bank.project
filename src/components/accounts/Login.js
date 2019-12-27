import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';

export class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAthenticated: PropTypes.bool,
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
        this.props.login(this.state.email, this.state.password);
        this.setState({email: ''});
        this.setState({password: ''});
    }


    render() {
        if(this.props.isAthenticated) {
          return <Redirect to="/" />
        }

        let {email, password} = this.state;

        return (
            <Form onSubmit={this.formSubmit} style={this.FormStyle} className="container">
              <Form.Group controlId="formBasicEmail">
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
        marginTop: '30px'
    }
}

const mapStateToProps = state => ({
  isAthenticated: state.auth.isAthenticated
});

export default connect(mapStateToProps, {login})(Login)