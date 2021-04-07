import React from 'react';
import { Grid, GridItem, Spinner } from "@chakra-ui/react"
import { fetchQuizes } from '../services/opentdb';
import OpenTdbQuiz from '../components/quiz/OpenTdbQuiz';
import BottomNav from '../components/bottomNav/BottomNav';

function QuizView() {
  const [quizList, setQuizList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchQuizes({ amount: 10 })
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          setLoading(false);
          setQuizList(response.data.results);
          console.log('quizList', quizList);
        }
      });
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(1, 1fr)" gap={15} padding="2rem" paddingBottom="10rem">
        {isLoading
            ? <GridItem>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink"
                size="xl"/>
              </GridItem>
            : quizList.length && quizList.map((quiz, key) => <GridItem marginBottom="1.2rem"><OpenTdbQuiz key={key} {...quiz} /></GridItem> )
          }
      </Grid>
      <BottomNav
        setQuizList={setQuizList}
        setLoading={setLoading}
        isLoading={isLoading}
      />
    </>
  );
}

export default QuizView;
