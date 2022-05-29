import React from 'react';
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={15} padding="2rem" paddingBottom="10rem">
      <GridItem>
        <Link to="/quiz?amount=15">
          <Button
              colorScheme="pink"
              size="md"
              height="120px"
              width="200px"
            >
              Generate Random Quiz
          </Button>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/form/quiz">
          <Button
              colorScheme="pink"
              size="md"
              height="120px"
              width="200px"
            >
              Generate Custom Quiz
          </Button>
        </Link>
      </GridItem>
    </Grid>
  )
}

export default Home;
