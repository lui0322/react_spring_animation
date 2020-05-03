import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
