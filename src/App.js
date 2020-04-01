import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import rootReducer from "./reducers";
import Header from "./components/Header";
import Search from "./components/Search";
import Games from "./components/Games";
import mySaga from "./sagas";
import Footer from "./components/Footer";

import Container from "@material-ui/core/Container";
import GameDetail from "./components/GameDetail";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

export default function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Router>
          <Switch>
            <Route path="/game/:id">
              <GameDetail />
            </Route>

            <Route path="/">
              <Header />
              <Search />
              <Games />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}
