import React from 'react';
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={15} padding="2rem" paddingBottom="10rem">
      <GridItem>
        <Button
            variant="outline"
            color="pink"
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="pink.500"
          >
            <Link to="/quiz/random">Generate Random Quiz</Link>
        </Button>
      </GridItem>
      <GridItem>
        <Button
            variant="outline"
            color="pink"
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="pink.500"
          >
            <Link to="/quiz/specify">Specify Quiz</Link>
        </Button>
      </GridItem>
    </Grid>
  )
}

export default Home;
