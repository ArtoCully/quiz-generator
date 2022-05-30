import React from 'react';
import { Grid, GridItem, Spinner, Box, Text, Heading } from "@chakra-ui/react"
import { fetchQuizes } from '../services/opentdb';
import OpenTdbQuiz from '../components/quiz/OpenTdbQuiz';
import BottomNav from '../components/bottomNav/BottomNav';
import transformQuizResults from '../utils/transformQuizResults';

function QuizView() {
  const resultRef = React.useRef(null);
  const [quizResult, setQuizResult] = React.useState('');
  const [quizList, setQuizList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // ?amount=10&category=9&difficulty=easy&type=multiple&encode=base64
    let query = window.location.search || '?amount=10';
    fetchQuizes(query)
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          setLoading(false);
          setQuizList(transformQuizResults(response.data.results));
        }
      });
  }, []);

  const handleSubmitAnswers = async () => {
    let count = 0;

    for (let i = 0; i < quizList.length; i+=1) {
      if (quizList[i].correct === true) {
        count++;
      }
    }

    const result = `${count} / ${quizList.length}`;
    await setQuizResult(result);

    // NOTE: Results displayed at bottom of page
    // future update could be to open in a new view
    // and / or display success and error icons for each
    // question
    window.scrollTo({
      top: resultRef.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  // NOTE: State could live in useReducer
  const handleOnChange = (questionObject) => (value) => {
    const { question, userAnswer } = questionObject;

    setQuizList((prevQuizList) => {
      const updatedQuizList = prevQuizList.map((quiz) => {
        if (quiz.question === question) {
          let correct;
          let finalUserAnswer = userAnswer || value;

          // NOTE: For simplicity if the user has a multiple choice
          // question and does not choose only the correct answer then
          // it will be marked as incorrect i.e. no half or quarter points
          if (finalUserAnswer.length === 1) {
            correct = finalUserAnswer[0] === quiz.correct_answer;
          } else {
            correct = finalUserAnswer === quiz.correct_answer;
          }

          return {
            ...quiz,
            userAnswer: finalUserAnswer,
            correct,
          }
        }

        return { ...quiz };
      });
  
      return updatedQuizList;
    });
  };

  return (
    <>
      <Grid
        as="form"
        name="quiz-form"
        id="quiz-form"
        templateColumns="repeat(1, 1fr)"
        gap={15}
        padding="2rem"
        paddingBottom="10rem"
      >
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
            if (quizList.length <= 0) {
              return (
                <Box as="article">
                  <Heading as="h2" size="2xl">
                    No quiz results
                  </Heading>
                  <Text size="2xl">
                    Please try another search
                  </Text>
                </Box>
              );
            }
            return quizList.map((quiz, index) => {
              return (
                <OpenTdbQuiz
                  key={quiz.id}
                  handleOnChange={handleOnChange}
                  {...quiz}
                />
              )
            })
          })()}
        </GridItem>
        {quizResult && 
          <GridItem marginBottom="1.2rem">
            <Heading ref={resultRef} as="h3">Result: {quizResult}</Heading>
          </GridItem>
        }
      </Grid>
      <BottomNav
        quizList={quizList}
        setQuizList={setQuizList}
        setLoading={setLoading}
        isLoading={isLoading}
        submitAnswers={handleSubmitAnswers}
      />
    </>
  );
}

export default QuizView;
