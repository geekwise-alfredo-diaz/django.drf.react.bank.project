import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccount: {
        account_name: "",
      },
      accountsList: []
    };
  }

  // Refresh accounts the moment component loads
  componentDidMount() {
    this.refreshList();
  }

  // Gets accounts from db
  refreshList = () => {
    axios
      .get("https://g-f-django-bank-app.herokuapp.com/accounts/")
      .then(res => this.setState({ accountsList: res.data }))
      .catch(err => console.log(err));
  };

  // Renders accounts
  renderAccounts = () => {
    let accounts = this.state.accountsList;

    return accounts.map(account => (
      <li
        key={account.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
        >
          {account.name}
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderAccounts()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }

}

export default App;