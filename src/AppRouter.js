import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
const AppRouter = () => {
  return (
    <div className="App">
      <h1>react router</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/about/${1}`}>About</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/users",
                    state: { name: "users's name", address: "users's address" },
                  }}
                >
                  Users
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about/:id" component={About} />

            <Route
              path="/users"
              render={(props) => (
                <div>
                  <Users {...props} />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
