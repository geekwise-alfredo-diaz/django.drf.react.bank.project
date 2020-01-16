import React, { Component, Fragment } from 'react';
import { register } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';

// Context
import { AuthContext } from '../../context/AuthProvider'

// Auth Actions
import { getAuthLevel, createUser } from '../../actions/authActions'
// import { verify } from 'crypto';

export class Register extends Component {
    static contextType = AuthContext

    state = {
        group: [8],
        username: '',
        email: '',
        password: '',
        message: '',
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

    handleSelect = (selector) => {
      let { value } = selector.target;
      this.setState({group: [value]});
      console.log("Selected: " + value);
    }

    formSubmit = (e) => {
        e.preventDefault();
        const {email, password, username, group} = this.state
        if(username === '' || password === '') {
          this.setState({message: 'Name or password must not be empty'})
        } else {
          this.setState({message: ''})
        const newUser = {username, email, password, group};

        if(getAuthLevel(this.context.auth) >= 2) {
          createUser(newUser)
        } else {
          register(newUser, this.context.dispatch);
        }
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({username: ''});
        this.setState({group: [8]});
        }
    }


    render() {
        if(this.context.auth.isAuthenticated && ! (getAuthLevel(this.context.auth) >= 2)) {
          return <Redirect to="/"/>
        }

        const {username, email, password} = this.state;

        return (
          <form onSubmit={this.formSubmit} style={this.FormStyle}>
            <div style={this.headerStyle} className="login-header">
              {getAuthLevel(this.context.auth) >= 3 ? "Create a Member/Employee" : 
              getAuthLevel(this.context.auth) > 1 ? "Create a Member" : "Register"}
            </div>
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input onChange={this.nameInput} value={username} type="username" className="form-control"/>
              <small className="form-text text-muted">{this.state.message}</small>
            </div>
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputEmail2">Email</label>
              <input onChange={this.emailInput} value={email} type="email" className="form-control"/>
              <small className="form-text text-muted">Email wont be shared</small>
            </div>

            {getAuthLevel(this.context.auth) >= 3 ? (
            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleFormControlSelect1">Groups</label>
              <select defaultValue={8} onChange={this.handleSelect} className="form-control" id="exampleFormControlSelect1">
                {getAuthLevel(this.context.auth) >= 5 ? (
                  <Fragment>
                    <option value={7} >Branch Admin</option>
                    <option value={6} >Branch Staff</option>
                  </Fragment>) : null 
                }
                {getAuthLevel(this.context.auth) >= 4 ? (<option value={4} >Bank Admin</option>) : null }
                {getAuthLevel(this.context.auth) >= 3 ? (<option value={5} >Bank Staff</option>) : null }
                <option value={8} >Member</option>
              </select>
            </div>
            ): null }

            <div style={this.inputStyle} className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input onChange={this.passwordInput} value={password} type="password" className="form-control"/>
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

export default Register