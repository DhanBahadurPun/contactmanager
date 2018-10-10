import React, { Component } from "react";
import Contacts from "./contact/contacts";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "../context";
import AddContact from "./contact/addContact";
import Header from "./layout/header";
import about from "./pages/about";
import notFound from "./pages/notFound";
import Test from './test/test'
import EditContact from './contact/editContact'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about/:id" component={about} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
