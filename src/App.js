import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from "./containers/landing_page/index";
import MapPage from "./containers/map/index";
import Story from "./containers/story/index";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/story" component={Story} />
        <Route path="/map" component={MapPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
