import React from 'react';
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";

import './App.css';


function App() {
    return (
  <Router>
      <div>
          <NavTabs />
            <Route exactpath="/" component={Home} />
            <Route exactpath="/contact" component={Contact} />
            <Route exactpath="/portfolio" component={Portfolio} />
      </div>
  </Router>
    );
}

export default App;
