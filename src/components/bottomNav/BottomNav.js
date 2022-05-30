import * as React from 'react';
import { Button, Box, Flex, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { fetchQuizes } from '../../services/opentdb';
import transformQuizResults from '../../utils/transformQuizResults';
// NOTE: Future task remove .css files
import './BottomNav.css';

// NOTE: Convert component to render prop
const BottomNav = (props) => {
  const handleOnClick = () => {
    props.setLoading(true);
    const query = window.location.search || '?amount=10';
    fetchQuizes(query)
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          props.setLoading(false);
          props.setQuizList(transformQuizResults(response.data.results));
        }
      })
      .finally(() => {
        props.setLoading(false);
      });
  }

  const handleSubmitAnswers = () => {
    props.submitAnswers();
  }

  return (
    <Box className="Bottom-nav">
      <Flex>
        {props.quizList.length > 0
          ? (
            <Stack direction='row' spacing={4} align='center'>
              <Button
                onClick={handleOnClick}
                variant="outline"
                colorScheme="pink"
                size="md"
                height="48px"
                width="200px"
                isLoading={props.isLoading}
              >
                New Questions
              </Button>
              <Button
                onClick={handleSubmitAnswers}
                colorScheme="pink"
                size="md"
                height="48px"
                width="200px"
              >
                Submit Answers
              </Button>
            </Stack>
          ) : (
            <Link to="/form/quiz">
              <Button
                colorScheme="pink"
                size="md"
                height="48px"
                width="200px"
              >
                Generate Custom Quiz
              </Button>
            </Link>
          )
        }
      </Flex>
    </Box>
  )
}

export default BottomNav
