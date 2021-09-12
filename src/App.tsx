import React from 'react';
import {Navigation} from "./components/Navigation";
import {Route, Router, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import {Home} from "./components/Home";
import {Catalog} from "./components/Catalog";
import {Team} from "./components/Team";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Details} from "./components/Details";

const customHistory = createBrowserHistory();

function App() {
  return (
      <Provider store={store}>
      <Router history={customHistory}>
        <Navigation />
          <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/cat"} component={Catalog} />
              <Route path={"/team"} component={Team} />
              <Route path={"/film/:id"} component={Details} />
          </Switch>
      </Router>
      </Provider>
  );
}

export default App;
