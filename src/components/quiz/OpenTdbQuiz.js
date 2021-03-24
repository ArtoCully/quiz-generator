import * as React from 'react';
import {
  Flex,
  Box,
  Button,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Heading,
} from "@chakra-ui/react"
import './OpenTdbQuiz.css';
// category: "Entertainment: Video Games"
// correct_answer: "True"
// difficulty: "easy"
// incorrect_answers: ["False"]
// 0: "False"
// question: "&quot;Undertale&quot; is an RPG created by Toby Fox and released in 2015."
// type: "boolean"

export const OpenTdbBooleanItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');
  const [value, setValue] = React.useState('');

  return (
    <article>
      <Heading
        as="h3"
        size="md"
        marginBottom="1.1rem"
      >
        <span dangerouslySetInnerHTML={{ __html: item.question }} />
      </Heading>
      <Flex align="center" justify="center">
        <RadioGroup onChange={setValue} value={value}>
          {answers.map((answer, key) => {
            const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}[]`;

            return (
              <Radio
                name={nameKey}
                value={answer}
                padding="0.375rem"
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </Radio>
            );
          })}
        </RadioGroup>
      </Flex>
    </article>
  )
};

export const OpenTdbMultipleChoiceItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');

  return (
    <article>
      <Heading
        as="h3"
        size="md"
        marginBottom="1.1rem"
      >
        <span dangerouslySetInnerHTML={{ __html: item.question }} />
      </Heading>
      <Flex align="center" justify="center">
        <CheckboxGroup>
          {answers.map((answer, key) => {
            const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}`;

            return <Checkbox
              type="checkbox"
              name={nameKey}
              value={answer}
              padding="0.375rem"
            ><span dangerouslySetInnerHTML={{ __html: answer }} /></Checkbox>
          })}
        </CheckboxGroup>
      </Flex>
    </article>
  )
};

const OpenTdbQuiz = (quiz) => {
  const { type } = quiz;
  let OpenDbItem = null;
  const [showAnswer, setShowAnswer] = React.useState(false);

  switch(type) {
    case 'boolean':
      OpenDbItem = OpenTdbBooleanItem;
      break;
    
    case 'multiple':
      OpenDbItem = OpenTdbMultipleChoiceItem;
      break;

    default:
      break;
  }

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
    <Box maxW="80vw" margin="0 auto">
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
