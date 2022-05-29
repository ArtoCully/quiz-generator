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

const OpenTdbBooleanItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');
  const [value, setValue] = React.useState('');
  const key = item.question.trim();

  return (
    <Box as="article" maxWidth="480px" margin="0 auto">
      <Heading
        as="h3"
        size="md"
        marginBottom="1.1rem"
        lineHeight="1.6"
      >
        {item.questionNumber &&
          <Text
            color="pink.500"
            fontSize="sm"
          >
            Question {item.questionNumber}
          </Text>
        }
        <Text dangerouslySetInnerHTML={{ __html: item.question }} />
      </Heading>
      <Flex align="center" justify="center">
        <RadioGroup onChange={setValue} value={value}>
          {answers.map((answer, index) => {
            const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}-${key}-${index}-[]`;
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

