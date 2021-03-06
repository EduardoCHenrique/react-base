import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from '../pages/Home/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
