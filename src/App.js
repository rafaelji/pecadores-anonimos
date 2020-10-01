import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Solicitation from './components/solicitation/Solicitation';
import Thank from './components/thank/Thanks';

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
            <Thank></Thank>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
