import * as React from 'react';
import {
  Box,
  Button,
} from "@chakra-ui/react"
import OpenTdbBooleanItem from './OpenTdbBooleanItem';
import OpenTdbMultipleChoiceItem from './OpenTdbMultipleChoiceItem';
import './OpenTdbQuiz.css';

// NOTE: API structure
// [{ 
//   category: "Entertainment: Video Games"
//   correct_answer: "True"
//   difficulty: "easy"
//   incorrect_answers: ["False"]
//   0: "False"
//   question: "&quot;Undertale&quot; is an RPG created by Toby Fox and released in 2015."
//   type: "boolean"
// }];

const QuizTypeMemo = {
  'boolean': OpenTdbBooleanItem,
  'multiple': OpenTdbMultipleChoiceItem,
};

const OpenTdbQuiz = (quiz) => {
  const { type } = quiz;
  const OpenDbItem = QuizTypeMemo[type];
  const [showAnswer, setShowAnswer] = React.useState(false);

  const handleOnClickToggleAnswer = (event) => {
    const nextSibling = event.target.nextSibling;
    if (showAnswer) {
      setShowAnswer(false);
      nextSibling.setAttribute('hidden', true);
    } else {
      nextSibling.removeAttribute('hidden');
      setShowAnswer(true);
    }
  }

  return (
    <Box maxW="80vw" margin="1rem auto 2rem">
      <OpenDbItem {...quiz} />
      <Button
        colorScheme="pink"
        variant="outline"
        size="sm"
        className="OpenTdbQuiz--reveal-answer"
        onClick={handleOnClickToggleAnswer}
        marginTop="1rem"
      >
        {showAnswer ? 'Hide' : 'Reveal'} Answer
      </Button>
      <small className="OpenTdbQuiz--answer" hidden>
        {quiz.correct_answer}
      </small>
    </Box>
  )
}

export default OpenTdbQuiz;
