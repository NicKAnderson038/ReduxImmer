import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import { Base } from "reakit";
import { Content } from "rebul";

import CharacterList from "./containers/CharacterList";
import Character from "./containers/Character";
import rootReducer from "./reducers";
import "bulma/css/bulma.css";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Base padding="1rem">
        <Content>
          <Router>
            <CharacterList path="/" />
            <Character path="/:id" />
          </Router>
        </Content>
      </Base>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
