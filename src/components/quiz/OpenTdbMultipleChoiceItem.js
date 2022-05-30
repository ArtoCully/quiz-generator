import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Flex,
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Text,
} from "@chakra-ui/react"

const OpenTdbMultipleChoiceItem = (props) => {
  const answers = [...props.incorrect_answers, props.correct_answer];
  const noSpaceCategory = props.category.replace(/\s/g, '');

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
        <CheckboxGroup
          onChange={props.handleOnChange({
            question: props.question,
            correctAnswer: props.correct_answer,
          })}
        >
          {answers.map((answer, index) => {
            const nameKey = `${noSpaceCategory}-${props.difficulty}-${props.correct_answer}-${props.id}`;
            const cKey = uuidv4();
  
            return (
              <Checkbox
                key={cKey}
                type="checkbox"
                name={nameKey}
                value={answer}
                padding="0.375rem"
              >
                <Text textAlign="left" size="sm" dangerouslySetInnerHTML={{ __html: answer }} />
              </Checkbox>
            )
          })}
        </CheckboxGroup>
      </Flex>
    </Box>
  )
};

export default OpenTdbMultipleChoiceItem;

