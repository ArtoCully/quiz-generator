import React from 'react';
import { fetchQuizes } from './services/opentdb';
import OpenTdbQuiz from './components/quiz/opentdbquiz';
import logo from './logo.svg';
import './App.css';

function App() {

  const [quizList, setQuizList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchQuizes({ amount: 10 })
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          setLoading(false);
          setQuizList(response.data.results);
          console.log('quizList', quizList);
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        {isLoading
            ? 'Loading ...'
            : quizList.length && quizList.map((quiz, key) => <OpenTdbQuiz key={key} {...quiz} /> )
          }
      </section>
    </div>
  );
}

export default App;
