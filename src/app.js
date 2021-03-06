import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouters, { history } from "./routers/AppRouters";
import { startSetExpense } from "./actions/expenses";
import { Login, Logout } from "./actions/auth";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "./firebase/firebase";
import LoadingPage from "./Components/LoadingPage";

const store = configureStore();

//  store.dispatch(addExpense({description: 'gas bill', note:'done',createdAt:1000}));
//  store.dispatch(addExpense({description: 'rent bill', note:'done', amount:2200}));

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(USER => {
  if (USER) {
    store.dispatch(Login(USER.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(Logout());
    renderApp();
    history.push("/");
  }
});
