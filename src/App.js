import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Solicitation from './components/solicitation/Solicitation';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/pedidos">
            <Solicitation></Solicitation>
          </Route>
          <Route exact path="/agradecimentos">
            <Solicitation></Solicitation>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
