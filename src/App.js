import React from 'react'
import './App.css';
import Category from './Category';
import Electronics from './Electronics';
import Header from './Header';
import Home from './Home';
import Mens from './Mens';
import Womens from './Womens';
import Appliance from './Appliance';
import Stationery from './Stationery';
import Grocery from './Grocery';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path="/category/electronics"><Electronics /></Route>
        <Route path="/category/mens"><Mens /></Route>
        <Route path="/category/womens"><Womens /></Route>
        <Route path="/category/appliance"><Appliance /></Route>
        <Route path="/category/grocery"><Grocery /></Route>
        <Route path="/category/stationery"><Stationery /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
