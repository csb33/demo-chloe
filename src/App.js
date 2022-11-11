import React, { Component } from "react";

////REACT REDUX
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        {/* state is no longer used as the data is now in the store. we need to use PROPS. 
        DISPATCH connects to the store and INCREMENT and DECREMENT are the reducer functions. */}
        <button onClick={() => this.props.dispatch({ type: "INCREMENT" })}>
          Add
        </button>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>
          Remove
        </button>
      </>
    );
  }
}

////Initial state (?)
function mapStateToProps(state) {
  return { count: state.count };
}

////Connecting to the store. Must specifiy the component eg APP
export default connect(mapStateToProps)(App);
