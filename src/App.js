import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomeView from './pages/HomeView';
import QuizView from './pages/QuizView';
import QuizSpecifyView from './pages/QuizSpecifyView';
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
            <Route path="/form/quiz">
              <QuizSpecifyView />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
