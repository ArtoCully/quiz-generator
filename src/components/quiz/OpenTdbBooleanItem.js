import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Heading,
  Text,
} from "@chakra-ui/react"

const OpenTdbBooleanItem = (props) => {
  const answers = [...props.incorrect_answers, props.correct_answer];
  const noSpaceCategory = props.category.replace(/\s/g, '');
  const [value, setValue] = React.useState('');

  const handleOnChange = (value) => {
    props.handleOnChange({
      question: props.question,
      userAnswer: value,
      correctAnswer: props.correct_answer,
    })();
    setValue(value);
  }

  return (
    <Box as="article" maxWidth="480px" margin="0 auto">
      <Heading
        as="h3"
        size="md"
        marginBottom="1.1rem"
        lineHeight="1.6"
      >
        {props.questionNumber &&
          <Text
            color="pink.500"
            fontSize="sm"
          >
            Question {props.questionNumber}
          </Text>
        }
        <Text dangerouslySetInnerHTML={{ __html: props.question }} />
      </Heading>
      <Flex align="center" justify="center">
        <RadioGroup
          onChange={handleOnChange}
          value={value}
        >
          {answers.map((answer, index) => {
            const nameKey = `${noSpaceCategory}-${props.difficulty}-${props.correct_answer}-${props.id}-${index}-[]`;
            const rKey = uuidv4();

            return (
              <Radio
                key={rKey}
                name={nameKey}
                value={answer}
                padding="0.375rem" // NOTE: create a spacing tokens list
              >
                <Text textAlign="left" fontSize="sm" dangerouslySetInnerHTML={{ __html: answer }} />
              </Radio>
            );
          })}
        </RadioGroup>
      </Flex>
    </Box>
  )
};

export default OpenTdbBooleanItem;

