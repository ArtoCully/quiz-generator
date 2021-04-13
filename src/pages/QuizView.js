import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, GridItem, Spinner } from "@chakra-ui/react"
import { fetchQuizes } from '../services/opentdb';
import OpenTdbQuiz from '../components/quiz/OpenTdbQuiz';
import BottomNav from '../components/bottomNav/BottomNav';

function QuizView() {
  const [quizList, setQuizList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // ?amount=10&category=9&difficulty=easy&type=multiple&encode=base64
    let query = window.location.search || '?amount=10';
    console.log('query', query);
    fetchQuizes(query)
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
        <GridItem marginBottom="1.2rem">
            {(() => {
              if (isLoading) {
                return <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="pink"
                  size="xl"/>
              }
              if (quizList.length) {
                return quizList.map((quiz, index) => {
                  const key = uuidv4();
                  return <OpenTdbQuiz key={key} {...quiz} />
                })
              }
              return null;
            })()}
          </GridItem>
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
