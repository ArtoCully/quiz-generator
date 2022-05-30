import * as React from 'react';
import {
  Box,
  Button,
  useToast,
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

const OpenTdbQuiz = (props) => {
  const { type } = props;
  const OpenDbItem = QuizTypeMemo[type];
  const toast = useToast();

  return (
    <Box
      maxW="80vw"
      margin="1rem auto 2rem"
      borderBottom="1px solid #EDF2F7"
      paddingBottom="2rem"
    >
      <OpenDbItem {...props} />

      <Button
        marginTop="2rem"
        variant="outline"
        size="sm"
        onClick={() =>
          toast({
            title: `Answer for question ${props.questionNumber}`,
            position: 'top',
            description: props.correct_answer,
            status: 'info',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Reveal Answer
      </Button>
    </Box>
  )
}

export default OpenTdbQuiz;
