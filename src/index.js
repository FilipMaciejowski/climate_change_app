import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./scss/main.scss";
/* import store from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
 */
/* const App = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
); */

ReactDOM.render(<App />, document.getElementById("root"));
