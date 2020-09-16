import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className='App'>
      <h1> Hello Try this: </h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
