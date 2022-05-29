import * as React from 'react';
import { Button, Box, Flex } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { fetchQuizes } from '../../services/opentdb';
import './BottomNav.css';

const BottomNav = (props) => {
  const handleOnClick = () => {
    props.setLoading(true);
    const query = window.location.search || '?amount=10';
    fetchQuizes(query)
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          props.setLoading(false);
          props.setQuizList(response.data.results);
        }
      })
      .finally(() => {
        props.setLoading(false);
      });
  }

  return (
    <Box className="Bottom-nav">
      <Flex>
        {props.quizList.length > 0
          ? (
            <Button
              onClick={handleOnClick}
              variant="outline"
              color="pink"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="pink.500"
              isLoading={props.isLoading}
            >
              New Questions
            </Button>
          ) : (
            <Link to="/form/quiz">
              <Button
                variant="outline"
                color="pink"
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="pink.500"
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
