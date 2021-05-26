import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header'
import FormComp from './components/form'
import Service from './components/service'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (

    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/form">
          <FormComp />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

