import React, { Component } from "react";

////REACT REDUX
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <h1>Simple Counter:</h1>
        <h2>My first react-redux project</h2>
        <div className="gridContainer">
          {/* state is no longer used as the data is now in the store. we need to use PROPS. 
        DISPATCH connects to the store and INCREMENT and DECREMENT are the reducer functions. */}
          <button
            className="btnAdd"
            onClick={() => this.props.dispatch({ type: "INCREMENT" })}
          >
            ADD
          </button>
          <p>{this.props.count}</p>

          <button
            className="btnRemove"
            onClick={() => this.props.dispatch({ type: "DECREMENT" })}
          >
            REMOVE
          </button>
        </div>
      </div>
    );
  }
}

////Initial state
function mapStateToProps(state) {
  return { count: state.count };
}

////Connecting to the store. Must specifiy the component eg APP
export default connect(mapStateToProps)(App);
