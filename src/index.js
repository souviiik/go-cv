import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "bulma/css/bulma.css";

import App from "./App";
import store from "./store";
import ResumeTemplates from "./components/ResumeTemplates";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <App />
          </Route>
          <Route path="/resume-templates">
            <ResumeTemplates />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
