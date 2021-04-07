import * as React from 'react';
import { Button, Box, Flex } from '@chakra-ui/react';
import { fetchQuizes } from '../../services/opentdb';
import './BottomNav.css';

const BottomNav = (params) => {
  const handleOnClick = () => {
    params.setLoading(true);
    fetchQuizes({ amount: 10 })
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          params.setLoading(false);
          params.setQuizList(response.data.results);
        }
      })
      .finally(() => {
        params.setLoading(false);
      });
  }

  return (
    <Box className="Bottom-nav">
      <Flex>
        <Button
          onClick={handleOnClick}
          variant="outline"
          color="pink"
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="pink.500"
          isLoading={params.isLoading}
        >
          New Questions
        </Button>
      </Flex>
    </Box>
  )
}

export default BottomNav
