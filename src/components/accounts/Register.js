import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        message: '',
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
        if(username === '' || password === '') {
          this.setState({message: 'Name or password must not be empty'})
        } else {
          this.setState({message: ''})
        const newUser = {username, email, password};
        this.props.register(newUser);
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({username: ''});
        }
    }


    render() {
        if(this.props.isAuthenticated) {
          return <Redirect to="/"/>
        }

        const {username, email, password} = this.state;

        return (
          <form onSubmit={this.formSubmit} style={this.FormStyle}>
            <div style={this.headerStyle} className="login-header">
              Register
            </div>
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input onChange={this.nameInput} value={username} type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">{this.state.message}</small>
            </div>
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input onChange={this.emailInput} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">Email wont be shared</small>
            </div>
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input onChange={this.passwordInput} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button style={this.buttonStyle} type="submit" className="btn btn-primary">Submit</button>
          </form>
        )
    }

    inputStyle = {
      margin: '10px 20px 10px 20px',
    }

    buttonStyle = {
      margin: '0 20px 10px 20px',
    }

    FormStyle = {
      width: '80%',
      backgroundColor: '#fcfcfc',
      height: 'fit-content',
      margin: '65px auto 0 auto',
    }

    headerStyle = {
      backgroundColor: '#312f8b',
      height: '40px',
      textAlign: 'center',
      paddingTop: '7px',
      color: 'white',
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register})(Register)