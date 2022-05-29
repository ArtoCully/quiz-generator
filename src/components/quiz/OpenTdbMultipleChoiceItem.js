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

const OpenTdbMultipleChoiceItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');
  const key = item.question.trim();

  return (
    <Box as="article">
      <Heading
        as="h3"
        size="md"
        marginBottom="1.1rem"
        lineHeight="1.6"
      >
        {item.questionNumber &&
          <Text
            fontSize="sm"
          >
            Question {item.questionNumber}
          </Text>
        }
        <Text dangerouslySetInnerHTML={{ __html: item.question }} />
      </Heading>
      <Flex align="center" justify="center">
        <CheckboxGroup>
          {answers.map((answer, index) => {
            const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}-${key}-${index}`;
            const cKey = uuidv4();
  
            return (
              <Checkbox
                key={cKey}
                type="checkbox"
                name={nameKey}
                value={answer}
                padding="0.375rem"
              >
                <Text size="s" dangerouslySetInnerHTML={{ __html: answer }} />
              </Checkbox>
            )
          })}
        </CheckboxGroup>
      </Flex>
    </Box>
  )
};

export default OpenTdbMultipleChoiceItem;
