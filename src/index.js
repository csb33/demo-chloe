import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//// Import Provider from REACT-REDUX
////<Provider />
import { Provider } from "react-redux";

////Import Create Store from REDUX
import { createStore } from "redux";

////Import the Reducer file containing updated state
import { reducer } from "./redux/reducer";

////Create store
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Prop drill store to provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
