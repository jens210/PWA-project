import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Succes from "./Succes"
import Welcome from "./Welcome"
import NotFound from "./NotFound"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onChange = this.onChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // TODO
  handleInput(event) {
    event.preventDefault();
    console.log("Go to questionaire component and save the name")
    /*
    this.addQuestionaire(
    );*/
  }

  // TODO
  onChange(event) {
    //console.log(event.target.value);
    /* this.setState({
       //[event.target.name]: event.target.value
     });*/
  }

  // TODO
  addQuestionaire() {
    // Posting JSON to API
  }

  render() {
    return (
      <Router>
        <div className="container">
          {/*TODO Move this button to the question component form. Then call the add function*/}
          <Link to={`/Succes`}><button type="submit">Send questionaire</button></Link>
        </div>
        <Switch>
          <Route exact path={'/'} render={(props) =>
            <Welcome onChange={this.onChange} handleInput={this.handleInput} />}
          />
          <Route exact path={'/Succes'} render={(props) => <Succes />} />

          {/*TODO route for question component */}

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
