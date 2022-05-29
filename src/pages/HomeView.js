import React from 'react';
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={15} padding="2rem" paddingBottom="10rem">
      <GridItem>
        <Link to="/quiz?amount=15">
          <Button
              variant="outline"
              color="pink"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="pink.500"
            >
              Generate Random Quiz
          </Button>
        </Link>
      </GridItem>
      <GridItem>
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
      </GridItem>
    </Grid>
  )
}

export default Home;
