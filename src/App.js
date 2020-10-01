import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import List from './components/list/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <List></List>
          </Route>
          <Route exact path="/agradecimentos">
            <List></List>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
