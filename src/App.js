import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// layouts
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";



function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          <Route path="/landing" exact component={Landing} />
          {/* <Route path="/profile" exact component={Profile} /> */}
          {/* <Route path="/" exact component={Index} /> */}
          {/* add redirect for first page */}
          <Redirect from="*" to="/landing" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
