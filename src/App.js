import React from "react";
import {
  Switch,
  HashRouter,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from "./containers/landing_page/index";
import MapPage from "./containers/map/index";
import Story from "./containers/story/index";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <HashRouter /* basename={`${process.env.PUBLIC_URL}`} *//* basename={window.window.location.pathname || ''} */>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/story" component={Story} />
          <Route path="/map" component={MapPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </HashRouter>
    </Provider>
    </>
  );
};

export default App;
