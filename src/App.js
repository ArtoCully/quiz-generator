import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomeView from './pages/HomeView';
import QuizView from './pages/QuizView';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </header>
        <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/quiz">
              <QuizView />
            </Route>
            <Route path="/quiz/specify">
              TBD
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
