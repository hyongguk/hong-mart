import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import Header from './components/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
      </main>
    </Router>
  );
}

export default App;

