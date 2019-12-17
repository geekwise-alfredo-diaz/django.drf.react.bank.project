import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customersList: []
    };
  }

  // Refresh customers the moment component loads
  componentDidMount() {
    this.refreshList();
  }

  // Gets customers from db
  refreshList = () => {
    axios
      .get("https://g-f-django-bank-app.herokuapp.com/customers/")
      .then(res => this.setState({ customersList: res.data }))
      .catch(err => console.log(err));
  };

  // Renders customers
  rendercustomers = () => {
    let customers = this.state.customersList;

    return customers.map(customer => (
      <li
        key={customer.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2`}
        >
          {customer.name}
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
                {this.rendercustomers()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }

}

export default App;