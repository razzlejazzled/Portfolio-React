import React from 'react';
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
    return (
  <Router>
      <div>
          <NavTabs />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
      </div>
  </Router>
    ); 
}

export default App;
